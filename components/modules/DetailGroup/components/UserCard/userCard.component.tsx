import { useState } from 'react'

import { DeleteOutline } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { Avatar } from 'components/atoms/Avatar'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'

import messages from '../../detailGroup.messages'
import { DetailGroupStyles } from '../../detailGroup.styles'

type Props = {
  id: number
  name: string
  email: string
  avatarUrl: string
  invited: boolean
  onDeleteUser: (id: number) => void
}

const { colors } = theme
const { detail } = GROUP_PERMISSIONS

const UserCardComponent = ({ id, name, email, avatarUrl, invited, onDeleteUser }: Props) => {
  const [openAlert, setOpenAlert] = useState(false)
  const { permissions } = useAppContext()
  const intl = useIntl()

  const [deleteAuth] = [permissions[detail.delete]]

  const deleteUser = (idUser: number) => {
    onDeleteUser(idUser)
    setOpenAlert(false)
  }

  return (
    <>
      <div className="user__card">
        <div className="user__avatar">
          <Avatar
            size="medium"
            name={
              name ||
              intl.formatMessage(
                invited ? messages.userData.guestUser : messages.userData.registeredUser,
              )
            }
            image={avatarUrl}
          />
        </div>
        <div className="user__info">
          <div className="user__name">
            <Typography variant="s2" color={colors.neutrals[500]}>
              {name ||
                intl.formatMessage(
                  invited ? messages.userData.guestUser : messages.userData.registeredUser,
                )}
            </Typography>
          </div>
          <div className="user__email">
            <Typography variant="s2" weight="regular" color={colors.neutrals[300]}>
              {email || intl.formatMessage(messages.userData.emailNotAvailable)}
            </Typography>
          </div>
        </div>
        <div className="user__action">
          {deleteAuth && (
            <MoreMenu>
              <IconButton onClick={() => void setOpenAlert(true)} className="action__buttons">
                <DeleteOutline fontSize="medium" color="error" />
                <Typography variant="s1" color={colors.semantic.danger}>
                  {intl.formatMessage(messages.button.user.delete)}
                </Typography>
              </IconButton>
            </MoreMenu>
          )}
        </div>
      </div>
      {openAlert && (
        <AlertModal
          open={openAlert}
          titleText={intl.formatMessage(messages.alert.user.title)}
          subtitleText={intl.formatMessage(messages.alert.user.subtitle, {
            e: email || intl.formatMessage(messages.userData.emailNotAvailable),
          })}
          cancelActionText={intl.formatMessage(messages.alert.user.cancelText)}
          onCancel={() => setOpenAlert(false)}
          continueActionText={intl.formatMessage(messages.alert.user.continueText)}
          onContinue={() => {
            void deleteUser(id)
          }}
        />
      )}
      <style jsx>{DetailGroupStyles}</style>
    </>
  )
}
export default UserCardComponent
