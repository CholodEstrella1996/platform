import React from 'react'

import { Divider } from '@mui/material'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { PROFILES } from 'constants/profiles'
import { Announcement } from 'services/models/announcement.model'

import { NoticeDetailLocalStyles } from './noticeDetail.styles'
import messages from '../../announcement.messages'

type Prop = {
  noticeDetail: Announcement
  isFromGroup: boolean
}

export const NoticeDetail = ({ noticeDetail, isFromGroup }: Prop) => {
  const { subject, message, recipientRoles, sendDate } = noticeDetail

  const { colors } = theme
  const intl = useIntl()

  const getRoles = () => {
    const roleArray = recipientRoles.map((elem) =>
      intl.formatMessage(PROFILES[elem.name.split('-')[1] as keyof typeof PROFILES]),
    )
    const addressees = roleArray.join(', ')
    return addressees.charAt(0).toUpperCase() + addressees.slice(1)
  }

  return (
    <>
      <section className="notice__details">
        <div className="notice__subject">
          <Typography variant="label" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.announcement.labels.date)}
          </Typography>
          <Typography variant="s2" color={colors.neutrals[700]}>
            {intl.formatDate(sendDate)}
          </Typography>
        </div>
        <Divider />
        <div className="notice__subject">
          <Typography variant="label" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.announcement.labels.subject)}
          </Typography>
          <Typography variant="s2" color={colors.neutrals[700]}>
            {subject}
          </Typography>
        </div>
        <Divider />
        {!isFromGroup && (
          <>
            <div className="notice__addressee">
              <Typography variant="label" color={colors.neutrals[300]}>
                {intl.formatMessage(messages.announcement.labels.receiver)}
              </Typography>
              <Typography variant="s2" color={colors.neutrals[700]}>
                {getRoles()}
              </Typography>
            </div>
            <Divider />
          </>
        )}

        <div className="notice__message">
          <Typography variant="label" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.announcement.labels.message)}
          </Typography>
          <Typography variant="s2" color={colors.neutrals[700]} className="message__detail">
            {message}
          </Typography>
        </div>
      </section>

      <style jsx>{NoticeDetailLocalStyles}</style>
    </>
  )
}
