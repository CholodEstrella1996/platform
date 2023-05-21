import { useEffect, useRef, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import messages from 'components/modules/Invites/invite.messages'
import { PROFILES } from 'constants/profiles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Group } from 'services/models/group.model'
import { SendInvite } from 'services/models/invite.model'
import { Language } from 'services/models/languages.model'
import groupService from 'services/modules/group'
import inviteService from 'services/modules/invite'
import languageService from 'services/modules/languages'

import InviteComponent from './invite.component'
import { SelectReference } from './invite.model'

export type InviteProps = {
  profile: string
  roleName: string
}

const InviteContainer = ({ profile, roleName }: InviteProps) => {
  const intl = useIntl()
  const { user } = useAppContext()
  const { language } = useAppContext()
  const { onError } = useNotification()
  const methods = useForm<SendInvite>({ mode: 'all' })

  const [openModal, setOpenModal] = useState(false)

  const [isSending, setIsSending] = useState(false)
  const [listGroup, setListGroup] = useState<Group[]>([])
  const [listLanguage, setListLanguage] = useState<Language[]>([])
  const groupSelectRef = useRef<SelectReference>(null)

  const { watch } = methods
  const subscriptionId = watch('subscription')
  const isChildrenInvitation = profile === 'children'
  const parentName = isChildrenInvitation
    ? `${String(user?.firstName)} ${String(user?.surname)}`
    : ''
  const intlProfile = intl.formatMessage(PROFILES[profile as keyof typeof PROFILES])

  const submitInvite = async (data: SendInvite) => {
    setIsSending((prevState) => !prevState)
    if (user)
      try {
        const dataNew = { ...data, role: roleName, subscriptionId: data.subscription }
        const { subscription, ...args } = dataNew
        await inviteService.newInvite(args)
        setOpenModal((prevState) => !prevState)
      } catch (err) {
        onError(intl.formatMessage(messages.message.post.error))
        // eslint-disable-next-line no-console
        console.error('postInvite --> error\n', err)
      }
    setIsSending((prevState) => !prevState)
  }
  const getLanguage = async () => {
    try {
      const languages = await languageService.getLanguages()
      const defaultLang = languages.find((item) => {
        const lang = item.languageCode.split('-')[0]
        if (lang === language) return item
        return null
      })
      setListLanguage(languages)
      methods.setValue('languageCode', defaultLang?.languageCode ?? '')
    } catch (err) {
      onError(intl.formatMessage(messages.message.language.error))
      // eslint-disable-next-line no-console
      console.error('getLanguages --> error\n', err)
    }
  }
  const getGroups = async () => {
    if (!user) return
    try {
      const groups = await groupService.getGroups({ subscriptionId })
      setListGroup(groups)
    } catch (err) {
      onError(intl.formatMessage(messages.message.group.error))
      // eslint-disable-next-line no-console
      console.error('getGroup --> error\n', err)
    }
  }

  useEffect(() => {
    if (!subscriptionId) void getLanguage()
    if (!isChildrenInvitation && subscriptionId) void getGroups()
  }, [subscriptionId])

  if (!user?.organization?.name) return null
  return (
    <FormProvider {...methods}>
      <InviteComponent
        isSending={isSending}
        profile={intlProfile}
        organizationName={user?.organization.name}
        listLanguage={listLanguage}
        listGroup={listGroup}
        dataInvite={(res: SendInvite) => void submitInvite(res)}
        isChildrenInvitation={isChildrenInvitation}
        parentName={parentName}
        reference={groupSelectRef}
        openModal={openModal}
      />
    </FormProvider>
  )
}

export default InviteContainer
