import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import DetailPractice from 'components/modules/DetailPractice'

const DetailPracticePage: NextPage = () => {
  const router = useRouter()
  const id = router.query['id-assignment']

  // TODO agregar logica en module DetailPractice para el role gobernador
  return <DetailPractice assignmentId={Number(id)} />
}

export default DetailPracticePage
