import { OptionProps } from 'components/atoms/Select/select.models'
import { Subscriptions } from 'services/models/subscriptions'

type SubscriptionModalProps = {
  subscriptionSelect: OptionProps[]
  subscriptions: Subscriptions['content']
  handlePreventModalClose: (availableInvites: number) => void
}

type ChangeSubscriptionContainerProps = Pick<
  ChangeSubscriptionComponentProps,
  'quantity' | 'showButton' | 'canSelectEmptyInvites'
> & {
  handleAvailableInvites?: (invites: number) => void
  userSubscription?: Pick<SelectedSubscription, 'id' | 'code'>
}

type ChangeSubscriptionComponentProps = Pick<
  SubscriptionModalProps,
  'subscriptionSelect' | 'subscriptions'
> & {
  quantity?: boolean
  showButton?: boolean
  onSubmit?: () => void
  currentSubscription?: SelectedSubscription
  isLoading: boolean
  canSelectEmptyInvites?: boolean
}

type SelectedSubscription = {
  id: number
  code: string
  availableInvites: number
}

export type {
  SelectedSubscription,
  ChangeSubscriptionComponentProps,
  SubscriptionModalProps,
  ChangeSubscriptionContainerProps,
}
