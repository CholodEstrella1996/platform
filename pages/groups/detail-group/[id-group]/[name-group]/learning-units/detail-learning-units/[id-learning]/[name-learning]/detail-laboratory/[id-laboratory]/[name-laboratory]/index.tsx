import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import DetailLaboratoryUnit from 'components/modules/DetailLaboratoryUnit'

const DetailLaboratoryPage: NextPage = () => {
  const router = useRouter()
  const idLaboratory = router.query['id-laboratory']

  return <DetailLaboratoryUnit idLearningUnit={Number(idLaboratory)} />
}

export default DetailLaboratoryPage
