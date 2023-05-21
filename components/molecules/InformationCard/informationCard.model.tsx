import { OptionProps } from 'components/atoms/Select/select.models'
import { OptionsForSelect, RankingProps } from 'components/modules/Dashboard/dashboard.model'
import { DashboardResponse } from 'services/models/dashboard.model'

type InformationCardProps = {
  title: string
  subtitle?: string
  icon: JSX.Element
  color: string
  informationNumber?: string
  type?: string
  percentage?: number
  linearAreaChart?: LinearAreaData
  rankingData?: RankingProps[]
  progress?: DashboardResponse['statisticsMetrics']['progressByApplication']
  optionsForSelect?: OptionsForSelect
  isStudentMetrics?: boolean
  isCompletion?: boolean
}

type LinearAreaData = {
  title?: string
  data?: {
    id: number
    name: string
    sessions: number
  }[]
  chart: ChartData
}
type LinearAreaProps = LinearAreaData & {
  type: string
  isStudentMetrics?: boolean
}

type ChartData = {
  nameSeries: string
  dataSeries: unknown[]
}

type PercentageProps = {
  percentage: number
  areas: OptionProps[]
  laboratories: OptionProps[]
  isCompletion: boolean
}

type RankingCardProp = {
  rankings: RankingProps[]
}

type ProgressCardProps = {
  progress: DashboardResponse['statisticsMetrics']['progressByApplication']
  areas?: OptionProps[]
  topics?: OptionProps[]
}

type DataFilter = {
  areaId?: number
  laboratoryId?: number
  topicId?: number
}

export type {
  InformationCardProps,
  LinearAreaData,
  PercentageProps,
  DataFilter,
  LinearAreaProps,
  RankingCardProp,
  ProgressCardProps,
}
