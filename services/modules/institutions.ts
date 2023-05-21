import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { InstitutionsResponse } from 'services/models/institutions.model'

const institutionsService = {
  getInstitutions: async (pageSize: number, pageNumber: number) => {
    const { data } = await api.get<InstitutionsResponse>(
      `${PLATFORM_URL_CLASSROOM}/my-organizations?pageSize=${pageSize}&pageNumber=${pageNumber}`,
    )
    return data
  },
}

export default institutionsService
