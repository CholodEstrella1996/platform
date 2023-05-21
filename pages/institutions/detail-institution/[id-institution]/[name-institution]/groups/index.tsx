import { useRouter } from 'next/router'

import Groups from 'components/modules/Group'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  filters: {
    detailGroup: { view },
  },
} = DASHBOARD_PERMISSIONS

const GovernmentGroupsPage = () => {
  const router = useRouter()

  const institutionId = Number(router.query['id-institution'])
  return <Groups organizationId={institutionId} />
}

export default withAuth(GovernmentGroupsPage, view)
