import { Status } from './client.model'
import { BaseResponse } from './responseBase.model'

type MemberResponse = BaseResponse & {
  content: Member[]
}

type MemberStatusResponse = BaseResponse & {
  content: Status[]
}

type Member = {
  id: number
  role: string
  status: Status
  firstName: string
  surname: string
  email: string
  avatarUrl: string
  subscription: Subscription
  userId: string
}

type Subscription = {
  id: number
  code: string
}

export type { MemberResponse, MemberStatusResponse, Member, Subscription }
