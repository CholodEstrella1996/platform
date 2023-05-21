import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { MySubscriptionsResponse, Subscription, Subscriptions } from 'services/models/subscriptions'
import { downloadBlob } from 'utils/helpers/downloadBlob'

const subscriptionService = {
  getSubscriptions: async (organizationId?: number) => {
    const params = organizationId ? `?organizationId=${organizationId}` : ''
    const { data } = await api.get<Subscriptions>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-organization/subscriptions${params}`,
      { id: 'subscriptionService.getSubscriptions' },
    )
    return data.content
  },
  getSubscriptionsProductUnits: async () => {
    const { data } = await api.get<Subscriptions>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/product-units`,
    )
    return data.content
  },
  getMySubscriptions: async () => {
    const { data } = await api.get<MySubscriptionsResponse>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions`,
    )
    return data.content
  },

  getMySubscriptionById: async (id: number) => {
    const { data } = await api.get<Subscription>(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/${id}`,
      { id: 'subscriptionService.getMySubscriptionById' },
    )
    return data
  },

  downloadInvoice: async (id: number) => {
    const { data } = await api.get(
      `${PLATFORM_URL_CLASSROOM}/subscription/my-subscriptions/${id}/invoice`,
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/pdf',
        },
        responseType: 'blob',
      },
    )
    const blob: Blob = data
    downloadBlob(blob, 'invoice', 'pdf')
  },
}

export default subscriptionService
