import { SentInviteModalComponent } from './sentInviteModal.component'

type Props = {
  isOpen: boolean
  isChildrenInvitation: boolean
}

export const SentInviteModalContainer = (props: Props) => <SentInviteModalComponent {...props} />
