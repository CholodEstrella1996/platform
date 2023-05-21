import Laboratories from 'components/modules/Laboratories'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = LABORATORIES_PERMISSIONS

const LaboratoriesPage = () => <Laboratories />

export default withAuth(LaboratoriesPage, view)
