import React, { useState } from 'react'

import { PersonAddAlt1 } from '@mui/icons-material'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import { theme } from 'components/atoms/ThemeProvider'
import { useNotification } from 'hooks/notification'
import { useMediaQuery } from 'hooks/use-media-query'

import CommonInvitation from './components/CommonInvitation'
import InvitationMessage from './components/InvitationMessage'
import SentInviteModal from './components/SentInviteModal'
import messages from './invite.messages'
import { InviteComponentProps } from './invite.model'
import { InvitesStyles } from './invite.styles'

const { mediaQueries } = theme
const InviteComponent = ({
  profile,
  organizationName,
  listLanguage,
  listGroup,
  dataInvite,
  isChildrenInvitation,
  parentName,
  reference,
  isSending,
  openModal,
}: InviteComponentProps) => {
  const intl = useIntl()
  const { getValues } = useFormContext()
  const { onWarning } = useNotification()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const [emailList, setEmailList] = useState<string[]>([])

  const headerTitle = isChildrenInvitation
    ? intl.formatMessage(messages.childrenInvite.title)
    : `${intl.formatMessage(messages.invite.title)} ${profile}`

  const handleEmailList = (emails: string[]) => setEmailList(emails)

  const onSubmit = () => {
    if (!emailList.length) {
      onWarning(intl.formatMessage(messages.message.post.warning))
      return
    }
    dataInvite({
      languageCode: getValues('languageCode'),
      classroomIds: getValues('classroomIds'),
      message: getValues('message'),
      subscription: getValues('subscription'),
      emailList,
    })
  }

  return (
    <>
      <div className="invite__container">
        <BreadCrumbs />
        <HeaderTitle title={headerTitle} />

        <div className="invite">
          <CommonInvitation
            profile={profile}
            organizationName={organizationName}
            handleEmailList={handleEmailList}
            emailsList={emailList}
            isChildrenInvitation={isChildrenInvitation}
            parentName={parentName}
            reference={reference}
          />
          <InvitationMessage
            listLanguage={listLanguage}
            listGroup={listGroup}
            isChildrenInvitation={isChildrenInvitation}
            reference={reference}
          />
        </div>

        <Button
          icon={<PersonAddAlt1 />}
          onClick={() => onSubmit()}
          type="button"
          loading={isSending}
          disabled={isSending}
          size={isTablet ? 'large' : 'medium'}
          iconPosition="left"
          className="buttonFooter">
          {intl.formatMessage(messages.invite.button)}
        </Button>
      </div>

      {openModal && (
        <SentInviteModal isOpen={openModal} isChildrenInvitation={isChildrenInvitation} />
      )}

      <style jsx>{InvitesStyles}</style>
    </>
  )
}

export default InviteComponent
