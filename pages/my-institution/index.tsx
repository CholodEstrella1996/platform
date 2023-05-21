import MyInstitution from 'components/modules/MyInstitution'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = MY_INSTITUTION_PERMISSIONS

const InstitutionPage = () => <MyInstitution />

export default withAuth(InstitutionPage, view)
