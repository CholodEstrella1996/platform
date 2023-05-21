import { Status } from './client.model'
import { BaseResponse } from './responseBase.model'

type ResponseGroups = BaseResponse & {
  content: Group[]
}

type Group = {
  id: number
  name: string
  description: string
  subscription: Subscription
}

type Subscription = {
  id: number
  code: string
}

type Role = Status & {
  members: IdNameEmail[]
}

type IdNameEmail = {
  id: number
  name: string
  email: string
  avatarUrl: string
  invited: boolean
}

type GroupById = Group & {
  studentCount: number
  learningUnitCount?: number
  organizationId: number
  roles: Role[]
}

export type { ResponseGroups, Group, GroupById }
