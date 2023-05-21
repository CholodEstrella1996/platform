import { AssignmentBodyData } from 'services/models/assignments.model'

type EditAssignmentGradeProps = {
  productUnitId: number
  userId: string
  fetchAssignment: (pageNumber?: number) => Promise<void>
  isOpen: boolean
  onClose: () => void
  score?: number
  feedback?: string
  assignmentId?: number
}

type EditGradeComponentProps = {
  isOpen: boolean
  onSubmit: () => Promise<void>
  onClose: () => void
}

type GradeData = {
  teacherScore: number
  feedback?: string
}

type AssignmentGradeBody = AssignmentBodyData & GradeData

export type { EditAssignmentGradeProps, EditGradeComponentProps, GradeData, AssignmentGradeBody }
