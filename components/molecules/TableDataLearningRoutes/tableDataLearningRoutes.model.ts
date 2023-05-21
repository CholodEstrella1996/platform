import { LearningData } from 'components/modules/LearningRoutes/learningRoutes.model'

export type TableDataLearningRoutesProps = {
  rows: LearningData[]
  deleteRoute: (id: number) => void
  activePage: number
  pageChange?: (newPage: number) => void
  totalElements: number
  pageSize: number
  isLoading: boolean
  idGroup?: number
}
