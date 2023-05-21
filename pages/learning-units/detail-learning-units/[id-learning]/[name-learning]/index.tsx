import { useRouter } from 'next/router'

import DetailLearning from 'components/modules/DetailLearning'
import { LEARNING_UNIT_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detailFromLearning: { view },
} = LEARNING_UNIT_PERMISSIONS

const DetailLearningPage = () => {
  const router = useRouter()
  const idLearning = router.query['id-learning']

  return <DetailLearning idLearning={Number(idLearning)} />
}

export default withAuth(DetailLearningPage, view)
