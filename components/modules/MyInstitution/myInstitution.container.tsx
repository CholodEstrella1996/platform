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

import { MyInstitutionComponent } from './myInstitution.component'
import messages from './myInstitution.messages'
import { DataFilter } from './myInstitution.model'

type Props = {
  organizationId?: number
}

type MemberRole = {
  roleName: string
  page: number
}

const MyInstitutionContainer = ({ organizationId }: Props) => {
  const [responseData, setResponseData] = useState<MemberResponse>()
  const [memberRole, setMemberRole] = useState<MemberRole>({
    roleName: 'organization-student',
    page: 0,
  })
  const [role, setRole] = useState('organization-student')
  const [pageNumber, setPageNumber] = useState(0)
  const [listStatus, setListStatus] = useState<Status[]>()
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>()
  const [isLoading, setIsLoading] = useState(true)
  const [isDownloading, setIsDownloading] = useState(false)
  const { onSuccess, onError } = useNotification()
  const intl = useIntl()
  const methods = useForm<DataFilter>({ mode: 'all' })
  const {
    handleSubmit,
    getValues,
    control,
    formState: { isDirty },
  } = methods
  const { keycloak } = useKeycloak()

  const subscriptionId = useWatch({ control, name: 'subscriptionId' })
  const searchQuery = useWatch({ control, name: 'search' })
  const status = useWatch({ control, name: 'state' })

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
    const data = await subscriptionService.getSubscriptions(organizationId)

    const formatData = data.map(({ id, code }) => ({
      id,
      value: id,
      label: code,
    }))
    setSubscriptions(formatData)
  }

  const getMembers = async (rol: string, pageNumb: number) => {
    setIsLoading(true)
    const params: ApiRequestMember = {
      organizationId,
      pageNumber: pageNumb,
      role: rol,
      pageSize: 10,
      searchQuery,
      status,
      subscriptionId,
    }
    try {
      const data = await memberService.getMembers(
        organizationId ?? Number(keycloak?.tokenParsed?.organizationId),
        params,
      )
      setResponseData(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getMembers() --> error\n', error)
      onError(intl.formatMessage(messages.getMemberError))
    }

    setMemberRole({ roleName: rol, page: pageNumb })
    setIsLoading(false)
  }

  const changeRole = (rol?: string, page?: number) => {
    void getMembers(rol ?? role, page ?? pageNumber)
    if (page) setPageNumber(page)
    if (rol) setRole(rol)
  }

  const handleSearch: SubmitHandler<DataFilter> = async () => changeRole(undefined, 0)

  const deleteMember = async (id: number) => {
    try {
      await memberService.deleteMember(Number(keycloak?.tokenParsed?.organizationId), id)
      onSuccess(intl.formatMessage(messages.deleteSuccess))
      void getMembers(memberRole.roleName, memberRole.page)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('deleteMember() --> error\n', err)
      onError(intl.formatMessage(messages.deleteError))
    }
  }

  const handleDownloadListMember = async (state: boolean) => {
    setIsDownloading(state)
    const params: ApiRequestMember = {
      role,
      searchQuery: getValues('search'),
      status: getValues('state'),
      subscriptionId: getValues('subscriptionId'),
    }
    try {
      await memberService.downloadMembersList(
        organizationId ?? Number(keycloak?.tokenParsed?.organizationId),
        params,
      )
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('downloadMembersList() --> error\n', error)
      onError(intl.formatMessage(messages.getMemberError))
    }
    setIsDownloading(!state)
  }

  useEffect(() => {
    if (!listStatus) void getListStatus()
    if (!subscriptions) void getSubscriptionsList()
    if (isDirty) handleSearch({ search: searchQuery, state: status, subscriptionId })
    else void getMembers('organization-student', 0)
  }, [subscriptionId, searchQuery, status])

  if (!responseData || !listStatus || !subscriptions) return null
  return (
    <FormProvider {...methods}>
      <MyInstitutionComponent
        isOrganizationId={Boolean(organizationId)}
        isDownloading={isDownloading}
        isLoading={isLoading}
        listStatus={listStatus}
        subscriptionList={subscriptions}
        deleteUser={(id) => void deleteMember(id)}
        role={(rol: string, page: number) => {
          changeRole(rol, page)
        }}
        data={responseData}
        onSearch={handleSubmit(handleSearch)}
        onDownload={(state: boolean) => void handleDownloadListMember(state)}
      />
    </FormProvider>
  )
}

export default MyInstitutionContainer
