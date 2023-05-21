import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { ApiRequest } from 'services/models/responseBase.model'
import { queryParams } from 'utils/helpers/queryParams'

import { AreasResponse } from '../models/area.model'

const areaService = {
  getAreas: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<AreasResponse>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/areas?${queryParams(paramsRequest)}`,
      {
        id: 'areaService.getAreas',
      },
    )

    return data.content
  },
}

export default areaService
