import { useEffect, useState } from 'react'

import { FormProvider, SubmitHandler, useForm, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { Group } from 'services/models/group.model'
import groupService from 'services/modules/group'
import subscriptionService from 'services/modules/subscriptions'

import { GroupsComponent } from './group.component'
import messages from './group.messages'
import { DataFilter } from './group.model'

const { subscriptions } = GROUP_PERMISSIONS

type Props = {
  organizationId?: number
}

export const GroupsContainer = ({ organizationId }: Props) => {
  const [listGroups, setListGroups] = useState<Group[]>()
  const [subscriptionList, setSubscriptionList] = useState<OptionProps[]>()
  const { onError } = useNotification()
  const intl = useIntl()
  const { permissions } = useAppContext()
  const viewSubscriptions = permissions[subscriptions.view]

  const methods = useForm<DataFilter>({ mode: 'all' })
  const {
    control,
    formState: { isDirty },
  } = methods
  const subscriptionId = useWatch({ control, name: 'subscriptionId' })

  const fetchGroups = async () => {
    try {
      const data = await groupService.getGroups({ subscriptionId, params: { organizationId } })
      setListGroups(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
      onError(intl.formatMessage(messages.getGroupError))
    }
  }

  const getSubscriptionsList = async () => {
    const data = await subscriptionService.getSubscriptions()
    const formatData = data.map(({ id, code }) => ({
      id,
      value: id,
      label: code,
    }))
    setSubscriptionList(formatData)
  }

  const handleSearch: SubmitHandler<DataFilter> = async () => fetchGroups()

  useEffect(() => {
    if (viewSubscriptions) void getSubscriptionsList()
    if (isDirty) void handleSearch({ subscriptionId })
    else void fetchGroups()
  }, [subscriptionId])

  if (!listGroups) return null

  return (
    <FormProvider {...methods}>
      <GroupsComponent
        listGroups={listGroups}
        subscriptionList={subscriptionList ?? []}
        viewSubscriptions={viewSubscriptions}
      />
    </FormProvider>
  )
}
