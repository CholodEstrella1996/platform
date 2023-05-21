import { useRouter } from 'next/router'

import DetailLearning from 'components/modules/DetailLearning'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  learning: {
    detailFromGroup: { view },
  },
} = GROUP_PERMISSIONS

const LearningRoutesPage = () => {
  const router = useRouter()
  const idLearning = router.query['id-learning']

  return <DetailLearning idLearning={Number(idLearning)} />
}

export default withAuth(LearningRoutesPage, view)
