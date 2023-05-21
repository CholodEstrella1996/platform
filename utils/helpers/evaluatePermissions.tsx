import { useRouter } from 'next/router'

import Spinner from 'components/atoms/Spinner'
import { NOT_ALLOWED_PAGE, PAGES } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'

export function withAuth(Component: React.ComponentType, permission: string) {
  const Auth = () => {
    const { permissions } = useAppContext()
    const router = useRouter()

    if (!permissions[permission]) {
      const pageAuth = PAGES.find((page) => !!permissions[page.permission])
      const href = pageAuth?.url ?? NOT_ALLOWED_PAGE
      void router.push(href)
      return <Spinner />
    }
    return <Component />
  }
  return Auth
}
