import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { TableDataAssignmentsProps } from './tableDataAssignments.model'
import TableDataDesktop from './TableDataDesktop'
import TableDataMobile from './TableDataMobile'

const { mediaQueries } = theme
export const TableDataAssignmentsComponent = (props: TableDataAssignmentsProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return isTablet ? <TableDataDesktop {...props} /> : <TableDataMobile {...props} />
}
