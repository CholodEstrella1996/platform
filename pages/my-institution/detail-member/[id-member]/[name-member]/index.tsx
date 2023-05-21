import { useRouter } from 'next/router'

import DetailEditClient from 'components/modules/DetailEditClient'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  member: { view },
} = MY_INSTITUTION_PERMISSIONS

const DetailMemberPage = () => {
  const router = useRouter()
  const id = router.query['id-member']

  return <DetailEditClient clientId={Number(id)} />
}

export default withAuth(DetailMemberPage, view)
