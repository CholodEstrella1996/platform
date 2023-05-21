import { ApiRequest, BaseResponse } from './responseBase.model'

export type ResponseLearning = BaseResponse & {
  content: Learning[]
}

export type Learning = {
  id: number
  name: string
  updatedAt: Date
  subscription: Subscription
  classroom: Classroom
}

type Classroom = {
  id: number
  name: string
  description: string
  subscription: Subscription
}

type Subscription = {
  id: number
  code: string
}

export type DeleteUnit = {
  id: number
  name: string
  description: string
}

export type LearningByIdResponse = {
  id: number
  name: string
  classroomId: number
  description: string
  items: Items[]
  kind: NameDisplay
  updatedAt: string
  subscriptionId: number
}

export type Items = {
  id: number
  name: string
  order: number
  productUnit: ProductUnit
}

type ProductUnit = {
  id: number
  name: string
  description: string
  productUnitId: number
  classroomCode: string
  iconUrl: string
  type: {
    id: number
    name: string
  }
}

type NameDisplay = {
  id: number
  name: string
  displayName: string
}

export type AreaTreeRequest = Pick<ApiRequest, 'searchQuery'>

export type AreaTreeResponse = {
  label: string
  content: AreaTreeContent[]
}

export type CreateLearningRequest = {
  name: string
  description: string
  productUnits: { productUnitId: number; order: number }[]
}

export type CreateLearningResponse = {
  id: number
  name: string
  description: string
  classroomId: number
}

type AreaTreeContent = {
  id: number
  name: string
  key: string
  marked?: boolean
  iconUrl?: string
  type?: { id: number; name: string }
  contents?: AreaTreeContent[]
}

export type UpdateLearningUnit = CreateLearningRequest & {
  classroomId: number
}

export type CopyLearningRequest = Pick<UpdateLearningUnit, 'name' | 'classroomId'>
