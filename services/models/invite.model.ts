import { BaseResponse } from './responseBase.model'

export type InviteResponse = BaseResponse & {
  content: Invite[]
}

export type InviteRequest = Omit<SendInvite, 'subscription'> & { subscriptionId: number }

type Invite = {
  id: number
  email: string
  role?: Role
  active: boolean
  status: string
}

type Role = {
  id: number
  name: string
  displayName: string
}

export type SendInvite = {
  languageCode: string
  message?: string
  classroomIds: string[]
  role?: string
  emailList: string[]
  subscription: number
}
