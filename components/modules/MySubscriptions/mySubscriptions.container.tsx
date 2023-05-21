import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Spinner from 'components/atoms/Spinner'
import { useNotification } from 'hooks/notification'
import { MySubscriptions } from 'services/models/subscriptions'
import subscriptionService from 'services/modules/subscriptions'

import { MySubscriptionsComponent } from './mySubscriptions.component'
import messages from './mySubscriptions.messages'

export const MySubscriptionsContainer = () => {
  const [subscriptions, setSubscriptions] = useState<MySubscriptions[]>()
  const [isLoading, setIsLoading] = useState(false)
  const intl = useIntl()
  const { onError } = useNotification()
  const router = useRouter()

  const fetchSubscriptions = async () => {
    setIsLoading((prev) => !prev)
    try {
      const data = await subscriptionService.getMySubscriptions()
      setSubscriptions(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetSubscriptions error >>: ', error)
      onError(intl.formatMessage(messages.fetchSubscriptionsError))
      await router.push(`/dashboard`)
    }
    setIsLoading((prev) => !prev)
  }

  useEffect(() => {
    void fetchSubscriptions()
  }, [])

  if (isLoading) return <Spinner />
  return <MySubscriptionsComponent subscriptions={subscriptions ?? []} />
}
