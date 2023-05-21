import { BaseResponse } from './responseBase.model'

type ResponseBoarding = BaseResponse & {
  content: Boarding[]
}

type Boarding = {
  id: number
  title: string
  description: string
  pictureUrl: string
  order: number
  userKind: string
}

export type { ResponseBoarding, Boarding }
