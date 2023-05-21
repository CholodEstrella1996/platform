import { useRouter } from 'next/router'

import DetailSubscription from 'components/modules/DetailSubscription'
import { MY_SUBSCRIPTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  detail: { view },
} = MY_SUBSCRIPTION_PERMISSIONS

const DetailSubscriptionPage = () => {
  const router = useRouter()
  const idSubscription = router.query['id-subscription']

  return <DetailSubscription idSubscription={Number(idSubscription)} />
}

export default withAuth(DetailSubscriptionPage, view)
