import { Status } from 'services/models/client.model'

type DataRow = {
  id: number
  name: string
  email: string
  status: Status
  avatarUrl?: string | null
  subscription: {
    id: number
    code: string
  }
}

type TableDataMyInstitutionProp = {
  rows: DataRow[]
  deleteUser: (id: number) => void
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  profile: string
  isLoading: boolean
}

type TableMyInstitutionProps = TableDataMyInstitutionProp & {
  onSubmit: () => Promise<void>
}

export type { DataRow, TableDataMyInstitutionProp, TableMyInstitutionProps }
