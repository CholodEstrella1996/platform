import { useState } from 'react'

import router from 'next/router'
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { useEffectOnce, useUpdateEffect } from 'usehooks-ts'

import { OptionProps } from 'components/atoms/Select/select.models'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Status } from 'services/models/client.model'
import { MemberResponse } from 'services/models/member.model'
import { ApiRequestMember } from 'services/models/responseBase.model'
import groupService from 'services/modules/group'
import memberService from 'services/modules/member'
import subscriptionService from 'services/modules/subscriptions'
import { formatNewEditGroup } from 'utils/valuesForm/new-edit-group'
import { formatSubscriptionOptions } from 'utils/valuesForm/new-edit-learning-units'

import { NewEditGroupComponent } from './newEditGroup.component'
import messages from './newEditGroup.messages'
import { NewEditGroupForm } from './newEditGroup.model'

type NewEditGroupProps = {
  isEditable: boolean
  idGroup?: number
}
const { organization } = ROLES
export const NewEditGroupContainer = ({ isEditable, idGroup }: NewEditGroupProps) => {
  const intl = useIntl()
  const { user } = useAppContext()
  const { onSuccess, onError } = useNotification()
  const [responseData, setResponseData] = useState<MemberResponse>()
  const [listStatus, setListStatus] = useState<Status[]>()
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>()
  const [role, setRole] = useState(organization.student)
  const [isSaving, setIsSaving] = useState(false)
  const [isStepThree, setIsStepThree] = useState(false)
  const [backToStepTwo, setBackToStepTwo] = useState(false)
  const [pageNumber, setPageNumber] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const methods = useForm<NewEditGroupForm>({ mode: 'all' })
  const { handleSubmit, setValue, control } = methods

  const searchQuery = useWatch({ control, name: 'search' })
  const status = useWatch({ control, name: 'state' })
  const subscriptionFilter = useWatch({ control, name: 'subscriptionFilter' })
  const groupSubscription = useWatch({ control, name: 'subscription' })

  const getGroupDetail = async (id: number) => {
    try {
      const data = await groupService.getGroupById(id)
      setValue('name', data?.name || '')
      setValue('description', data?.description || '')
      setValue('students', data?.roles[0]?.members || [])
      setValue('teachersInCharge', data?.roles[1]?.members || [])
      setValue('subscription', data.subscription)
    } catch (err) {
      onError(intl.formatMessage(messages.getGroup.error))
      // eslint-disable-next-line no-console
      console.error('getGroupDetail --> error\n', err)
    }
  }

  const getListStatus = async () => {
    const data = await memberService.getMembersStatus()
    const statusList = data
      ? data.map((elem) => ({
          ...elem,
          displayName: elem.displayName.charAt(0).toUpperCase() + elem.displayName.slice(1),
        }))
      : []
    setListStatus(statusList)
  }

  const getSubscriptionsList = async () => {
    try {
      const data = await subscriptionService.getSubscriptions()
      const formatData = formatSubscriptionOptions(data)
      setSubscriptions(formatData)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getSubscriptions error >>: ', error)
      onError(intl.formatMessage(messages.notificationTexts.getSubscriptionsError))
      void router.push(`/groups`)
    }
  }

  const onSubmit: SubmitHandler<NewEditGroupForm> = async (data) => {
    setIsSaving((prevState) => !prevState)
    if (user)
      try {
        if (isEditable && idGroup) {
          const editGroup = await groupService.editGroup(idGroup, formatNewEditGroup(data))
          void router.push(`/groups/detail-group/${editGroup.id}/${editGroup.name}`)
        } else {
          const newGroup = await groupService.createGroup(
            Number(user?.organization?.id),
            formatNewEditGroup(data),
          )
          void router.push(`/groups/detail-group/${newGroup.id}/${newGroup.name}`)
        }
        onSuccess(intl.formatMessage(messages.notificationTexts.newEdit.success, { isEditable }))
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error('create/postGroup --> error\n', err)
        onError(intl.formatMessage(messages.notificationTexts.newEdit.error, { isEditable }))
      }
    setIsSaving((prevState) => !prevState)
  }

  const getMembers = async (rol: string, pageNumb: number, resetSubscription = false) => {
    setIsLoading(true)
    const isStudentStep = rol === organization.student
    const shouldSetSubscription = isStudentStep || !resetSubscription
    const subscriptionParam = isStudentStep ? groupSubscription?.id : subscriptionFilter
    const params: ApiRequestMember = {
      pageNumber: pageNumb,
      role: rol,
      pageSize: 10,
      searchQuery,
      status,
      ...(shouldSetSubscription && { subscriptionId: subscriptionParam }),
    }

    if (user)
      try {
        const data = await memberService.getMembers(Number(user?.organization?.id), params)
        setResponseData(data)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('getMember() --> error\n', error)
        onError(intl.formatMessage(messages.notificationTexts.getMembersError))
      }
    setIsLoading(false)
  }

  const changeRole = (rol?: string, page?: number, resetSubscription?: boolean) => {
    const currentRole = rol ?? role
    if (resetSubscription) setBackToStepTwo(true)
    else setBackToStepTwo(false)
    if (currentRole === organization.student) setIsStepThree(true)
    else setIsStepThree(false)

    void getMembers(currentRole, page ?? pageNumber, resetSubscription)
    if (page) setPageNumber(page)
    if (rol) setRole(rol)
  }

  useUpdateEffect(() => {
    const delaySearch = setTimeout(() => {
      void changeRole(undefined, 0)
    }, 1000)

    return () => clearTimeout(delaySearch)
  }, [searchQuery, status])

  useUpdateEffect(() => {
    if (isStepThree && !!subscriptionFilter) return
    if (backToStepTwo) return
    changeRole(undefined, 0)
  }, [subscriptionFilter])

  useEffectOnce(() => {
    if (isEditable && idGroup) void getGroupDetail(idGroup)
    if (!listStatus) void getListStatus()
    if (!subscriptions) void getSubscriptionsList()

    void getMembers('organization-teacher', 0)
  })
  if (!responseData || !subscriptions) return null
  return (
    <FormProvider {...methods}>
      <NewEditGroupComponent
        role={(rol: string, page: number, resetSubscription?: boolean) => {
          changeRole(rol, page, resetSubscription)
        }}
        data={responseData}
        isEditable={isEditable}
        onSubmit={handleSubmit(onSubmit)}
        organizationName={user?.organization?.name}
        isSaving={isSaving}
        isLoading={isLoading}
        subscriptionOptions={subscriptions}
        listStatus={listStatus ?? []}
        groupSubscription={groupSubscription}
      />
    </FormProvider>
  )
}
