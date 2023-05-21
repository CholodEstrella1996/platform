import { useState } from 'react'

import { PersonDeleteOutline, MoreVertical } from '@easy-eva-icons/react'
import { AccountCircleOutlined, GroupAddOutlined } from '@mui/icons-material'
import { Divider, IconButton, Menu, TablePagination } from '@mui/material'
import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { Avatar } from 'components/atoms/Avatar'
import Chip from 'components/atoms/Chip'
import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import AddUserModal from 'components/modules/MyInstitution/components/AddUserModal'
import FormModal from 'components/molecules/FormModal'
import { GROUP_PERMISSIONS, MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { DETAIL_MEMBER_PAGE } from 'constants/platformPages'
import { PROFILES } from 'constants/profiles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { translatePagination } from 'utils/helpers/translatePagination'

import TableDataMobileStyle from './tableDataMobile.styles'
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

const { colors } = theme
const { addToGroup } = GROUP_PERMISSIONS
const { member } = MY_INSTITUTION_PERMISSIONS

const TableDataMobileComponent = ({
  rows,
  deleteUser,
  onSubmit,
  activePage,
  pageChange = () => {},
  totalElements,
  pageSize,
  profile,
  isLoading,
}: Props) => {
  const intl = useIntl()
  const [open, setOpen] = useState(false)
  const [openAddModal, setOpenAddModal] = useState(false)
  const [selected, setSelected] = useState<DataRow>()
  const [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClose = () => setAnchorEl(null)
  const { onWarning } = useNotification()
  const router = useRouter()
  const { permissions } = useAppContext()
  const { reset } = useFormContext()

  const [addMemberAuth, deleteMemberAuth] = [permissions[addToGroup], permissions[member.delete]]

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    if (!event) return
    pageChange(newPage)
  }

  const handleOnClickRow = (row: DataRow) => {
    if (row.status.name !== 'invited')
      return void router.push(`${DETAIL_MEMBER_PAGE}/${Number(row.id)}/${String(row.name)}`)
    onWarning(intl.formatMessage(messages.myInstitution.tableData.snackbar.warning))
    return null
  }

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
              <div className="line-clamp">
                <Typography variant="s2" className="tableDataMobile--mail ">
                  {item.email}
                </Typography>
              </div>
              <div className="tableDataMobile__status__subs">
                <SubscriptionType type={item.subscription ? item.subscription.code : '-'} />
                <Chip title={item.status.displayName} status={item.status.name} fullWidth />
              </div>
            </span>
          </span>
        </button>
        <div className="tableDataMobile__icons">
          {(addMemberAuth || deleteMemberAuth) && (
            <IconButton
              onClick={(event) => {
                setSelected(item)
                setAnchorEl(event.currentTarget)
              }}>
              <MoreVertical color={colors.primary[500]} />
            </IconButton>
          )}

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
                {addMemberAuth && Object.keys(PROFILES)[2] !== profile && (
                  <IconButton
                    onClick={() => {
                      setOpenAddModal(true)
                      setAnchorEl(null)
                    }}
                    className="action__buttons">
                    <GroupAddOutlined fontSize="small" />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.myInstitution.tableData.menu.addUser)}
                    </Typography>
                  </IconButton>
                )}
                {deleteMemberAuth && (
                  <IconButton
                    onClick={() => {
                      setOpen(true)
                      setAnchorEl(null)
                    }}
                    className="action__buttons">
                    <PersonDeleteOutline fontSize={20} color={colors.semantic.danger} />
                    <Typography variant="s1" color={colors.semantic.danger}>
                      {intl.formatMessage(messages.myInstitution.tableData.menu.delete)}
                    </Typography>
                  </IconButton>
                )}
              </Menu>

              <AlertModal
                titleText={intl.formatMessage(messages.myInstitution.tableData.alert.titleText)}
                subtitleText={intl.formatMessage(
                  messages.myInstitution.tableData.alert.subtitleText,
                  { m: item?.email },
                )}
                cancelActionText={intl.formatMessage(
                  messages.myInstitution.tableData.alert.cancelActionText,
                )}
                onCancel={() => {
                  setOpen(false)
                  setAnchorEl(null)
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
                      element: <AddUserModal id={item.id} name={item.name} profile={profile} />,
                    },
                  ]}
                  title={intl.formatMessage(messages.myInstitution.tableData.modal.title)}
                  isOpen={openAddModal}
                  onClose={() => {
                    setOpenAddModal(false)
                    reset()
                  }}
                  onSubmit={() => onSubmit()}
                  submitText={intl.formatMessage(
                    messages.myInstitution.tableData.modal.submitButton,
                  )}
                />
              )}
            </>
          )}
        </div>
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
          <Dialog message={intl.formatMessage(messages.myInstitution.tableData.notRows)} />
        ))}
      <style jsx global>
        {TableDataMobileStyle}
      </style>
    </>
  )
}

export default TableDataMobileComponent
