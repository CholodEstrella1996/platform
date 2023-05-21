import { USER_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { TermsAndConditions } from 'services/models/terms-conditions'

const termsAndConditionsService = {
  getTermsAndConditions: async () => {
    const { data } = await api.get<TermsAndConditions>(`${USER_SERVICE}/terms-and-conditions`, {
      id: 'termsAndConditionsService.getTermsAndConditions',
    })

    return data
  },
}

export default termsAndConditionsService
