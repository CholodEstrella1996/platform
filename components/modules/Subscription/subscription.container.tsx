import { useEffect, useState } from 'react'

import { useNotification } from 'hooks/notification'

import { subscriptionData } from './mock'
import { SubscriptionComponent } from './subscription.component'
import { SubscriptionProps } from './subscription.model'

// TODO: si "isCustomer" es falso, no deberia poder ingresar acá...
export const SubscriptionContainer = () => {
  const [subscription, setSubscription] = useState<SubscriptionProps>()
  const { onError } = useNotification()

  const fetchSuscription = async () => {
    try {
      setSubscription(subscriptionData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      onError('Error')
    }
  }

  useEffect(() => {
    void fetchSuscription()
  }, [])

  if (!subscription) return null

  return <SubscriptionComponent content={subscription.content} />
}
