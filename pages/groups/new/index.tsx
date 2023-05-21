import NewEditGroup from 'components/modules/NewEditGroup'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { create } = GROUP_PERMISSIONS

const NewEditGroupPage = () => <NewEditGroup isEditable={false} />

export default withAuth(NewEditGroupPage, create)
