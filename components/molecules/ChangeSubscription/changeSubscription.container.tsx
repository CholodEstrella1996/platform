import { useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { useNotification } from 'hooks/notification'
import { Subscriptions, Types } from 'services/models/subscriptions'
import subscriptionService from 'services/modules/subscriptions'

import { ChangeSubscriptionComponent } from './changeSubscription.component'
import messages from './changeSubscription.messages'
import { ChangeSubscriptionContainerProps } from './changeSubscription.model'

export const ChangeSubscriptionContainer = ({
  quantity,
  showButton = true,
  canSelectEmptyInvites = false,
  handleAvailableInvites,
  userSubscription,
}: ChangeSubscriptionContainerProps) => {
  const intl = useIntl()
  const [isLoading, setIsLoading] = useState(false)
  const { setValue, getValues, watch } = useFormContext()
  const { onWarning } = useNotification()
  const [subscriptionSelect, setSubscriptionSelect] = useState<OptionProps[]>()
  const [subscriptions, setSubscriptions] = useState<Subscriptions['content']>()
  const [currentSubscription, setCurrentSubscription] = useState(
    userSubscription && {
      ...userSubscription,
      availableInvites: 0,
    },
  )

  const subscription = watch('subscription')

  const findSubscription = (value: Types[]) => value.findIndex((item) => item.availableInvites > 0)

  const getSubscriptions = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await subscriptionService.getSubscriptionsProductUnits()
      const optionsForSelect = response.map(({ id, code, availableInvites }) => ({
        id,
        value: id,
        label: `${code}  (${availableInvites} ${intl.formatMessage(messages.text.selectLabel)})`,
      }))
      setSubscriptionSelect(optionsForSelect)
      setSubscriptions(response)
      const index = quantity ? findSubscription(response) : 0
      if (!userSubscription) setCurrentSubscription(response[index])

      if (!subscription) setValue('subscription', optionsForSelect[index]?.value)

      setIsLoading((prevState) => !prevState)
      if (!handleAvailableInvites) return
      const availableInvites = response[index]?.availableInvites
      handleAvailableInvites(availableInvites)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('error >> getSubscription', error)
    }
    setIsLoading(false)
  }
  const handleSubmit = () => {
    if (!subscriptions || !subscriptionSelect) return null
    const subscriptionId = getValues('subscription')
    const currentIndex = subscriptionSelect.findIndex(({ value }) => subscriptionId === value)
    if (currentIndex === -1) return null
    if (!canSelectEmptyInvites && subscriptions[currentIndex].availableInvites < 1) {
      onWarning(intl.formatMessage(messages.text.notifications.warning))
      setValue('subscription', currentSubscription?.id)
      return null
    }
    if (handleAvailableInvites) handleAvailableInvites(subscriptions[currentIndex].availableInvites)
    setCurrentSubscription(subscriptions[currentIndex])
    return subscriptions[currentIndex]
  }

  useEffect(() => {
    if (showButton) void getSubscriptions()
  }, [])
  return (
    <ChangeSubscriptionComponent
      subscriptionSelect={subscriptionSelect ?? []}
      subscriptions={subscriptions ?? []}
      quantity={quantity}
      showButton={showButton}
      onSubmit={handleSubmit}
      currentSubscription={currentSubscription}
      isLoading={isLoading}
      canSelectEmptyInvites={canSelectEmptyInvites}
    />
  )
}
