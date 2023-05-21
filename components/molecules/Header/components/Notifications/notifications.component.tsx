import React, { useState } from 'react'

import { Check, Close, NotificationsOutlined } from '@mui/icons-material'
import { Badge, ClickAwayListener, IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { Notifications } from 'services/models/announcement.model'

import { NotificactionLocalStyles } from './notifications.styles'
import messages from '../../header.messages'

type NotificationProp = {
  notices: Notifications[]
  message?: string
  markAsRead: (id: number) => void
}

const { colors } = theme

export const NotificationsComponent = ({ notices, message, markAsRead }: NotificationProp) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [inboxCount, setInboxCount] = useState(notices.length)
  const handleDropdown = () => {
    setOpenMenu((prevState) => !prevState)
    setInboxCount(0)
  }
  const intl = useIntl()

  const renderNotice = (item: Notifications) => (
    <div key={item.id} className="notice__card">
      <div className="notice__card__header">
        <Typography variant="s2" color={colors.neutrals[400]}>
          {item.subject}
        </Typography>
        <IconButton
          onClick={() => {
            markAsRead(item.id)
          }}
          className="check__button">
          <Check fontSize="small" />
        </IconButton>
      </div>
      <Typography variant="c1" color={colors.neutrals[300]}>
        {item.message}
      </Typography>
    </div>
  )

  return (
    <>
      <IconButton onClick={handleDropdown} className="notification__button">
        <Badge badgeContent={inboxCount} color="error">
          <NotificationsOutlined sx={{ color: colors.neutrals[300] }} />
        </Badge>
      </IconButton>
      {openMenu && (
        <ClickAwayListener onClickAway={() => setOpenMenu(false)}>
          <div className="notification">
            <div className="notification__container">
              <div className="notification__header">
                <Typography variant="s1" color={colors.neutrals[600]}>
                  {intl.formatMessage(messages.notifications.title)}
                </Typography>
                <IconButton onClick={() => setOpenMenu(false)} className="close__button">
                  <Close fontSize="medium" />
                </IconButton>
              </div>
              <div className="notification__cards">
                {notices.map(renderNotice)}
                {!notices.length && (
                  <Dialog
                    showIcon={false}
                    message={message ?? intl.formatMessage(messages.notifications.noResults)}
                  />
                )}
              </div>
            </div>
          </div>
        </ClickAwayListener>
      )}

      <style jsx>{NotificactionLocalStyles}</style>
    </>
  )
}
