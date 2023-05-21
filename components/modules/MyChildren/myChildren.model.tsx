import { OptionProps } from 'components/atoms/Select/select.models'
import { Status } from 'services/models/client.model'
import { MemberResponse } from 'services/models/member.model'

type ProfileProps = {
  onSearch: () => Promise<void>
  profile: string
  route: string
  pageChange?: (newPage: number) => void
  data: MemberResponse
  deleteUser: (id: number) => void
  listStatus: Status[]
  isLoading: boolean
}

type MyChildrenProps = {
  pageChange: (page: number) => void
  data: MemberResponse
  deleteUser: (id: number) => void
  onSearch: () => Promise<void>
  listStatus: Status[]
  subscriptionList: OptionProps[]
  isLoading: boolean
}

type DataFilter = {
  search?: string
  state?: string
  subscriptionId?: number
}

type AddUserProps = {
  id: number
  name: string
  isStudent: boolean
  groupList: OptionProps[]
}

type AddUserForm = {
  memberId: number
  roleName: string
  classroomIds: number[]
}

export type { ProfileProps, MyChildrenProps, DataFilter, AddUserProps, AddUserForm }
