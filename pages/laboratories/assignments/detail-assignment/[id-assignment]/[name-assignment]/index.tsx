import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import DetailPractice from 'components/modules/DetailPractice'

const DetailAssignmentPage: NextPage = () => {
  const router = useRouter()
  const assignmentId = router.query['id-assignment']
  return <DetailPractice assignmentId={Number(assignmentId)} />
}

export default DetailAssignmentPage
