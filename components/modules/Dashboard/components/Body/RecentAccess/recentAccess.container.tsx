import { DashboardResponse } from 'services/models/dashboard.model'

import { RecentAccessComponent } from './recentAccess.component'

type Props = {
  recentlyAccessedApplications: DashboardResponse['recentlyAccessedApplications']
}

export const RecentAccessContainer = ({ recentlyAccessedApplications = [] }: Props) => (
  <RecentAccessComponent recentlyAccessedApplications={recentlyAccessedApplications} />
)
