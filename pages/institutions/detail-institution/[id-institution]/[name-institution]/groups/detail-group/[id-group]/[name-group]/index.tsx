import { useRouter } from 'next/router'

import DetailGroup from 'components/modules/DetailGroup'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detail: { view },
} = GROUP_PERMISSIONS

const DetailGroupPage = () => {
  const router = useRouter()
  const id = router.query['id-group']

  // TODO agregar logica en module DetailGroup para el role gobernador
  return <DetailGroup idGroup={Number(id)} />
}

export default withAuth(DetailGroupPage, view)
