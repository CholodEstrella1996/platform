import { Status } from './client.model'
import { BaseResponse } from './responseBase.model'

type ChildrenResponse = BaseResponse & {
  content: MyChildren[]
}

type MyChildren = {
  id: number
  role: string
  status: Status
  firstName: string
  surname: string
  email: string
  avatarUrl: string
}

export type { ChildrenResponse }
