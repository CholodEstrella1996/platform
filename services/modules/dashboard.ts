import { USER_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { DashboardResponse } from 'services/models/dashboard.model'
import { ApiRequest } from 'services/models/responseBase.model'
import { queryParams } from 'utils/helpers/queryParams'

const dashboardService = {
  getDashboardMetrics: async (paramsRequest?: ApiRequest) => {
    const params = paramsRequest ? `?${queryParams(paramsRequest)}` : ''
    const { data } = await api.get<DashboardResponse>(
      `${USER_SERVICE}/metrics-dashboard${params}`,
      {
        id: 'dashboardService.getDashboardMetrics',
      },
    )

    return data
  },
}

export default dashboardService
