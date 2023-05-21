import { SelectProps, FieldReference } from 'components/atoms/Select/select.models'
import { Group } from 'services/models/group.model'
import { SendInvite } from 'services/models/invite.model'
import { Language } from 'services/models/languages.model'

type InviteComponentProps = {
  profile: string
  organizationName: string
  listLanguage: Language[]
  listGroup: Group[]
  dataInvite: (data: SendInvite) => void
  isChildrenInvitation: boolean
  parentName?: string
  reference: SelectProps['reference']
  isSending: boolean
  openModal: boolean
}

type CommonInvitationProps = Pick<
  InviteComponentProps,
  'profile' | 'organizationName' | 'isChildrenInvitation' | 'parentName' | 'reference'
> & {
  handleEmailList: (emails: string[]) => void
  emailsList: string[]
}

type InvitationMessageProps = Pick<
  InviteComponentProps,
  'listLanguage' | 'listGroup' | 'isChildrenInvitation' | 'reference'
>

type SelectReference = FieldReference

export type { InviteComponentProps, CommonInvitationProps, InvitationMessageProps, SelectReference }
