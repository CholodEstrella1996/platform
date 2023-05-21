import MyDevices from 'components/modules/MyDevices'
import { MY_DEVICES_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { viewDevices } = MY_DEVICES_PERMISSIONS
const MyDevicesPage = () => <MyDevices />

export default withAuth(MyDevicesPage, viewDevices)
