import { HOME_PERMISSION } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const Index = () => null
export default withAuth(Index, HOME_PERMISSION)
