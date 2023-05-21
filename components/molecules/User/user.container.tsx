import { useAppContext } from 'context/appContext'

import { UserComponent } from './user.component'

const UserContainer = () => {
  const { user } = useAppContext()
  if (!user) return null
  return <UserComponent user={user} />
}

export default UserContainer
