import { BaseResponse } from './responseBase.model'

type InstitutionsResponse = BaseResponse & {
  content: Institution[]
}

type Institution = {
  id: number
  name: string
  educationKind: {
    id: number
    name: string
    displayName: string
  }
  sector: {
    id: number
    name: string
    displayName: string
  }
}

type Institutions = InstitutionsResponse

export type { InstitutionsResponse, Institution, Institutions }
