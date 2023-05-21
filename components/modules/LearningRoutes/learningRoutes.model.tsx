import { OptionProps } from 'components/atoms/Select/select.models'
import { ResponseLearning } from 'services/models/learning.model'

export type LearningTableProps = {
  onSearch: () => Promise<void>
  pageChange?: (newPage: number) => void
  data: ResponseLearning
  deleteRoute: (id: number) => void
  isLoading: boolean
  idGroup?: number
  selectOptions: OptionProps[]
}

export type LearningRouteProps = {
  data: ResponseLearning
  deleteRoute: (id: number) => void
  onSearch: () => Promise<void>
  onClickHelper: (page: number) => void
  isLoading: boolean
  idGroup?: number
  selectOptions: OptionProps[]
}

export type LearningData = {
  id: number
  name: string
  updatedAt: string
  classroom: string
  classroomId: number
  subscription: string
  subscriptionId?: number
}

export type DataFilter = {
  search?: string
  subscription?: number
}
