import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import Resources from 'components/modules/Resources'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detail: {
    resource: { view },
  },
} = LABORATORIES_PERMISSIONS

const ResourcesPage: NextPage = () => {
  const router = useRouter()
  const idResource = router.query['id-resource']

  return <Resources id={Number(idResource)} />
}

export default withAuth(ResourcesPage, view)
