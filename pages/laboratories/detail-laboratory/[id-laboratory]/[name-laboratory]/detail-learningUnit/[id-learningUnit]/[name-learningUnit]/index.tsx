import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import DetailLaboratoryUnit from 'components/modules/DetailLaboratoryUnit'

const DetailLaboratoryPage: NextPage = () => {
  const router = useRouter()
  const idUnit = router.query['id-learningUnit']

  return <DetailLaboratoryUnit idLearningUnit={Number(idUnit)} />
}

export default DetailLaboratoryPage
