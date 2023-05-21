import { LEARNING_SERVICE, PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import {
  ResponseLearning,
  DeleteUnit,
  LearningByIdResponse,
  AreaTreeResponse,
  CreateLearningRequest,
  CreateLearningResponse,
  UpdateLearningUnit,
  CopyLearningRequest,
} from 'services/models/learning.model'
import { ApiRequest } from 'services/models/responseBase.model'
import { queryParams } from 'utils/helpers/queryParams'

const learningService = {
  getLearningUnits: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<ResponseLearning>(
      `${LEARNING_SERVICE}/organizations/learning-units?${queryParams(paramsRequest)}`,
      { id: 'learningService.getLearningUnits' },
    )
    return data
  },

  getLearningUnitsFromGroup: async (id: number) => {
    const { data } = await api.get<ResponseLearning>(
      `${LEARNING_SERVICE}/classrooms/${id}/learning-units`,
      { id: 'learningService.getLearningUnitsFromGroup' },
    )

    return data
  },

  getLearningUnitsById: async (unitId: number) => {
    const { data } = await api.get<LearningByIdResponse>(
      `${LEARNING_SERVICE}/learning-units/${unitId}`,
      {
        id: 'learningService.getLearningUnitsById',
      },
    )

    return data
  },

  // TODO; replace with proper api call
  deleteUnit: async (unitId: number) =>
    api.delete<DeleteUnit>(`${LEARNING_SERVICE}/learning-units/${unitId}`, {
      id: 'learningService.deleteUnit',
    }),

  getAreasTree: async (subscriptionId: number, searchQuery?: string) => {
    const baseUrl = `/subscription/active-subscription/areas/tree?subscriptionId=${subscriptionId}`
    const query = searchQuery ? `&searchQuery=${searchQuery}` : ''

    const { data } = await api.get<AreaTreeResponse>(
      `${PLATFORM_URL_CLASSROOM}${baseUrl}${query}`,
      { id: 'learningService.getAreasTree' },
    )

    return data
  },

  createLearningUnit: async (body: CreateLearningRequest, id: string) => {
    const { data } = await api.post<CreateLearningResponse>(
      `${LEARNING_SERVICE}/classrooms/${id}/learning-units`,
      body,
      { id: 'learningService.createLearningUnit' },
    )

    return data
  },

  updateLearningUnit: async (body: UpdateLearningUnit, unitId: number) => {
    const { data } = await api.put<CreateLearningResponse>(
      `${LEARNING_SERVICE}/learning-units/${unitId}`,
      body,
      { id: 'learningService.updateLearningUnit' },
    )

    return data
  },

  copyLearningUnit: async (body: CopyLearningRequest, id: number) => {
    const { data } = await api.post<CreateLearningResponse>(
      `${LEARNING_SERVICE}/learning-units/${id}/copy`,
      body,
      { id: 'learningService.copyLearningUnit' },
    )

    return data
  },
}

export default learningService
