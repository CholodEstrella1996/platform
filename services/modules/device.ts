import { PLATFORM_URL_CUSTOMER } from 'constants/urls.constants'
import api from 'services/api.client'
import { ResponseDevice } from 'services/models/device.model'

const deviceService = {
  getDevices: async () => {
    const { data } = await api.get<ResponseDevice>(`${PLATFORM_URL_CUSTOMER}/installations`, {
      id: 'deviceService.getDevices',
    })
    return data.content
  },

  deleteDevice: async (id: number) => {
    await api.delete(`${PLATFORM_URL_CUSTOMER}/installations/${id}`, {
      id: 'deviceService.deleteDevice',
    })
  },
}

export default deviceService
