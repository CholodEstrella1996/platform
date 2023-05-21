import Assignments from 'components/modules/Assignments'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  learning: {
    assignments: { view },
  },
} = GROUP_PERMISSIONS

const ResultsPage = () => <Assignments />

export default withAuth(ResultsPage, view)
