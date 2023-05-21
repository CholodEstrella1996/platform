import { LANDING_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { ResponseCookie } from 'services/models/cookie.model'

export const cookieService = {
  getDetailsCookies: async () => {
    const { data } = await api.get<ResponseCookie>(`${LANDING_SERVICE}/latest-cookies-policies`, {
      id: 'cookieService.getDetailsCookies',
    })

    return data.content
  },
}
