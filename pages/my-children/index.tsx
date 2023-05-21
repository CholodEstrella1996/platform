import MyChildren from 'components/modules/MyChildren'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = MY_CHILDREN_PERMISSIONS

const MyChildrenPage = () => <MyChildren />

export default withAuth(MyChildrenPage, view)
