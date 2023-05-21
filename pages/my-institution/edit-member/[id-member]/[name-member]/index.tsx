import { useRouter } from 'next/router'

import DetailEditClient from 'components/modules/DetailEditClient'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  member: { update },
} = MY_INSTITUTION_PERMISSIONS

const EditMemberPage = () => {
  const router = useRouter()
  const id = router.query['id-member']
  return <DetailEditClient clientId={Number(id)} isEditable />
}

export default withAuth(EditMemberPage, update)
