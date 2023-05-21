import { theme } from 'components/atoms/ThemeProvider'

import TableDataDesktopComponent from './TableDataDesktop'
import { TableDataLearningRoutesProps } from './tableDataLearningRoutes.model'
import TableDataMobileComponent from './TableDataMobile'
import { useMediaQuery } from '../../../hooks/use-media-query'

const { mediaQueries } = theme

const TableDataLearningRoutesComponent = (props: TableDataLearningRoutesProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return isTablet ? (
    <TableDataDesktopComponent {...props} />
  ) : (
    <TableDataMobileComponent {...props} />
  )
}

export default TableDataLearningRoutesComponent
