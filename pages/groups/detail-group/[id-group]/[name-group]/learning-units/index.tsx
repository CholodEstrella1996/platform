import { useRouter } from 'next/router'

import LearningRoutes from 'components/modules/LearningRoutes/'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  learning: { view },
} = GROUP_PERMISSIONS

const LearningRoutesPage = () => {
  const router = useRouter()
  const id = router.query['id-group']

  return <LearningRoutes id={Number(id)} />
}

export default withAuth(LearningRoutesPage, view)
