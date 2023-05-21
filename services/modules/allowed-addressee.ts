import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { AddresseesResponse } from 'services/models/allowed-addressee'

const allowedAddresseeService = {
  getAddressees: async () => {
    const { data } = await api.get<AddresseesResponse>(
      `${PLATFORM_URL_CLASSROOM}/allowed-announcement-addressees`,
      { id: 'allowedAddresseeService.getAddressees' },
    )
    return data.content
  },
}

export default allowedAddresseeService
