import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import TableDataDesktop from './TableDataDesktop'
import TableDataMobile from './TableDataMobile'
import { TableDataMyChildrenProps } from './tableDataMyChildren.model'

const { mediaQueries } = theme

const TableDataMyChildrenComponent = (props: TableDataMyChildrenProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return isTablet ? <TableDataDesktop {...props} /> : <TableDataMobile {...props} />
}

export default TableDataMyChildrenComponent
