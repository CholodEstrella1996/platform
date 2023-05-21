import { FieldReference } from 'components/atoms/Select/select.models'
import { LaboratoryResponse } from 'services/models/applications.model'

type LaboratoriesProps = {
  laboratories: LaboratoryResponse
  onPageChange: (page: number) => Promise<void>
  isLoading: boolean
  fetchLaboratories: (pageNumber?: number) => Promise<void>
}

type DataFilter = {
  search?: string
  area?: number
  topic?: number
  subscription?: number
}

type SelectRef = FieldReference

export type { LaboratoriesProps, DataFilter, SelectRef }
