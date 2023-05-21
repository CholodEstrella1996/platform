import { StatusDescription } from './area.model'
import { BaseResponse } from './responseBase.model'

export type TopicResponse = BaseResponse & {
  content: StatusDescription[]
}
