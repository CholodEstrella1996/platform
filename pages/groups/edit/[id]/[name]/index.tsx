import { useRouter } from 'next/router'

import NewEditGroup from 'components/modules/NewEditGroup'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detail: { update },
} = GROUP_PERMISSIONS

const NewEditGroupPage = () => {
  const router = useRouter()
  const { id } = router.query

  return <NewEditGroup idGroup={Number(id)} isEditable />
}

export default withAuth(NewEditGroupPage, update)
