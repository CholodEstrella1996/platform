import React, { useState } from 'react'

import {
  CloseOutlined,
  PersonOutlined,
  LogoutOutlined,
  MobileFriendlyOutlined,
  CreditCardOutlined,
} from '@mui/icons-material'
import { ClickAwayListener, IconButton } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { SUBSCRIPTION_PERMISSIONS, MY_DEVICES_PERMISSIONS } from 'constants/permissions'
import { PROFILE_PAGE } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'
import { User } from 'services/models/user.model'

import messages from './user.messages'
import { UserGlobalStyles, UserLocalStyles } from './user.styles'

const { colors } = theme

export type UserComponentProps = {
  user: User
}

const { view } = SUBSCRIPTION_PERMISSIONS
const { viewDevices } = MY_DEVICES_PERMISSIONS

export const UserComponent = ({ user }: UserComponentProps) => {
  const [openMenu, setOpenMenu] = useState(false)
  const router = useRouter()
  const { keycloak } = useKeycloak()
  const { permissions } = useAppContext()
  const intl = useIntl()
  const { firstName, surname, email, avatarUrl } = user
  const image =
    typeof avatarUrl === 'string' && avatarUrl !== '' ? avatarUrl : DEFAULT_ICON_IMG_PROPS.image

  const handleDropdown = () => setOpenMenu((prevState) => !prevState)
  const [subscriptionButtonAuth] = [permissions[view]]
  const [devicesButtonAuth] = [permissions[viewDevices]]
  const navigatePage = (link: string) => {
    handleDropdown()
    void router.push(link)
  }

  return (
    <>
      <IconButton onClick={() => setOpenMenu((prevState) => !prevState)} className="avatar__button">
        <Avatar name={firstName ?? ''} size="small" image={image} />
      </IconButton>
      {openMenu && (
        <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
          <div className="user-detail">
            <div className="user-detail__container">
              <div className="user-info">
                <div className="avatar-and-close">
                  <Avatar name={firstName ?? ''} size="large" image={image} />
                  <IconButton onClick={() => setOpenMenu(false)} className="close__button">
                    <CloseOutlined fontSize="medium" />
                  </IconButton>
                </div>
                <Typography variant="h6" color={colors.neutrals[600]} className="user-name">
                  {firstName} {surname}
                </Typography>
                <Typography variant="c1" color={colors.neutrals[400]}>
                  {email}
                </Typography>
              </div>
              <div className="menu__buttons">
                <IconButton onClick={() => navigatePage(PROFILE_PAGE)} className="action__buttons">
                  <PersonOutlined fontSize="small" />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.profile)}
                  </Typography>
                </IconButton>

                {subscriptionButtonAuth && (
                  <IconButton
                    onClick={() => navigatePage('/subscriptions')}
                    className="action__buttons">
                    <CreditCardOutlined fontSize="small" />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.subscription)}
                    </Typography>
                  </IconButton>
                )}

                {devicesButtonAuth && (
                  <IconButton
                    onClick={() => navigatePage('/my-devices')}
                    className="action__buttons">
                    <MobileFriendlyOutlined fontSize="small" />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.devices)}
                    </Typography>
                  </IconButton>
                )}

                <IconButton
                  onClick={() => {
                    if (keycloak) {
                      window.location.href = keycloak?.createLogoutUrl()
                    }
                  }}
                  className="action__buttons">
                  <LogoutOutlined fontSize="small" />
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.logout)}
                  </Typography>
                </IconButton>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}
      <style jsx>{UserLocalStyles}</style>
      <style jsx global>
        {UserGlobalStyles}
      </style>
    </>
  )
}
