type DataRow = {
  id: number
  name: string
  email: string
  status: IdNameDisplay
  avatarUrl?: string | null
  subscription: {
    id: number
    code: string
  }
}

type IdNameDisplay = {
  id: number
  name: string
  displayName: string
}

type TableDataMyChildrenProps = {
  rows: DataRow[]
  deleteUser: (id: number) => void
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  profile: string
  isLoading: boolean
}

export type { DataRow, TableDataMyChildrenProps }
