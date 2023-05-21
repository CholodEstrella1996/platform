import BreadCrumbs from 'components/atoms/Breadcrumbs'

import { DetailInstitutionStyles } from './detailInstitution.styles'
import Dashboard from '../Dashboard'

export const DetailInstitutionComponent = () => (
  <>
    <BreadCrumbs />
    <Dashboard />
    <style jsx>{DetailInstitutionStyles}</style>
  </>
)
