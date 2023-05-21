import { StaticImageData } from 'next/image'

import { OptionProps } from 'components/atoms/Select/select.models'
import { DashboardResponse } from 'services/models/dashboard.model'

type InformationProps = {
  id: number
  title: string
  icon: JSX.Element
  subtitle?: string
  color: string
  informationNumber?: string
  type?: string
}

type PercentageCardProps = InformationProps & {
  percentage?: number
}
type SessionsByDayProps = InformationProps & {
  linearAreaChart: {
    title: string
    data: {
      id: number
      name: string
      sessions: number
    }[]
    chart: ChartData
  }
}

type ChartData = {
  nameSeries: string
  dataSeries: unknown[]
}

type StatisticsProps = {
  sessionsByDay?: SessionsByDayProps
  ranking?: InformationProps & { rankingData: RankingProps[] }
  meanAssignmentScore?: PercentageCardProps
  progressInPercentage?: PercentageCardProps
  progressByApplication?: InformationProps & {
    progress: DashboardResponse['statisticsMetrics']['progressByApplication']
  }
  optionsForSelect: OptionsForSelect
}

type RankingProps = {
  id: string
  fullName: string
  score: number
  avatarUrl: string | null
}

type DashboardCards = {
  id: number
  title: {
    id: string
    defaultMessage: string
  }
  subtitle?: {
    id: string
    defaultMessage: string
  }
  image: StaticImageData
  requiredAction: string
  redirectTo: string
}

type Filters = {
  userId: string
  subscriptionId: number
  applicationMeanAssignment: number
  areaMeanAssignment: number
  applicationPercentage: number
  areaPercentage: number
  topicPercentage: number
  areaCompletion: number
  applicationCompletion: number
}

type OptionsForSelect = {
  areas: OptionProps[]
  topics: OptionProps[]
  laboratories: OptionProps[]
}

type Metrics = {
  id: number
  title: { id: string; defaultMessage: string }
  subtitle?: { id: string; defaultMessage: string }
  icon: JSX.Element
  color: string
}

type UsageMetrics = {
  totalPlatformUsageTime: Metrics
  meanAssignmentDeliveryTime: Metrics
  totalSimulatorUsageTime: Metrics
  meanPlatformUsageTime: Metrics
  totalLearningSessions: Metrics
  activeStudents: Metrics
}

export type {
  InformationProps,
  PercentageCardProps,
  SessionsByDayProps,
  ChartData,
  StatisticsProps,
  RankingProps,
  DashboardCards,
  Filters,
  OptionsForSelect,
  UsageMetrics,
}
