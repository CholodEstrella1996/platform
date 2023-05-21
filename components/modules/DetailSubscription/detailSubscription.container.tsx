import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { Subscription } from 'services/models/subscriptions'
import subscriptionService from 'services/modules/subscriptions'

import { DetailSubscriptionComponent } from './detailSubscription.component'
import messages from './detailSubscription.messages'
import { DetailSubscriptionProps } from './detailSubscription.model'

export const DetailSubscriptionContainer = ({ idSubscription }: DetailSubscriptionProps) => {
  const intl = useIntl()
  const router = useRouter()
  const [isDownloading, setIsDownloading] = useState(false)
  const [subscription, setSubscription] = useState<Subscription>()
  const { onError } = useNotification()

  const fetchSubscription = async () => {
    try {
      const data = await subscriptionService.getMySubscriptionById(idSubscription)
      setSubscription(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getMySubscriptionById --> Error\n', error)
      onError(intl.formatMessage(messages.detailSubscription.error))
      void router.push('/subscriptions')
    }
  }

  const handleDownload = async (state: boolean) => {
    setIsDownloading((prevState) => !prevState)
    try {
      await subscriptionService.downloadInvoice(idSubscription)
      // eslint-disable-next-line no-console
      console.log('state', state)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('downloadMembersList() --> error\n', error)
      onError(intl.formatMessage(messages.detailSubscription.downloadError))
    }
    setIsDownloading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchSubscription()
  }, [])

  if (!subscription) return null

  return (
    <DetailSubscriptionComponent
      content={subscription}
      isDownloading={isDownloading}
      onDownload={(state: boolean) => void handleDownload(state)}
    />
  )
}
