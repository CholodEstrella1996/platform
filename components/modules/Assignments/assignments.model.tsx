import { FieldReference } from 'components/atoms/Select/select.models'
import { AssignmentBodyData, AssignmentsResponse } from 'services/models/assignments.model'

type AssignmentsProps = AssignmentsBaseProps & {
  isDownloading: boolean
  handleDownload: () => Promise<void>
}

type AssignmentsBaseProps = {
  assignments: AssignmentsResponse
  onPageChange: (newPage: number) => void
  isLoading: boolean
  handleAssignments: (id: number, user: string, action: Actions) => Promise<void>
  fetchAssignments: (pageNumber?: number) => Promise<void>
}

type Actions = 'retry' | 'unsubmitted'

type DataFilter = {
  subscription?: number
  classroom?: number
  area?: number
  application?: number
  status?: string
  date?: [Date, Date]
  user?: string
}

type SelectReference = FieldReference

type AssignmentBody = AssignmentBodyData & {
  status: Actions
}

export type {
  AssignmentsProps,
  AssignmentsBaseProps,
  Actions,
  DataFilter,
  AssignmentBody,
  SelectReference,
}
