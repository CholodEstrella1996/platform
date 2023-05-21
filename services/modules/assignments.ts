import { AssignmentBody } from 'components/modules/Assignments/assignments.model'
import { AssignmentGradeBody } from 'components/molecules/EditAssignmentGrade/editAssignmentGrade.model'
import { LEARNING_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { AssignmentsResponse, Result } from 'services/models/assignments.model'
import { ApiRequest } from 'services/models/responseBase.model'
import { downloadBlob } from 'utils/helpers/downloadBlob'
import { queryParams } from 'utils/helpers/queryParams'

const assignmentService = {
  getAssignments: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<AssignmentsResponse>(
      `${LEARNING_SERVICE}/assignments?${queryParams(paramsRequest)}`,
    )
    return data
  },
  downloadAssignments: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get(
      `${LEARNING_SERVICE}/assignments?${queryParams(paramsRequest)}`,
      {
        id: 'memberService.downloadMembersList',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
        responseType: 'blob',
      },
    )
    const blob: Blob = data
    downloadBlob(blob, 'assignments', 'xlsx')
  },
  getAssignmentById: async (id: number) => {
    const { data } = await api.get<Result>(`${LEARNING_SERVICE}/assignments/${id}`)
    return data
  },
  restoreDeleteAssignment: async (body: AssignmentBody) =>
    api.put(`${LEARNING_SERVICE}/assignments/status`, body),
  updateGrade: async (body: AssignmentGradeBody) =>
    api.put(`${LEARNING_SERVICE}/assignments/corrections`, body),
}

export default assignmentService
