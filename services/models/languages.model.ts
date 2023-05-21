import { BaseResponse } from './responseBase.model'

export type ResponseLanguage = BaseResponse & {
  content: Language[]
}

export type Language = {
  id: number
  name: string
  languageCode: string
  defaultLanguage: boolean
}
