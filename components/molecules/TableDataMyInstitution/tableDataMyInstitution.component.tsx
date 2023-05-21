import { theme } from 'components/atoms/ThemeProvider'

import TableDataDesktopComponent from './TableDataDesktop'
import TableDataMobileComponent from './TableDataMobile'
import { DataRow } from './tableDataMyInstitution.model'
import { useMediaQuery } from '../../../hooks/use-media-query'

const { mediaQueries } = theme

type Props = {
  rows: DataRow[]
  deleteUser: (id: number) => void
  onSubmit: () => Promise<void>
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  activePage: number
  profile: string
  isLoading: boolean
}

export const TableDataMyInstitutionComponent = ({
  rows,
  deleteUser,
  onSubmit,
  totalElements,
  pageSize,
  activePage,
  pageChange,
  profile,
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
      deleteUser={(id: number) => deleteUser(id)}
      onSubmit={onSubmit}
      profile={profile}
      isLoading={isLoading}
    />
  ) : (
    <TableDataMobileComponent
      rows={rows}
      totalElements={totalElements}
      pageSize={pageSize}
      activePage={activePage}
      pageChange={pageChange}
      deleteUser={(id: number) => deleteUser(id)}
      onSubmit={onSubmit}
      profile={profile}
      isLoading={isLoading}
    />
  )
}
