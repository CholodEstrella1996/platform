import { BaseResponse } from './responseBase.model'

export type AreasResponse = BaseResponse & {
  content: StatusDescription[]
}

export type StatusDescription = {
  id: number
  name: string
  description: string
}
