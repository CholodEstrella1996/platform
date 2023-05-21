import { Status } from './client.model'
import { BaseResponse } from './responseBase.model'

type AssignmentsResponse = BaseResponse & {
  content: Assignment[]
  filters: FilterProps['filters']
}

type Assignment = {
  id: number
  subscriptionCode: string
  applicationName: string
  studentName: string
  deliveryDate: string
  finalScore: string
  finalAverage: string
  status: Status
  productUnitId: number
  userId: string
}

// TODO Revisar el tipado con datos reales del back y si corresponde Renombrar. Se utiliza en detalle de una practica
type Result = {
  id: number
  attempts: number
  user: User
  applicationName: string
  status: Status
  deliveryDate: Date
  applicationScore: number
  teacherScore: number
  finalScore: number
  feedback: string
  areaName: string
  deliveryTime: string
  reportUrl: string
  productUnitId: number
}

type User = {
  id: string
  firstName: string
  surname: string
  avatarUrl: string
}

type FilterProps = {
  filters: Filter[]
}

type Filter = {
  id: number
  name: 'area' | 'status' | 'application' | 'user' | 'classroom' | 'subscription'
  content: FilterContent[]
}

type FilterContent = {
  id: number
  name: string
  displayName: string
  marked: boolean
}

type AssignmentBodyData = {
  productUnitId: number
  userId: string
}

export type { AssignmentsResponse, Assignment, Result, Filter, AssignmentBodyData }
