import { BaseResponse } from './responseBase.model'
import { CookieProps } from '../../components/molecules/CardCookie/cardCookie.model'

type ResponseCookie = BaseResponse & {
  content: CookieProps
}

export type { ResponseCookie }
