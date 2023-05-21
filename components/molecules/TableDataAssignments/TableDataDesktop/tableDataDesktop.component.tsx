import { useState } from 'react'

import { Box, TablePagination } from '@mui/material'
import {
  DataGrid,
  enUS,
  esES,
  trTR,
  ptBR,
  GridColumns,
  GridRenderCellParams,
  GridCellParams,
} from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import { useAssignment } from 'components/modules/Assignments/assignments.hook'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Assignment } from 'services/models/assignments.model'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import { Cell } from './components/cell'
import ActionsMenu from '../ActionsMenu'
import messages from '../tableDataAssignments.messages'
import { TableDataAssignmentsProps } from '../tableDataAssignments.model'

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}
const PAGE_SIZE = 10
const ACTIVE_PAGE = 0

export const TableDataDesktopComponent = ({
  assignments,
  isLoading,
  handleAssignments,
  fetchAssignments,
  onPageChange,
}: TableDataAssignmentsProps) => {
  const { content: rows, totalElements, number } = assignments
  const intl = useIntl()
  const router = useRouter()
  const { language } = useAppContext()
  const { onWarning } = useNotification()
  const columnVisibility = useAssignment()
  const { columnVisibilityModel: columnsModel } = { ...columnVisibility }

  const [columnVisibilityModel, setColumnVisibilityModel] = useState(columnsModel)

  const history = historyPath(router.asPath)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    onPageChange(newPage)
  }

  const handleClickRow = (item: GridCellParams) => {
    const row = item.row as Assignment
    if (item.field === 'actions') return null
    if (row.status.name === 'unsubmitted') {
      onWarning(intl.formatMessage(messages.resultsTableData.unsubmitted))
      return null
    }
    return void router.push(`${history}/detail-assignment/${row.id}/${row.studentName}`)
  }

  const columns: GridColumns = [
    {
      field: 'icon',
      headerName: 'Menu',
      headerClassName: 'hide-header-name actions__menu',
      maxWidth: 40,
      headerAlign: 'center',
      disableColumnMenu: false,
      sortable: false,
      hideable: false,
      filterable: false,
    },
    {
      field: 'subscription',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.subscription),
      headerAlign: 'center',
      width: 110,
      disableColumnMenu: true,
      sortable: false,
      filterable: false,
      align: 'center',
      renderCell: (item: GridRenderCellParams) => <Cell item={item} type="subscription" />,
    },
    {
      field: 'applicationName',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.practice),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      cellClassName: 'table__cell',
    },
    {
      field: 'studentName',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.student),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'deliveryDate',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.deliveryDate),
      maxWidth: 148,
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      renderCell: (item: GridRenderCellParams) => <Cell item={item} type="deliveryDate" />,
    },
    {
      field: 'finalAverage',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.results),
      headerAlign: 'center',
      maxWidth: 108,
      flex: 1,
      align: 'center',
      disableColumnMenu: true,
      headerClassName: 'table__header',
      renderCell: (item: GridRenderCellParams) => <Cell item={item} type="finalAverage" />,
    },
    {
      field: 'status',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.status),
      minWidth: 150,

      headerAlign: 'center',
      disableColumnMenu: true,
      headerClassName: 'table__header',
      renderCell: (item: GridRenderCellParams) => {
        const row = item.row as Assignment
        const practiceStatus = row.status
        return <Chip title={practiceStatus.displayName} status={practiceStatus.name} fullWidth />
      },
    },
    {
      field: 'actions',
      headerName: intl.formatMessage(messages.resultsTableData.headerNames.actions),
      headerClassName: 'hide-header-name actions__menu',
      maxWidth: 60,
      headerAlign: 'center',
      disableColumnMenu: true,
      sortable: false,
      hideable: false,
      filterable: false,
      renderCell: (item: GridRenderCellParams) => (
        <ActionsMenu
          selectedRow={item.row as Assignment}
          handleAssignments={handleAssignments}
          fetchAssignments={() => fetchAssignments(number)}
        />
      ),
    },
  ]

  return (
    <>
      <Box
        sx={{
          height: isLoading || rows.length > 0 ? '40rem' : '3.125rem',
          paddingBottom: isLoading || rows.length > 0 ? '3rem' : '0',
          width: '100%',
        }}>
        <DataGrid
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
          loading={isLoading}
          onCellClick={(item) => handleClickRow(item)}
          className="tableDataDesktop__container"
          rows={rows}
          columns={columns}
          pageSize={10}
          hideFooter
          disableSelectionOnClick
          localeText={gridLanguage[language].components.MuiDataGrid.defaultProps.localeText}
        />
        {!!rows.length && !isLoading && (
          <TablePagination
            className="tableDataDesktop__pagination"
            component="div"
            count={totalElements}
            page={number ?? ACTIVE_PAGE}
            onPageChange={handleChangePage}
            rowsPerPage={PAGE_SIZE}
            rowsPerPageOptions={[-1]}
            labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
          />
        )}
      </Box>
      {!rows.length && !isLoading && (
        <Dialog message={intl.formatMessage(messages.resultsTableData.noRows)} />
      )}
    </>
  )
}
