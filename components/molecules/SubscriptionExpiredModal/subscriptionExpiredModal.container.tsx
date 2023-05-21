import { SubscriptionExpiredModalComponent } from './subscriptionExpiredModal.component'

type Props = {
  title: string
  description: string
}

export const SubscriptionExpiredModalContainer = (props: Props) => (
  <SubscriptionExpiredModalComponent {...props} />
)
