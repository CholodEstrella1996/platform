import Dashboard from 'components/modules/Dashboard'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = DASHBOARD_PERMISSIONS
const DashboardPage = () => <Dashboard />

export default withAuth(DashboardPage, view)
