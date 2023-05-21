import { PRODUCT_SERVICE, PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api, { apiHtml } from 'services/api.client'
import {
  LaboratoryById,
  LaboratoryResponse,
  PedagogicalMaterial,
} from 'services/models/applications.model'
import { ApiRequest } from 'services/models/responseBase.model'
import { isUrl } from 'utils/helpers/edit-content'
import { queryParams } from 'utils/helpers/queryParams'

const applicationService = {
  getApplications: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<LaboratoryResponse>(
      `${PLATFORM_URL_CLASSROOM}/subscription/active-subscription/applications?${queryParams(
        paramsRequest,
      )}`,
      { id: 'applicationService.getApplications' },
    )

    return data
  },
  getMySubscriptionsApplications: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<LaboratoryResponse>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/applications?${queryParams(
        paramsRequest,
      )}`,
      { id: 'applicationService.getMySubscriptionsApplications' },
    )

    return data
  },

  getApplicationById: async (id: number, paramsRequest: ApiRequest) => {
    const { data } = await api.get<LaboratoryById>(
      `${PRODUCT_SERVICE}/applications/${id}?${queryParams(paramsRequest)}`,
      {
        id: 'applicationService.getApplicationById',
      },
    )

    return data
  },
  getApplicationResource: async (id: number) => {
    const { data } = await api.get<LaboratoryById>(
      `${PRODUCT_SERVICE}/applications/${id}/learning-session`,
      { id: 'applicationService.getApplicationResource' },
    )

    return data
  },
  getProcedureHtmlFromUrl: async (procedure: PedagogicalMaterial) => {
    const url = procedure?.content?.url || ''
    if (!isUrl(url)) return ''

    const { data } = await apiHtml.get<Document>(url)
    return data?.body?.innerHTML || ''
  },
}

export default applicationService
