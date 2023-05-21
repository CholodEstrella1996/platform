import { OptionProps } from 'components/atoms/Select/select.models'
import { Status } from 'services/models/client.model'
import { MemberResponse, Subscription } from 'services/models/member.model'

type NewEditGroupProps = {
  data: MemberResponse
  role: (rol: string, page: number, resetSubscription?: boolean) => void
  onSubmit: () => Promise<void>
  organizationName?: string
  isEditable: boolean
  isLoading: boolean
  isSaving: boolean
  listStatus: Status[]
  subscriptionOptions: OptionProps[]
  groupSubscription: { id: number; code: string }
}

type TableProps = {
  rows: TableData[]
  onPageChange: (role: string, page: number) => void
  totalElements: number
  pageSize: number
  stepNumber: number
  isLoading: boolean
}

type NewEditFormData = {
  id: number
  name: string
  email: string
  avatarUrl?: string | null
}

type TableData = NewEditFormData & {
  subscription: Subscription
  status: Status
}

type NewEditGroupForm = {
  name: string
  description: string
  teachersInCharge: NewEditFormData[]
  students: NewEditFormData[]
  subscription: {
    id: number
    code: string
  }
  currentSubscription?: number
  search?: string
  state?: string
  subscriptionFilter?: number
}

type NewGroup = {
  name: string
  description: string
  members: Member[]
}

type EditGroup = NewGroup

type Member = {
  id: number
  roleName: string
}

export type {
  NewEditGroupProps,
  TableData,
  NewEditGroupForm,
  NewGroup,
  EditGroup,
  Member,
  TableProps,
  NewEditFormData,
}
