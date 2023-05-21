import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import DetailLaboratoryUnit from 'components/modules/DetailLaboratoryUnit'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detail: { view },
} = LABORATORIES_PERMISSIONS

const DetailLaboratoryPage: NextPage = () => {
  const router = useRouter()
  const idLaboratory = router.query['id-laboratory']

  return <DetailLaboratoryUnit idLearningUnit={Number(idLaboratory)} />
}

export default withAuth(DetailLaboratoryPage, view)
