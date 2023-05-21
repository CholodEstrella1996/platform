import { ProgressBarComponent } from './progressBar.component'

type Props = {
  activeMembers: number
  availableInvitations: number
  invitedMembers: number
  totalInvitations: number
}

export const ProgressBarContainer = (props: Props) => <ProgressBarComponent {...props} />
