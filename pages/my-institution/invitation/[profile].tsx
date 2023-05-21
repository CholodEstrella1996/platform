import { useRouter } from 'next/router'

import Invites from 'components/modules/Invites'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const { invitation } = MY_INSTITUTION_PERMISSIONS

const InvitePage = () => {
  const {
    query: { profile },
  } = useRouter()
  return <Invites profile={String(profile)} roleName={`organization-${String(profile)}`} />
}

export default withAuth(InvitePage, invitation.view)
