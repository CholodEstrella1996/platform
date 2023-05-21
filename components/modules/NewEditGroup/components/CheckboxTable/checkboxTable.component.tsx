import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { TableData } from '../../newEditGroup.model'
import TableDataDesktopComponent from '../TableDataDesktop'
import TableDataMobileComponent from '../TableDataMobile'

const { mediaQueries } = theme

type Props = {
  rows: TableData[]
  onPageChange: (role: string, page: number) => void
  totalElements: number
  pageSize: number
  stepNumber: number
  isLoading: boolean
}

export default function CheckboxTable({
  rows,
  totalElements,
  pageSize,
  onPageChange,
  stepNumber,
  isLoading,
}: Props) {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return isTablet ? (
    <TableDataDesktopComponent
      rows={rows}
      totalElements={totalElements}
      pageSize={pageSize}
      onPageChange={onPageChange}
      stepNumber={stepNumber}
      isLoading={isLoading}
    />
  ) : (
    <TableDataMobileComponent
      rows={rows}
      totalElements={totalElements}
      pageSize={pageSize}
      onPageChange={onPageChange}
      stepNumber={stepNumber}
      isLoading={isLoading}
    />
  )
}
