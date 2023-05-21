import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import { OptionProps } from 'components/atoms/Select/select.models'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import memberService from 'services/modules/member'
import subscriptionService from 'services/modules/subscriptions'
import { formatMemberOptions } from 'utils/helpers/edit-content'
import { formatSubscriptionOptions } from 'utils/valuesForm/new-edit-learning-units'

import { FiltersComponent } from './filters.component'

const { getMembers } = memberService
const { getSubscriptions } = subscriptionService

const {
  filters: {
    subscriptions: subscriptionPermissions,
    child,
    organization: { subscriptions: organizationSubscriptions },
  },
} = DASHBOARD_PERMISSIONS

type OptionState = {
  subscriptions: OptionProps[]
  members: OptionProps[]
}

const defaultOptions: OptionState = {
  subscriptions: [],
  members: [],
}

export const FiltersContainer = () => {
  const { user, permissions } = useAppContext()
  const router = useRouter()
  const [options, setOptions] = useState<OptionState>(defaultOptions)

  const [subscriptionAuth, childAuth, orgSubscriptionsAuth] = [
    permissions[subscriptionPermissions],
    permissions[child],
    permissions[organizationSubscriptions],
  ]

  const organizationId = router.query['id-institution']

  const fetchSubscriptions = async () => {
    const params = organizationId ? Number(organizationId) : undefined
    const response = await getSubscriptions(params)
    const subscriptions = formatSubscriptionOptions(response)
    setOptions((prevState) => ({ ...prevState, subscriptions }))
  }

  const fetchChildren = async () => {
    if (!childAuth || !user || !user.organization) return

    const { content } = await getMembers(user.organization.id, { role: 'family-child' })
    const members = formatMemberOptions(content)
    setOptions((prevState) => ({ ...prevState, members }))
  }

  useEffect(() => {
    if ((subscriptionAuth || orgSubscriptionsAuth) && !options?.subscriptions.length)
      void fetchSubscriptions()
    void fetchChildren()
  }, [])

  return <FiltersComponent subscription={options.subscriptions} members={options.members} />
}
