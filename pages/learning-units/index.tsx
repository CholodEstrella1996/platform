import LearningRoutes from 'components/modules/LearningRoutes/'
import { LEARNING_UNIT_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = LEARNING_UNIT_PERMISSIONS

const LearningRoutesPage = () => <LearningRoutes />

export default withAuth(LearningRoutesPage, view)
