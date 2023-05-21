import { useState } from 'react'

import { PersonDeleteOutline, MoreVertical } from '@easy-eva-icons/react'
import { AccountCircleOutlined, GroupAddOutlined } from '@mui/icons-material'
import { Divider, IconButton, Menu, TablePagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { EDIT_CHILD_PAGE } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { historyPath } from 'utils/helpers/historyPath'
import { translatePagination } from 'utils/helpers/translatePagination'

import { TableDataMobileGlobalStyles } from './tableDataMobile.styles'
import messages from '../tableDataMyChildren.messages'
import { DataRow, TableDataMyChildrenProps } from '../tableDataMyChildren.model'

const { colors } = theme

const { child } = MY_CHILDREN_PERMISSIONS

const TableDataMobileComponent = ({
  rows,
  deleteUser,
  activePage,
  pageChange = () => {},
  totalElements,
  pageSize,
  profile,
  isLoading,
}: TableDataMyChildrenProps) => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<DataRow>()
  const [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null)
  const router = useRouter()
  const { onWarning } = useNotification()
  const handleClose = () => setAnchorEl(null)
  const { permissions } = useAppContext()

  const history = historyPath(router.asPath)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const handleOnClickRow = (row: DataRow) => {
    if (row.status.name !== 'invited')
      return void router.push(`${history}/detail-child/${row.id}/${row.name}`)

    onWarning(intl.formatMessage(messages.myChildren.tableData.snackbar.warning))
    return null
  }

  const [updateAuth, deleteAuth] = [permissions[child.update], permissions[child.delete]]

  const renderCard = (item: DataRow) => (
    <div key={item.id} className="tableDataMobile__container">
      <div className="tableDataMobile__card">
        <button type="button" onClick={() => handleOnClickRow(item)}>
          <span className="tableDataMobile__card">
            {item?.avatarUrl ? (
              <Avatar image={item?.avatarUrl ?? undefined} size="medium" />
            ) : (
              <AccountCircleOutlined className="tableDataMobile__icons-user" />
            )}
            <span className="tableDataMobile__card-data">
              <Typography variant="s1" className="tableDataMobile--name">
                {item.name}
              </Typography>
              <Typography variant="s2" className="tableDataMobile--mail line-clamp">
                {item.email}
              </Typography>
              <div className="tableDataMobile__status__subs">
                <SubscriptionType type={item.subscription ? item.subscription.code : '-'} />
                <Chip title={item.status.displayName} status={item.status.name} fullWidth />
              </div>
            </span>
          </span>
        </button>
        {(updateAuth || deleteAuth) && (
          <div className="tableDataMobile__icons">
            <IconButton
              onClick={(event) => {
                setSelected(item)
                setAnchorEl(event.currentTarget)
              }}>
              <MoreVertical color={colors.primary[500]} />
            </IconButton>

            {item.id === selected?.id && (
              <>
                <Menu
                  anchorEl={anchorElement}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={!!anchorElement}
                  onClose={handleClose}
                  elevation={0}
                  className="menu__buttons">
                  {profile.length > 1 && updateAuth && item.status.name === 'active' && (
                    <IconButton
                      onClick={() => {
                        setAnchorEl(null)
                        void router.push(
                          `${EDIT_CHILD_PAGE}/${Number(item.id)}/${String(item.name)}`,
                        )
                      }}
                      className="action__buttons">
                      <GroupAddOutlined fontSize="small" />
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
                  subtitleText={intl.formatMessage(
                    messages.myChildren.tableData.alert.subtitleText,
                    {
                      m: item?.email,
                    },
                  )}
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
          </div>
        )}
      </div>
      <Divider className="tableDataMobile__divider" light />
    </div>
  )

  return (
    <>
      {isLoading && (
        <div className="tableDataMobile__loading">
          <Spinner />
        </div>
      )}
      {!isLoading &&
        (rows.length > 0 ? (
          <>
            {rows.map(renderCard)}
            <TablePagination
              component="div"
              count={totalElements}
              page={activePage}
              onPageChange={handleChangePage}
              rowsPerPage={pageSize}
              rowsPerPageOptions={[-1]}
              labelDisplayedRows={({ from, to, count }) => translatePagination(from, to, count)}
            />
          </>
        ) : (
          <Dialog message={intl.formatMessage(messages.myChildren.tableData.notRows)} />
        ))}
      <style jsx global>
        {TableDataMobileGlobalStyles}
      </style>
    </>
  )
}

export default TableDataMobileComponent
