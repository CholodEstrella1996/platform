import { Institutions } from 'services/models/institutions.model'

type BaseInstitutionProps = {
  content: {
    id: number
    name: string
  }[]
  pageNumber: number
  totalElements: number
}

type InstitutionsProps = {
  institutions: Institutions
}

type DataSearch = {
  pageNumber: number
}

export type { BaseInstitutionProps, InstitutionsProps, DataSearch }
