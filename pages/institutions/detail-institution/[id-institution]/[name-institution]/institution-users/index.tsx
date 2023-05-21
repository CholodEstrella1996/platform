import { useRouter } from 'next/router'

import MyInstitution from 'components/modules/MyInstitution'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  filters: { users },
} = DASHBOARD_PERMISSIONS

const InstitutionMembersPage = () => {
  const router = useRouter()

  const idInstitution = Number(router.query['id-institution'])

  return <MyInstitution organizationId={idInstitution} />
}
export default withAuth(InstitutionMembersPage, users)
