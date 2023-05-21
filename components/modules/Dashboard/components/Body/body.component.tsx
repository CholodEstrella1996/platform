import { DashboardResponse } from 'services/models/dashboard.model'

import GetAccess from './GetAccess'
import InstitutionDetail from './InstitutionDetail'
import PlatformStudentMetrics from './PlatformMetrics'
import RecentAccess from './RecentAccess'
import Statistics from './Statistics'

type Props = {
  metrics: DashboardResponse
}

export const BodyComponent = ({ metrics }: Props) => {
  const {
    usageMetrics,
    remainingDemoSubscriptionTime,
    statisticsMetrics,
    recentlyAccessedApplications,
    institutionDetails,
    studentMetrics,
  } = metrics

  return (
    <>
      {remainingDemoSubscriptionTime && <GetAccess dateTime={remainingDemoSubscriptionTime} />}
      {recentlyAccessedApplications && (
        <RecentAccess recentlyAccessedApplications={recentlyAccessedApplications} />
      )}
      {institutionDetails && <InstitutionDetail institutionDetails={institutionDetails} />}
      <PlatformStudentMetrics usageMetrics={usageMetrics} />
      {studentMetrics && <PlatformStudentMetrics studentMetrics={studentMetrics} />}
      <Statistics statisticsMetrics={statisticsMetrics} />
    </>
  )
}
