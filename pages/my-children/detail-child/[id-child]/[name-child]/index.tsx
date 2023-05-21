import { useRouter } from 'next/router'

import DetailEditClient from 'components/modules/DetailEditClient'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  child: { view },
} = MY_CHILDREN_PERMISSIONS

const ChildrenDetailPage = () => {
  const router = useRouter()
  const id = router.query['id-child']

  return <DetailEditClient clientId={Number(id)} />
}

export default withAuth(ChildrenDetailPage, view)
