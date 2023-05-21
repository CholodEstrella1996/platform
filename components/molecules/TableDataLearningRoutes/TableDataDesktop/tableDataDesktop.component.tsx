/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'

import { Box, TablePagination } from '@mui/material'
import {
  DataGrid,
  enUS,
  esES,
  trTR,
  ptBR,
  GridColumns,
  GridCellParams,
  GridRenderCellParams,
  GridColumnVisibilityModel,
} from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { LearningData } from 'components/modules/LearningRoutes/learningRoutes.model'
import { useAppContext } from 'context/appContext'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import { MoreMenu } from '../MoreMenu'
import messages from '../tableDataLearningRoutes.messages'
import { TableDataLearningRoutesProps } from '../tableDataLearningRoutes.model'

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}

const TableDataDesktopComponent = ({
  rows,
  deleteRoute,
  totalElements,
  pageSize,
  activePage,
  pageChange = () => {},
  isLoading,
  idGroup,
}: TableDataLearningRoutesProps) => {
  const [selectedRow, setSelectedRow] = useState<LearningData>()
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)
  const { language } = useAppContext()
  const idFromGroups = Boolean(router.query['id-group'])

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>({
    classroom: !idGroup,
  })

  const handleClickRow = (item: GridCellParams) => {
    const row = item.row as LearningData
    setSelectedRow(row)
    if (!item.value) return
    void router.push(`${history}/detail-learning-units/${row.id}/${row.name}`)
  }

  const columns = [
    {
      field: 'icon',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.actions),
      headerClassName: 'hide-header-name actions__menu',
      maxWidth: 60,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: false,
      sortable: false,
      hideable: false,
      filterable: false,
    },
    {
      field: 'name',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.name),
      flex: 1,
      headerClassName: 'table__header',
      disableColumnMenu: true,
    },
    {
      field: 'updatedAt',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.updatedAt),
      width: 180,
      headerClassName: 'table__header',
      disableColumnMenu: true,
    },

    !idFromGroups && {
      field: 'subscription',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.subscription),
      width: 180,
      headerClassName: 'table__header',
      headerAlign: 'center',
      disableColumnMenu: true,
      sortable: false,
      align: 'center',
      renderCell: (item: GridRenderCellParams) => {
        const { subscription } = item.row
        return <SubscriptionType type={subscription} />
      },
    },
    {
      field: 'classroom',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.group),
      flex: 1,
      headerClassName: 'table__header',
      disableColumnMenu: true,
    },
    {
      field: 'option',
      headerName: intl.formatMessage(messages.learningRoute.tableData.headerName.actions),
      headerClassName: 'hide-header-name actions__menu',
      maxWidth: 60,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      sortable: false,
      hideable: false,
      filterable: false,
      renderCell: () => <MoreMenu selectedRow={selectedRow} onDeleteRoute={deleteRoute} />,
    },
  ].filter(Boolean)

  return (
    <>
      <Box
        className="tableDataDesktop-table"
        sx={{
          height: `${isLoading || rows.length > 0 ? '40rem' : '3.125rem'}`,
          paddingBottom: isLoading || rows.length > 0 ? '3rem' : '0',
          width: '100%',
        }}>
        <DataGrid
          onCellClick={(item) => handleClickRow(item)}
          className={`tableDataDesktop__container `}
          columnVisibilityModel={columnVisibilityModel}
          onColumnVisibilityModelChange={(newModel) => setColumnVisibilityModel(newModel)}
          rows={rows}
          loading={isLoading}
          columns={columns as GridColumns}
          pageSize={10}
          hideFooter
          disableSelectionOnClick
          localeText={gridLanguage[language].components.MuiDataGrid.defaultProps.localeText}
        />
        {!!rows.length && !isLoading && (
          <TablePagination
            className="tableDataDesktop__container-pagination"
            component="div"
            count={totalElements}
            page={activePage}
            onPageChange={handleChangePage}
            rowsPerPage={pageSize}
            rowsPerPageOptions={[-1]}
            labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
          />
        )}
      </Box>
      {!rows.length && (
        <Dialog message={intl.formatMessage(messages.learningRoute.tableData.notRows)} />
      )}
    </>
  )
}

export default TableDataDesktopComponent
