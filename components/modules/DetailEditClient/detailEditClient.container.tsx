/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import router from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { DETAIL_CHILD_PAGE, DETAIL_MEMBER_PAGE, PROFILE_PAGE } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Client, Status } from 'services/models/client.model'
import memberService from 'services/modules/member'
import userService from 'services/modules/user'
import { optionsForSelect } from 'utils/helpers/edit-content'
import { clientRequest, clientDetail } from 'utils/valuesForm/member-detail'

import { DetailUserComponent } from './detailEditClient.component'
import messages from './detailEditClient.messages'
import { ClientInputForm, Options } from './detailEditClient.model'

type Props = {
  clientId?: number
  isEditable?: boolean
  institutionId?: number
}
export const DetailEditUserContainer = ({ clientId, isEditable, institutionId }: Props) => {
  const intl = useIntl()
  const { user, updateUser } = useAppContext()
  const { keycloak } = useKeycloak()
  const { onSuccess, onError } = useNotification()
  const methods = useForm<ClientInputForm>({ mode: 'all' })
  const [client, setClient] = useState<Client>()
  const [isLoading, setIsLoading] = useState(false)
  const [options, setOptions] = useState<Options>()

  const organizationId = institutionId || Number(keycloak?.tokenParsed?.organizationId)
  const isLoggedIn = router.pathname.includes('profile') && !!user
  const { handleSubmit, setValue } = methods

  const redirectAfterUpdate = (name: string) => {
    if (!clientId) return void router.push(PROFILE_PAGE)

    const href = router.query['id-child']
      ? `${DETAIL_CHILD_PAGE}/${clientId}/${name}`
      : `${DETAIL_MEMBER_PAGE}/${clientId}/${name}`
    return void router.push(href)
  }

  const onSubmit: SubmitHandler<ClientInputForm> = async (successClient) => {
    setIsLoading((prevState) => !prevState)
    const identityType = options?.identityType.find(
      (item) => item.value === String(successClient.identityType),
    )
    const gender = options?.gender.find((item) => item.value === String(successClient.gender))
    const educationalLevel = options?.educationalLevel.find(
      (item) => item.value === String(successClient.educationalLevel),
    )
    const updateClient = clientRequest(successClient, client?.user, gender, educationalLevel)
    const promises = [
      isLoggedIn
        ? userService.updateUser(updateClient)
        : memberService.updateMember(organizationId, Number(clientId), updateClient),
    ]
    try {
      if (client?.user.avatarUrl && successClient.avatarUrl === null)
        promises.push(userService.deleteAvatar(client?.user.id))
      await Promise.all(promises)

      if (isLoggedIn && updateUser) {
        const currentImage =
          successClient.image &&
          successClient.image !== '/cloudlabsIcon.webp' &&
          successClient.image
        let avatar = user.avatarUrl
        if (successClient.image === '/cloudlabsIcon.webp') avatar = ''
        const { subscription, ...args } = successClient
        const updatedUser = {
          ...user,
          ...args,
          identityType: { id: Number(identityType?.id), name: successClient.identityType },
          avatarUrl: currentImage || avatar,
          educationalLevel: {
            id: Number(educationalLevel?.id),
            name: String(educationalLevel?.value),
            displayName: String(educationalLevel?.label),
          },
          gender: {
            id: Number(gender?.id),
            name: String(gender?.value),
            displayName: String(gender?.label),
          },
        }
        updateUser(updatedUser)
      }
      onSuccess(intl.formatMessage(messages.editData.success))
      redirectAfterUpdate(successClient.firstName)
    } catch (error) {
      console.error('updateMember --> error\n', error)
      onError(intl.formatMessage(messages.editData.error))
    }
    setIsLoading((prevState) => !prevState)
  }

  const fetchClient = async () => {
    try {
      const currentClient = isLoggedIn
        ? ({
            id: Number(user.id),
            role: user.role,
            status: user.status,
            subscriptions: user.subscriptions,
            user,
          } as Client)
        : await memberService.getMemberById(organizationId, Number(clientId))
      let { identityType, gender, educationalLevel } = currentClient.user

      if (isEditable)
        [identityType, gender, educationalLevel] = await Promise.all([
          userService.getIdentitiesType(),
          userService.getGender(),
          userService.getEducationalLevel(),
        ])

      setOptions({
        identityType: optionsForSelect([identityType as Status]),
        gender: optionsForSelect([gender]),
        educationalLevel: optionsForSelect([educationalLevel]),
      })
      setClient(currentClient)

      const detailMember = clientDetail(currentClient)
      Object.entries(detailMember).forEach(([name, value]) =>
        setValue(name as keyof ClientInputForm, value),
      )
    } catch (error) {
      console.error('ClientById --> error\n', error)
      onError(intl.formatMessage(messages.detailUser.api.error))
    }
  }

  const deleteMember = async () => {
    try {
      await memberService.deleteMember(organizationId, Number(clientId))
      onSuccess(intl.formatMessage(messages.deleteUser.success))
      void router.push('/my-institution')
    } catch (error) {
      console.error('deleteClient --> error\n', error)
      onError(intl.formatMessage(messages.deleteUser.error))
    }
  }

  useEffect(() => {
    void fetchClient()
  }, [])

  if (!client) return null

  return (
    <FormProvider {...methods}>
      <DetailUserComponent
        client={client}
        clientId={clientId}
        isLoggedUser={isLoggedIn}
        onDelete={() => void deleteMember()}
        onSubmit={handleSubmit(onSubmit)}
        isEditable={isEditable}
        isLoading={isLoading}
        options={options}
      />
    </FormProvider>
  )
}
