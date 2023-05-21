import React from 'react'

import { InfoOutline } from '@easy-eva-icons/react'
import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Announcement/announcement.messages'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { PostAnnouncement } from 'services/models/announcement.model'

import { NewAnnouncementStyles } from './newAnnouncementModal.styles'
import FormModal from '../FormModal'

type Prop = {
  isOpen: boolean
  onClose: () => void
  addresseeOptions: OptionProps[]
  isInstitutionDirectorModal: boolean
  onSubmit: () => Promise<void>
}

const { organization } = ROLES

export const NewAnnouncement = ({
  isOpen,
  onClose,
  addresseeOptions,
  isInstitutionDirectorModal,
  onSubmit,
}: Prop) => {
  const { colors, mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const classroomId = Number(router.query['id-group'])
  const { user } = useAppContext()
  const { setValue } = useFormContext<PostAnnouncement>()
  const senderName = user ? `${user?.firstName} ${user?.surname}` : ''

  const valuesToSet = {
    recipientClassroomId: classroomId,
    senderFullName: senderName,
  }
  const valuesSetGroup = { ...valuesToSet, recipientRoles: [organization.student] }
  const settingValues = isInstitutionDirectorModal ? valuesToSet : valuesSetGroup
  Object.entries(settingValues).forEach(([name, value]) =>
    setValue(name as keyof PostAnnouncement, value),
  )

  const newAnnouncement = (
    <div className="newAnnouncement__data">
      <Typography variant="s1" color={colors.primary[500]}>
        {intl.formatMessage(messages.announcement.labels.title)}
      </Typography>
      <Input
        name="subject"
        label={`${intl.formatMessage(messages.announcement.labels.subject)} *`}
        size="small"
        required
      />
      {isInstitutionDirectorModal && (
        <Select
          name="recipientRoles"
          label={`${intl.formatMessage(messages.announcement.labels.receiver)} *`}
          placeholder={intl.formatMessage(messages.announcement.labels.receiver)}
          multiple
          required
          options={addresseeOptions}
        />
      )}
      <Input
        name="message"
        label={`${intl.formatMessage(messages.announcement.labels.message)} *`}
        size="small"
        className="message__input"
        multiline
        required
        maxLength={1000}
        rows={isTablet ? 5 : 4}
      />
      <div className="caption__message">
        <InfoOutline color={colors.primary[500]} fontSize={isTablet ? '1.25rem' : '2rem'} />
        <Typography variant="c1" color={colors.neutrals[500]}>
          {intl.formatMessage(messages.announcement.sendNotice.caption)}
        </Typography>
      </div>
    </div>
  )

  return (
    <>
      <FormModal
        steps={[{ id: 1, element: newAnnouncement }]}
        title={intl.formatMessage(messages.announcement.sendNotice.modalNew.title)}
        submitText={intl.formatMessage(messages.announcement.sendNotice.modalNew.submitButton)}
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={() => onSubmit()}
      />

      <style jsx>{NewAnnouncementStyles}</style>
    </>
  )
}
