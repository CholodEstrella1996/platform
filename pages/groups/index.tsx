import React from 'react'

import Groups from 'components/modules/Group/'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { view } = GROUP_PERMISSIONS

const GroupsPage = () => <Groups />

export default withAuth(GroupsPage, view)
