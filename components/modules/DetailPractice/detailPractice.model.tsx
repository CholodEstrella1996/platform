import { Status } from 'services/models/client.model'

export type PracticeDetail = {
  avatar?: string
  name: string
  deliveryDate: string
  attempts: number
  status?: Status | null
  area: string
  laboratory: string
  feedback?: string | null
  scores: {
    simulator: number
    professor?: number
  }
}
