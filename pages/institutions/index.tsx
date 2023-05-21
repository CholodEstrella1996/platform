import type { NextPage } from 'next'

import GovernmentInstitutions from 'components/modules/Institutions'
import { INSTITUTIONS_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = INSTITUTIONS_PERMISSIONS

const GovernmentInstitutionsPage: NextPage = () => <GovernmentInstitutions />

export default withAuth(GovernmentInstitutionsPage, view)
