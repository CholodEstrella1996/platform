/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState } from 'react'

import { MoreVertical, PersonDeleteOutline } from '@easy-eva-icons/react'
import { AccountCircleOutlined, GroupAddOutlined } from '@mui/icons-material'
import { Box, IconButton, Menu, TablePagination } from '@mui/material'
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
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import AddUserModal from 'components/modules/MyInstitution/components/AddUserModal'
import FormModal from 'components/molecules/FormModal'
import { GROUP_PERMISSIONS, MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { PROFILES } from 'constants/profiles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import messages from '../tableDataMyInstitution.messages'
import { DataRow } from '../tableDataMyInstitution.model'

type Props = {
  rows: DataRow[]
  deleteUser: (id: number) => void
  onSubmit: () => Promise<void>
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  profile: string
  isLoading: boolean
}

const gridLanguage = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}
const { colors } = theme
const { addToGroup } = GROUP_PERMISSIONS
const { member } = MY_INSTITUTION_PERMISSIONS

const TableDataDesktopComponent = ({
  rows,
  deleteUser,
  onSubmit,
  totalElements,
  pageSize,
  activePage,
  pageChange = () => {},
  profile,
  isLoading,
}: Props) => {
  const [selected, setSelected] = useState<DataRow>()
  const [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null)
  const [open, setOpen] = useState(false)
  const [openAddModal, setOpenAddModal] = useState(false)
  const intl = useIntl()
  const router = useRouter()
  const currentUrl = historyPath(router.asPath)
  const { language, permissions } = useAppContext()
  const { onWarning } = useNotification()
  const { reset } = useFormContext()

  const [addMemberAuth, deleteMemberAuth] = [permissions[addToGroup], permissions[member.delete]]

  const handleClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
    setAnchorEl(null)
  }
  const handleModalOpen = () => {
    setOpenAddModal(true)
    setAnchorEl(null)
  }
  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const handleOnClickRow = (item: GridCellParams) => {
    setSelected(item.row as DataRow)
    if (item.field === 'option') return null
    if (item.row.status.name !== 'invited')
      return void router.push(
        `${currentUrl}/detail-member/${Number(item.row.id)}/${String(item.row.name)}`,
      )

    onWarning(intl.formatMessage(messages.myInstitution.tableData.snackbar.warning))
    return null
  }

  const menu = (_item: GridRenderCellParams) => (
    <>
      {(addMemberAuth || deleteMemberAuth) && (
        <IconButton onClick={(event) => setAnchorEl(event.currentTarget)}>
          <MoreVertical color={colors.primary[500]} />
        </IconButton>
      )}

      {_item.row.id === selected?.id && (
        <>
          <Menu
            anchorEl={anchorElement}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={!!anchorElement}
            onClose={handleClose}
            elevation={0}
            className="menu__buttons">
            {addMemberAuth && Object.keys(PROFILES)[2] !== profile && (
              <IconButton onClick={handleModalOpen} className="action__buttons">
                <GroupAddOutlined fontSize="small" />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.myInstitution.tableData.menu.addUser)}
                </Typography>
              </IconButton>
            )}
            {deleteMemberAuth && (
              <IconButton onClick={handleOpen} className="action__buttons">
                <PersonDeleteOutline fontSize={20} color={colors.semantic.danger} />
                <Typography variant="s1" color={colors.semantic.danger}>
                  {intl.formatMessage(messages.myInstitution.tableData.menu.delete)}
                </Typography>
              </IconButton>
            )}
          </Menu>
          <AlertModal
            titleText={intl.formatMessage(messages.myInstitution.tableData.alert.titleText)}
            subtitleText={intl.formatMessage(messages.myInstitution.tableData.alert.subtitleText, {
              m: selected?.email,
            })}
            cancelActionText={intl.formatMessage(
              messages.myInstitution.tableData.alert.cancelActionText,
            )}
            onCancel={() => {
              setOpen(false)
            }}
            continueActionText={intl.formatMessage(
              messages.myInstitution.tableData.alert.continueActionText,
            )}
            onContinue={() => {
              if (selected) deleteUser(selected?.id)
              setOpen(false)
              setSelected(undefined)
            }}
            open={open}
          />
          {openAddModal && (
            <FormModal
              steps={[
                {
                  id: 1,
                  element: (
                    <AddUserModal id={_item.row.id} name={_item.row.name} profile={profile} />
                  ),
                },
              ]}
              title={intl.formatMessage(messages.myInstitution.tableData.modal.title)}
              isOpen={openAddModal}
              onClose={() => {
                setOpenAddModal(false)
                reset()
              }}
              onSubmit={() => onSubmit()}
              submitText={intl.formatMessage(messages.myInstitution.tableData.modal.submitButton)}
            />
          )}
        </>
      )}
    </>
  )

  const columns: GridColumns = [
    {
      field: 'icon',
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.icon),
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
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.name),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'email',
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.mail),
      flex: 1,
      disableColumnMenu: true,
      headerClassName: 'table__header',
    },
    {
      field: 'subscription',
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.subscription),
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
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.state),
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
      headerName: intl.formatMessage(messages.myInstitution.tableData.headerName.options),
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
        <Dialog message={intl.formatMessage(messages.myInstitution.tableData.notRows)} />
      )}
    </>
  )
}

export default TableDataDesktopComponent
