import MySubscriptions from 'components/modules/MySubscriptions'
import { SUBSCRIPTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = SUBSCRIPTION_PERMISSIONS

const SubscriptionPage = () => <MySubscriptions />

export default withAuth(SubscriptionPage, view)
