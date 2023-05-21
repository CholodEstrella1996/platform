import { useKeycloak } from '@react-keycloak-fork/ssr'

import Spinner from 'components/atoms/Spinner'
import Footer from 'components/molecules/Footer'
import Header from 'components/molecules/Header'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'

import { DefaultLayoutProps } from './defaultLayout.model'
import { DefaultLayoutLocalStyles } from './defaultLayout.styles'
import InitialActions from '../InitialActions'

const USER_ROLES = [ROLES.independent.teacher, ROLES.independent.student]

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
  const { user, profile } = useAppContext()
  const { keycloak } = useKeycloak()

  const withoutOrganization = USER_ROLES.some((role) => role === profile)
  const hasError = (!user?.organization && !withoutOrganization) || !profile

  if (user && hasError && keycloak?.authenticated) {
    window.location.href = keycloak?.createLogoutUrl()
    return <Spinner />
  }

  return (
    <>
      <div className="container">
        <Header />
        <main className="content">{children}</main>
        <InitialActions />
        <Footer />
      </div>
      <style jsx>{DefaultLayoutLocalStyles}</style>
    </>
  )
}

export default DefaultLayoutComponent
