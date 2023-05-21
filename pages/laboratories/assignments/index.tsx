import Assignments from 'components/modules/Assignments'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  assignments: { view },
} = LABORATORIES_PERMISSIONS

const AssignmentsPage = () => <Assignments />

export default withAuth(AssignmentsPage, view)
