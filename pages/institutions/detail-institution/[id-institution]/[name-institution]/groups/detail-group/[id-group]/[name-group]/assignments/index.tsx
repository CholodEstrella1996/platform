import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Assignments from 'components/modules/Assignments'

const AssignmentsPage: NextPage = () => {
  const router = useRouter()

  const institutionId = Number(router.query['id-institution'])
  return <Assignments organizationId={institutionId} />
}

export default AssignmentsPage
