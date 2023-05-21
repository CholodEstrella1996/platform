export type DashboardResponse = {
  remainingDemoSubscriptionTime?: string
  usageMetrics: UsageMetrics
  statisticsMetrics: StatisticsMetrics
  recentlyAccessedApplications?: RecentlyAccessedApplications[]
  institutionDetails?: InstitutionDetails
  studentMetrics?: StudentMetrics
}

type UsageMetrics = {
  totalPlatformUsageTime: string
  meanAssignmentDeliveryTime: string
  totalSimulatorUsageTime: string
  meanPlatformUsageTime: string
  totalLearningSessions: number
  activeStudents: number
}

type StatisticsMetrics = {
  meanAssignmentScore: number
  progressInPercentage?: number
  progressByApplication?: ProgressByApplication[]

  todaySessions?: number
  sessionsByDay?: { day: string; sessions: number }[]
  todaySessionsByOrganization?: { id: number; name: string; sessions: number }[]

  ranking?: Ranking[]
}

type ProgressByApplication = {
  id: number
  name: string
  totalStudents: number
  studentsThatCompletedAssignment: number
}

type RecentlyAccessedApplications = {
  color: string
  colorDark: string
  colorLight: string
  iconUrl: string
  id: number
  name: string
  type: {
    id: number
    name: string
  }
}

type Ranking = {
  avatarUrl: string | null
  fullName: string
  id: string
  score: number
}

type InstitutionDetails = {
  activeMembers: number
  availableInvitations: number
  invitedMembers: number
  totalInvitations: number
}

type StudentMetrics = {
  assignmentsCompletedByDay: { day: string; completedAssignments: number }[]
  completedAssignments: number
  sessionsByDay: { day: string; sessions: number }[]
  todaySessions: number
}
