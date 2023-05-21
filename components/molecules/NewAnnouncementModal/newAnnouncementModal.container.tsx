import { useEffect, useState } from 'react'

import Router from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import messages from 'components/modules/Announcement/announcement.messages'
import { PROFILES } from 'constants/profiles'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { PostAnnouncement } from 'services/models/announcement.model'
import allowedAddresseeService from 'services/modules/allowed-addressee'
import announcementService from 'services/modules/announcement'

import { NewAnnouncement } from './newAnnouncementModal.component'

const { organization } = ROLES

type Props = {
  openNewNotice: boolean
  onClose: () => void
  getAnnouncements: (numberPage: number, classroomId: number) => Promise<void>
}

export const NewAnnouncementContainer = ({ openNewNotice, onClose, getAnnouncements }: Props) => {
  const [selectOptions, setSelectOptions] = useState<OptionProps[]>([])
  const methods = useForm<PostAnnouncement>()
  const { handleSubmit, resetField } = methods
  const { profile } = useAppContext()
  const intl = useIntl()
  const { onError } = useNotification()
  const { onSuccess } = useNotification()
  const groupId = Router.query['id-group']
  const isInstitutionDirectorModal =
    !groupId && [organization.director, organization.manager].includes(profile)

  const capitalizeOption = (role: string) => {
    const label = intl.formatMessage(PROFILES[role as keyof typeof PROFILES])
    return label.charAt(0).toUpperCase() + label.slice(1)
  }

  const getSelectOptions = async () => {
    try {
      const response = await allowedAddresseeService.getAddressees()
      const options = response.map(({ id, name, displayName }) => ({
        id,
        value: name,
        label: capitalizeOption(displayName),
      }))
      setSelectOptions(options)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Getgroups error >>: ', err)
      onError(intl.formatMessage(messages.announcement.getOptionsError))
    }
  }

  const onSubmit: SubmitHandler<PostAnnouncement> = async (data) => {
    try {
      await announcementService.sendAnnouncement(data)
      onSuccess(intl.formatMessage(messages.announcement.sendNotice.notification.success))
      void getAnnouncements(0, Number(groupId))
      Object.entries(data).forEach(([name]) => resetField(name as keyof PostAnnouncement))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('sendAnnouncement error: ', error)
      onError(intl.formatMessage(messages.announcement.sendNotice.notification.error))
    }
  }

  useEffect(() => {
    if (isInstitutionDirectorModal) void getSelectOptions()
  }, [])

  return (
    <FormProvider {...methods}>
      <NewAnnouncement
        addresseeOptions={selectOptions}
        isInstitutionDirectorModal={isInstitutionDirectorModal}
        onSubmit={handleSubmit(onSubmit)}
        isOpen={openNewNotice}
        onClose={onClose}
      />
    </FormProvider>
  )
}
