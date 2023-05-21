import { Status } from 'services/models/client.model'
import { MySubscriptions } from 'services/models/subscriptions'

export type SubscriptionProps = {
  subscriptions: MySubscriptions[]
}

export type CardProps = {
  id: number
  name: string
  type: string
  status: Status
}
