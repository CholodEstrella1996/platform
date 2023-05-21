import { Status as Addressees } from './client.model'
import { BaseResponse } from './responseBase.model'

export type AddresseesResponse = BaseResponse & {
  content: Addressees[]
}
