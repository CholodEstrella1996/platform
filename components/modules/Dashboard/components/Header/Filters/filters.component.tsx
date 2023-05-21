import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { DashboardStyles } from 'components/modules/Dashboard/dashboard.styles'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'

import messages from '../../../dashboard.messages'

type Props = {
  members: OptionProps[]
  subscription: OptionProps[]
}

const {
  filters: {
    child,
    subscriptions,
    qualifications,
    groups,
    users,
    organization: {
      qualifications: organizationQualifications,
      subscriptions: organizationSubscriptions,
    },
  },
} = DASHBOARD_PERMISSIONS

export const FiltersComponent = ({ subscription, members }: Props) => {
  const intl = useIntl()
  const router = useRouter()
  const { permissions } = useAppContext()

  const idInstitution = router.query['id-institution']
  const nameInstitution = router.query['name-institution']

  const institutionMembersPath = `/institutions/detail-institution/${Number(
    idInstitution,
  )}/${String(nameInstitution)}/institution-users`

  const [
    filterChildAuth,
    filterSubscriptionAuth,
    filterQualificationAuth,
    filterGroupAuth,
    filterOrganizationQualificationAuth,
    filterOrganizationSubscriptionAuth,
    filterUsersAuth,
  ] = [
    permissions[child],
    permissions[subscriptions],
    permissions[qualifications],
    permissions[groups],
    permissions[organizationQualifications],
    permissions[organizationSubscriptions],
    permissions[users],
  ]
  const hasAssignmentsPermission =
    filterQualificationAuth || Boolean(filterOrganizationQualificationAuth && idInstitution)

  const hasSubscriptionsPermission =
    filterSubscriptionAuth || Boolean(filterOrganizationSubscriptionAuth && idInstitution)

  const hasGroupsPermission = filterGroupAuth && Boolean(idInstitution)
  const hasUsersPermission = filterUsersAuth && Boolean(idInstitution)

  const subscriptionSelect = {
    name: 'subscriptionId',
    label: intl.formatMessage(messages.filters.label, { type: 'subscription' }),
    placeholder: intl.formatMessage(messages.filters.placeholder),
    isClearable: true,
    options: subscription,
  }

  const childrenSelect = {
    name: 'userId',
    label: intl.formatMessage(messages.filters.label, { type: 'children' }),
    placeholder: intl.formatMessage(
      !members?.length ? messages.filters.emptyChildren : messages.filters.placeholder,
    ),
    isClearable: true,
    options: members,
    disabled: !members?.length,
  }

  const handleGroupsRedirect = () =>
    void router.push(
      `/institutions/detail-institution/${Number(idInstitution)}/${String(nameInstitution)}/groups`,
    )
  const handleAssignmentsRedirect = () => {
    const isGovernment = Boolean(filterOrganizationQualificationAuth && idInstitution)

    const path = !isGovernment
      ? '/laboratories/assignments'
      : `/institutions/detail-institution/${String(idInstitution)}/${String(
          nameInstitution,
        )}/assignments`
    void router.push(path)
  }

  return (
    <>
      <div className="header__actions">
        {hasAssignmentsPermission && (
          <Button size="large" className="header__button" onClick={handleAssignmentsRedirect}>
            {intl.formatMessage(messages.headerButton.assignments)}
          </Button>
        )}
        {hasGroupsPermission && (
          <Button
            variant="outlined"
            size="large"
            className="header__button"
            onClick={handleGroupsRedirect}>
            {intl.formatMessage(messages.headerButton.groups)}
          </Button>
        )}
        {hasUsersPermission && (
          <Button
            variant="outlined"
            size="large"
            className="header__button"
            onClick={() => void router.push(institutionMembersPath)}>
            {intl.formatMessage(messages.headerButton.users)}
          </Button>
        )}
        {(filterChildAuth || hasSubscriptionsPermission) && (
          <div className="header__filters">
            {hasSubscriptionsPermission && <Select {...subscriptionSelect} />}
            {filterChildAuth && <Select {...childrenSelect} />}
          </div>
        )}
      </div>
      <style jsx>{DashboardStyles}</style>
    </>
  )
}
