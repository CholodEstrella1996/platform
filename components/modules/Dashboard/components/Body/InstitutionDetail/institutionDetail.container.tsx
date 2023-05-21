import { DashboardResponse } from 'services/models/dashboard.model'

import { InstitutionDetailComponent } from './institutionDetail.component'

type Props = {
  institutionDetails: Required<DashboardResponse>['institutionDetails']
}

export const InstitutionDetailContainer = ({ institutionDetails }: Props) => (
  <InstitutionDetailComponent {...institutionDetails} />
)
