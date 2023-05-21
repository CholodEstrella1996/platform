import { useRouter } from 'next/router'

import InviteContainer from 'components/modules/Invites'
import { MY_CHILDREN_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  invitation: { view },
} = MY_CHILDREN_PERMISSIONS

const InviteChildrenPage = () => {
  const {
    query: { profile },
  } = useRouter()
  return <InviteContainer profile={String(profile)} roleName="family-child" />
}

export default withAuth(InviteChildrenPage, view)
