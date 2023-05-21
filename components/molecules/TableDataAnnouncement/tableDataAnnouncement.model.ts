type DataRow = {
  id: number
  affair: string
  message: string
  shippingDate: string
  recipientRoles?: string
}

type TableDataAnnouncementProp = {
  rows: DataRow[]
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  isLoading: boolean
}

export type { DataRow, TableDataAnnouncementProp }
