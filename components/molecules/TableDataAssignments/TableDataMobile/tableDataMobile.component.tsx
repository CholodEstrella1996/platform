import { Divider, TablePagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAssignment } from 'components/modules/Assignments/assignments.hook'
import { useNotification } from 'hooks/notification'
import { Assignment } from 'services/models/assignments.model'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import { TableMobileGlobalStyles } from './tableDataMobile.styles'
import ActionsMenu from '../ActionsMenu'
import messages from '../tableDataAssignments.messages'
import { TableDataAssignmentsProps } from '../tableDataAssignments.model'

const { colors } = theme
const PAGE_SIZE = 10
const ACTIVE_PAGE = 0
const UNSUBMITTED_STATUS = 'unsubmitted'

export const TableDataMobileComponent = ({
  assignments,
  isLoading,
  handleAssignments,
  fetchAssignments,
  onPageChange,
}: TableDataAssignmentsProps) => {
  const { content: rows, totalElements, number } = assignments
  const intl = useIntl()
  const router = useRouter()
  const { onWarning } = useNotification()
  const columnVisibility = useAssignment()

  const { columnVisibilityModel } = { ...columnVisibility }
  const isFromGroups = router.query['id-group']
  const history = historyPath(router.asPath)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    onPageChange(newPage)
  }

  const handleOnClickRow = (row: Assignment) => {
    if (row.status.name !== UNSUBMITTED_STATUS)
      return void router.push(`${history}/detail-assignment/${row.id}/${row.studentName}`)
    onWarning(intl.formatMessage(messages.resultsTableData.unsubmitted))
    return null
  }

  const renderCard = (item: Assignment) => (
    <div key={item.id}>
      <div className="tableMobile__card">
        <button type="button" onClick={() => handleOnClickRow(item)}>
          <div className="tableMobile__card__data">
            <div className="tableMobile__data__name">
              {columnVisibilityModel?.studentName && (
                <Typography variant="s1" color={colors.neutrals[500]}>
                  {item.studentName}
                </Typography>
              )}
              <div className="tableMobile__data__practice">
                <Typography variant="s2" color={colors.neutrals[300]}>
                  {item.applicationName}
                </Typography>
              </div>
            </div>
            <div className="tableMobile__data__status">
              <div className="subscription__status">
                {!isFromGroups && <SubscriptionType type={item.subscriptionCode} />}
                {columnVisibilityModel?.status && (
                  <Chip title={item.status.displayName} status={item.status.name} fullWidth />
                )}
              </div>
              {columnVisibilityModel?.finalAverage && item.status.name !== UNSUBMITTED_STATUS && (
                <Typography variant="s2" color={colors.neutrals[400]}>
                  {item.finalAverage}
                </Typography>
              )}
            </div>
          </div>
        </button>
        <ActionsMenu
          selectedRow={item}
          handleAssignments={handleAssignments}
          fetchAssignments={fetchAssignments}
        />
      </div>
      <Divider className="tableMobile__divider" light />
    </div>
  )
  return (
    <>
      {isLoading && (
        <div className="tableMobile__loading">
          <Spinner />
        </div>
      )}
      {!isLoading &&
        (rows.length > 0 ? (
          <>
            {rows.map(renderCard)}
            <TablePagination
              component="div"
              className="tableMobile__pagination"
              count={totalElements}
              page={number ?? ACTIVE_PAGE}
              onPageChange={handleChangePage}
              rowsPerPage={PAGE_SIZE}
              rowsPerPageOptions={[-1]}
              labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
            />
          </>
        ) : (
          <Dialog message={intl.formatMessage(messages.resultsTableData.noRows)} />
        ))}

      <style jsx global>
        {TableMobileGlobalStyles}
      </style>
    </>
  )
}
