import { useRouter } from 'next/router'

import DetailEditClient from 'components/modules/DetailEditClient'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  member: { view },
} = MY_INSTITUTION_PERMISSIONS

const DetailMemberPage = () => {
  const router = useRouter()
  const idMember = router.query['id-member']
  const idOrganization = Number(router.query['id-institution'])

  return <DetailEditClient clientId={Number(idMember)} institutionId={idOrganization} />
}

export default withAuth(DetailMemberPage, view)
