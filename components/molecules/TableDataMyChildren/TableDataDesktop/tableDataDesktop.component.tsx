/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'

import { MoreVertical, PersonDeleteOutline } from '@easy-eva-icons/react'
import { AccountCircleOutlined, EditOutlined } from '@mui/icons-material'
import { Box, IconButton, Menu, TablePagination } from '@mui/material'
import {
  DataGrid,
  enUS,
  esES,
  GridCellParams,
  GridColumns,
  GridRenderCellParams,
  ptBR,
  trTR,
} from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { EDIT_CHILD_PAGE } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import messages from '../tableDataMyChildren.messages'
import { DataRow, TableDataMyChildrenProps } from '../tableDataMyChildren.model'

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}

const { colors } = theme

const { child } = MY_CHILDREN_PERMISSIONS

const TableDataDesktopComponent = ({
  rows,
  deleteUser,
  totalElements,
  pageSize,
  activePage,
  pageChange = () => {},
  profile,
  isLoading,
}: TableDataMyChildrenProps) => {
  const [selected, setSelected] = useState<DataRow>()
  const [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null)
  const intl = useIntl()
  const [open, setOpen] = useState(false)
  const { permissions, language } = useAppContext()
  const router = useRouter()
  const { onWarning } = useNotification()

  const history = historyPath(router.asPath)

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const [updateAuth, deleteAuth] = [permissions[child.update], permissions[child.delete]]

  const handleOnClickRow = (item: GridCellParams) => {
    const row = item.row as DataRow
    setSelected(row)
    if (item.field === 'option') return null
    if (row.status.name !== 'invited')
      return void router.push(`${history}/detail-child/${row.id}/${row.name}`)

    onWarning(intl.formatMessage(messages.myChildren.tableData.snackbar.warning))
    return null
  }

  const menu = (item: GridRenderCellParams) =>
    (updateAuth || deleteAuth) && (
      <>
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MoreVertical color={colors.primary[500]} />
        </IconButton>

        {item.row.id === selected?.id && (
          <>
            <Menu
              anchorEl={anchorElement}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={!!anchorElement}
              onClose={handleClose}
              elevation={0}
              className="menu__buttons">
              {profile.length > 1 && updateAuth && item.row.status.name === 'active' && (
                <IconButton
                  onClick={() => {
                    setAnchorEl(null)
                    void router.push(
                      `${EDIT_CHILD_PAGE}/${Number(item.row.id)}/${String(item.row.name)}`,
                    )
                  }}
                  className="action__buttons">
                  <EditOutlined fontSize="small" />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.myChildren.tableData.menu.edit)}
                  </Typography>
                </IconButton>
              )}
              {deleteAuth && (
                <IconButton
                  onClick={() => {
                    setOpen(true)
                    setAnchorEl(null)
                  }}
                  className="action__buttons">
                  <PersonDeleteOutline fontSize={20} color={colors.semantic.danger} />
                  <Typography variant="s1" color={colors.semantic.danger}>
                    {intl.formatMessage(messages.myChildren.tableData.menu.delete)}
                  </Typography>
                </IconButton>
              )}
            </Menu>
            <AlertModal
              titleText={intl.formatMessage(messages.myChildren.tableData.alert.titleText)}
              subtitleText={intl.formatMessage(messages.myChildren.tableData.alert.subtitleText, {
                m: selected?.email,
              })}
              cancelActionText={intl.formatMessage(
                messages.myChildren.tableData.alert.cancelActionText,
              )}
              onCancel={() => {
                setOpen(false)
                setAnchorEl(null)
              }}
              continueActionText={intl.formatMessage(
                messages.myChildren.tableData.alert.continueActionText,
              )}
              onContinue={() => {
                if (selected) deleteUser(selected?.id)
                setOpen(false)
                setSelected(undefined)
              }}
              open={open}
            />
          </>
        )}
      </>
    )

  const columns: GridColumns = [
    {
      field: 'icon',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.icon),
      headerClassName: 'hide-header-name actions__menu',
      width: 80,
      headerAlign: 'center',
      disableColumnMenu: false,
      sortable: false,
      hideable: false,
      filterable: false,
      align: 'center',
      renderCell: (item: GridRenderCellParams) =>
        item.row?.avatarUrl ? (
          <Avatar image={item.row?.avatarUrl ?? undefined} size="small" />
        ) : (
          <AccountCircleOutlined className="tableDataDesktop__icons--user" />
        ),
    },
    {
      field: 'name',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.name),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'email',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.mail),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'subscription',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.subscription),
      width: 140,
      disableColumnMenu: true,
      align: 'center',
      headerAlign: 'center',
      sortable: false,
      renderCell: (item: GridRenderCellParams) => {
        const { subscription } = item.row
        return <SubscriptionType type={subscription ? subscription.code : '-'} />
      },
    },
    {
      field: 'state',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.state),
      width: 130,
      disableColumnMenu: true,
      headerClassName: 'table__header',
      headerAlign: 'center',
      align: 'center',
      sortable: false,
      renderCell: (item: GridRenderCellParams) => (
        <Chip title={item.row.status.displayName} status={item.row.status.name} fullWidth />
      ),
    },
    {
      field: 'option',
      headerName: intl.formatMessage(messages.myChildren.tableData.headerName.options),
      headerClassName: 'hide-header-name actions__menu',
      maxWidth: 60,
      headerAlign: 'center',
      align: 'center',
      disableColumnMenu: true,
      sortable: false,
      hideable: false,
      filterable: false,
      renderCell: (item: GridRenderCellParams) => menu(item),
    },
  ]

  return (
    <>
      <Box
        sx={{
          height: `${isLoading || rows.length > 0 ? '40rem' : '3.125rem'}`,
          paddingBottom: isLoading || rows.length > 0 ? '3rem' : '0',
          width: '100%',
        }}>
        <DataGrid
          loading={isLoading}
          onCellClick={(item) => handleOnClickRow(item)}
          className={`tableDataDesktop__container `}
          rows={rows}
          columns={columns}
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
      {!rows.length && !isLoading && (
        <Dialog message={intl.formatMessage(messages.myChildren.tableData.notRows)} />
      )}
    </>
  )
}

export default TableDataDesktopComponent
