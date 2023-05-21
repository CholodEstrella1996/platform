import DetailInstitution from 'components/modules/DetailInstitution'
import { DASHBOARD_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = DASHBOARD_PERMISSIONS
const DetailInstitutionPage = () => <DetailInstitution />

export default withAuth(DetailInstitutionPage, view)
