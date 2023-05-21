export type BaseResponse = {
  pageable: Pageable
  last: boolean
  totalPages: number
  totalElements: number
  size: number
  number: number
  sort: Sort
  first: boolean
  numberOfElements: number
  empty: boolean
}

type Pageable = {
  sort: Sort
  offset: number
  pageNumber: number
  unpaged: boolean
  paged: boolean
}

type Sort = {
  sorted: boolean
  unsorted: boolean
  empty: boolean
}

export type ApiRequest = {
  pageNumber?: number
  pageSize?: number
  searchQuery?: string
  status?: string
  areaIds?: number // for getAssignments filters
  areaId?: number // for getSubscriptionApplications filters
  topicId?: number
  classroomId?: number
  general?: number
  userId?: string
  subscriptionId?: number
  applicationIds?: number
  startDate?: string
  endDate?: string

  applicationMeanAssignment?: number // for getMetricsDashboard
  areaMeanAssignment?: number
  applicationPercentage?: number
  areaPercentage?: number
  topicPercentage?: number
  organizationId?: number
  areaCompletion?: number
  applicationCompletion?: number
}

export type ApiRequestMember = ApiRequest & {
  role: string
}
