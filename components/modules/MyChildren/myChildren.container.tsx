import { useEffect, useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { useNotification } from 'hooks/notification'
import { Status } from 'services/models/client.model'
import { MemberResponse } from 'services/models/member.model'
import { ApiRequestMember } from 'services/models/responseBase.model'
import memberService from 'services/modules/member'
import subscriptionService from 'services/modules/subscriptions'

import MyChildrenComponent from './myChildren.component'
import messages from './myChildren.messages'
import { DataFilter } from './myChildren.model'

const MyChildrenContainer = () => {
  const [responseData, setResponseData] = useState<MemberResponse>()
  const [pageNumber, setPageNumber] = useState(0)
  const [listStatus, setListStatus] = useState<Status[]>()
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>()
  const [isLoading, setIsLoading] = useState(false)
  const { onSuccess, onError } = useNotification()
  const intl = useIntl()
  const methods = useForm<DataFilter>({ mode: 'all' })
  const {
    handleSubmit,
    control,
    formState: { isDirty },
  } = methods
  const { keycloak } = useKeycloak()

  const subscriptionId = useWatch({ control, name: 'subscriptionId' })
  const searchQuery = useWatch({ control, name: 'search' })
  const status = useWatch({ control, name: 'state' })

  const getSubscriptionsList = async () => {
    const data = await subscriptionService.getSubscriptions()
    const formatData = data.map(({ id, code }) => ({
      id,
      value: id,
      label: code,
    }))
    setSubscriptions(formatData)
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

  const getMyChildren = async (pageNumb: number) => {
    setIsLoading(true)
    const params: ApiRequestMember = {
      pageNumber: pageNumb,
      role: 'family-child',
      pageSize: 10,
      searchQuery,
      status,
      subscriptionId,
    }
    try {
      const data = await memberService.getMembers(
        Number(keycloak?.tokenParsed?.organizationId),
        params,
      )
      setResponseData(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getMyChildren() --> error\n', error)
      onError(intl.formatMessage(messages.getMyChildrenError))
    }
    setIsLoading(false)
  }

  const changeRole = (page?: number) => {
    void getMyChildren(page ?? pageNumber)
    if (page) setPageNumber(page)
  }

  const handleSearch: SubmitHandler<DataFilter> = async () => changeRole(0)

  const deleteMember = async (id: number) => {
    try {
      await memberService.deleteMember(Number(keycloak?.tokenParsed?.organizationId), id)
      onSuccess(intl.formatMessage(messages.deleteSuccess))
      void getMyChildren(0)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('deleteMember() --> error\n', err)
      onError(intl.formatMessage(messages.deleteError))
    }
  }

  useEffect(() => {
    if (!listStatus) void getListStatus()
    if (!subscriptions) void getSubscriptionsList()
    if (isDirty) handleSearch({ search: searchQuery, state: status, subscriptionId })
    void getMyChildren(0)
  }, [subscriptionId, searchQuery, status])

  if (!responseData || !listStatus) return null
  return (
    <FormProvider {...methods}>
      <MyChildrenComponent
        isLoading={isLoading}
        listStatus={listStatus}
        subscriptionList={subscriptions ?? []}
        deleteUser={(id) => void deleteMember(id)}
        data={responseData}
        onSearch={handleSubmit(handleSearch)}
        pageChange={(newPage) => {
          void getMyChildren(newPage)
        }}
      />
    </FormProvider>
  )
}

export default MyChildrenContainer
