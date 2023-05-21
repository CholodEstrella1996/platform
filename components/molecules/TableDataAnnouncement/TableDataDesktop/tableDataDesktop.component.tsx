import React, { useState } from 'react'

import { Box, TablePagination } from '@mui/material'
import { DataGrid, enUS, esES, trTR, ptBR, GridColumns, GridCellParams } from '@mui/x-data-grid'
import Router from 'next/router'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import NoticeDetail from 'components/modules/Announcement/components/NoticeDetail'
import FormModal from 'components/molecules/FormModal'
import { useAppContext } from 'context/appContext'
import { translatePagination } from 'utils/helpers/translatePagination'

import messages from '../tableDataAnnouncement.messages'
import { DataRow } from '../tableDataAnnouncement.model'

type Props = {
  rows: DataRow[]
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  isLoading: boolean
}

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}

const TableDataDesktopComponent = ({
  rows,
  totalElements,
  pageSize,
  activePage,
  pageChange = () => {},
  isLoading,
}: Props) => {
  const [selected, setSelected] = useState<DataRow>()
  const [openDetail, setOpenDetail] = useState(false)
  const intl = useIntl()
  const { language } = useAppContext()
  const idGroup = !!Router.query['id-group']

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const handleOnClick = (item: GridCellParams) => {
    setSelected(item.row as DataRow)
    setOpenDetail(true)
  }

  const columns: GridColumns = [
    {
      field: 'shippingDate',
      headerName: intl.formatMessage(messages.announcement.tableData.headerName.shippingDate),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      maxWidth: 140,
    },
    {
      field: 'affair',
      headerName: intl.formatMessage(messages.announcement.tableData.headerName.affair),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      maxWidth: 180,
    },
    {
      field: 'message',
      headerName: intl.formatMessage(messages.announcement.tableData.headerName.message),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'recipientRoles',
      headerName: intl.formatMessage(messages.announcement.tableData.headerName.addressee),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
  ]

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
          className="tableDataDesktop__container"
          columnVisibilityModel={{
            recipientRoles: !idGroup,
          }}
          onCellClick={(item) => handleOnClick(item)}
          loading={isLoading}
          rows={rows}
          columns={columns}
          pageSize={10}
          hideFooter
          disableSelectionOnClick
          localeText={gridLanguage[language].components.MuiDataGrid.defaultProps.localeText}
        />
        {!!rows.length && !isLoading && (
          <TablePagination
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
      {!rows.length && !isLoading && (
        <Dialog message={intl.formatMessage(messages.announcement.tableData.notRows)} />
      )}

      {openDetail && (
        <FormModal
          steps={[
            {
              id: 1,
              element: (
                <NoticeDetail idAnnouncement={Number(selected?.id)} openModal={setOpenDetail} />
              ),
            },
          ]}
          title={intl.formatMessage(messages.announcement.noticeDetailModal.title)}
          isOpen={openDetail}
          onClose={() => setOpenDetail(!openDetail)}
          onSubmit={async () => void {}}
          readOnly
        />
      )}
    </>
  )
}

export default TableDataDesktopComponent
