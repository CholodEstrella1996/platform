/* eslint-disable no-param-reassign */
import { useState } from 'react'
import 'react-multi-email/style.css'

import { Divider } from '@mui/material'
import { useIntl } from 'react-intl'
import { ReactMultiEmail } from 'react-multi-email'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ChangeSubscription from 'components/molecules/ChangeSubscription'
import SubscriptionExpiredModal from 'components/molecules/SubscriptionExpiredModal'
import { messages as messagesSuscriptions } from 'components/molecules/SubscriptionExpiredModal/subscriptionExpiredModal.messages'
import { EMAIL_REGEX } from 'constants/regex'
import { useNotification } from 'hooks/notification'

import messages from '../../invite.messages'
import { CommonInvitationProps } from '../../invite.model'
import { InvitesStyles } from '../../invite.styles'

const noValidEmails: string[] = []
const { colors } = theme

const removeDuplicates = (list: string[]) => Array.from(new Set(list))
const showMails = (email: string, index: number, removeEmail: (index: number) => void) => (
  <div data-tag key={index} className="tag">
    {email}
    <span data-tag-handle aria-hidden="true" onClick={() => removeEmail(index)}>
      ×
    </span>
  </div>
)

const CommonInvitation = ({
  profile,
  organizationName,
  handleEmailList,
  emailsList,
  isChildrenInvitation,
  parentName,
  reference,
}: CommonInvitationProps) => {
  const intl = useIntl()
  const [emailsCount, setEmailsCount] = useState(0)
  const [invalidEmails, setInvalidEmails] = useState<string[] | []>([])
  const [availableInvites, setAvailableInvites] = useState(0)
  const [openModalSuscription, setOpenModalSuscription] = useState(false)

  const { onWarning } = useNotification()

  const handleAvailableInvites = (invites: number) => {
    reference?.current?.clearValue()
    setAvailableInvites(invites)
    if (!invites) setOpenModalSuscription(true)
    if (invites < emailsList.length) {
      handleEmailList([...emailsList.slice(0, invites)])
      setEmailsCount(invites)
    }
  }
  const onChangeEmail = (listData: string[]) => {
    const listLenght = listData.length
    if (listLenght > 0) listData[listLenght - 1] = listData[listLenght - 1].toLocaleLowerCase()
    const newListData = removeDuplicates(listData)
    setInvalidEmails(removeDuplicates(noValidEmails))
    if (newListData.length > availableInvites) {
      onWarning(intl.formatMessage(messages.emails.maxEmail, { availableInvites }))
      newListData.length = availableInvites
    }

    setEmailsCount(newListData.length)
    handleEmailList(newListData)
  }

  const handleValidation = (newEmail: string) => {
    if (invalidEmails.length) {
      setInvalidEmails([])
    }
    const email = newEmail.toLocaleLowerCase()

    const isDuplicate = emailsList.find((x) => x === email)
    if (isDuplicate) onWarning(intl.formatMessage(messages.myInstitution.data.duplicateEmail))

    if (email === 'undefined') return false
    const isValid = EMAIL_REGEX.test(email)
    if (!isValid && noValidEmails.indexOf(email) === -1) noValidEmails.push(email)
    return isValid
  }

  return (
    <>
      <div className="invite__card">
        <div className="invite__card__body body__gap">
          {isChildrenInvitation ? (
            <>
              <Typography variant="s1" color={colors.neutrals[500]} className="common__body__title">
                {intl.formatMessage(messages.childrenInvite.labelSons)} {parentName}
              </Typography>
              <Typography variant="p1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.subscription.description)}
              </Typography>
              <ChangeSubscription handleAvailableInvites={handleAvailableInvites} quantity />
              <Divider />
              <Typography
                variant="p1"
                color={colors.neutrals[400]}
                className="common__body__subtitle">
                {intl.formatMessage(messages.childrenInvite.descriptionSons)}
              </Typography>
              <Typography variant="s1" color={colors.neutrals[500]} className="common__body__title">
                {intl.formatMessage(messages.childrenInvite.notice)}
              </Typography>
              <Typography
                variant="p1"
                color={colors.neutrals[400]}
                className="common__body__subtitle">
                {intl.formatMessage(messages.childrenInvite.noticeDescription)}
              </Typography>
            </>
          ) : (
            <>
              <Typography variant="s1" color={colors.neutrals[500]}>
                {intl.formatMessage(messages.invite.title)} {profile}
                {intl.formatMessage(messages.invite.title2)} - {organizationName}
              </Typography>

              <Typography variant="p1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.subscription.description)}
              </Typography>
              <ChangeSubscription handleAvailableInvites={handleAvailableInvites} quantity />
              <Divider />
              <Typography variant="p1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.invite.description)}
              </Typography>
            </>
          )}
          {openModalSuscription && (
            <SubscriptionExpiredModal
              title={intl.formatMessage(messagesSuscriptions.noSubscriptions.title)}
              description={intl.formatMessage(messagesSuscriptions.noSubscriptions.description)}
            />
          )}

          <Typography variant="label" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.emails.label)}
          </Typography>
          <ReactMultiEmail
            placeholder={intl.formatMessage(messages.emails.placeholder)}
            emails={emailsList}
            validateEmail={(newEmail) => handleValidation(newEmail)}
            onChange={(listData: string[]) => onChangeEmail(listData)}
            getLabel={(email: string, index: number, removeEmail: (index: number) => void) =>
              showMails(email, index, removeEmail)
            }
          />
          <span className="mailsCounter">
            <Typography variant="c1" color={colors.neutrals[300]}>
              {emailsCount} / {availableInvites}
            </Typography>
          </span>
        </div>
      </div>

      <style jsx>{InvitesStyles}</style>
    </>
  )
}
export default CommonInvitation
