import { theme } from 'components/atoms/ThemeProvider'

import { DataRow } from './tableDataAnnouncement.model'
import TableDataDesktopComponent from './TableDataDesktop/tableDataDesktop.component'
import TableDataMobileComponent from './TableDataMobile/tableDataMobile.component'
import { useMediaQuery } from '../../../hooks/use-media-query'

const { mediaQueries } = theme

type Props = {
  rows: DataRow[]
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  activePage: number
  isLoading: boolean
}

const TableDataAnnouncementComponent = ({
  rows,
  totalElements,
  pageSize,
  activePage,
  pageChange,
  isLoading,
}: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return isTablet ? (
    <TableDataDesktopComponent
      rows={rows}
      totalElements={totalElements}
      pageSize={pageSize}
      activePage={activePage}
      pageChange={pageChange}
      isLoading={isLoading}
    />
  ) : (
    <TableDataMobileComponent
      rows={rows}
      totalElements={totalElements}
      pageSize={pageSize}
      activePage={activePage}
      pageChange={pageChange}
      isLoading={isLoading}
    />
  )
}

export default TableDataAnnouncementComponent
