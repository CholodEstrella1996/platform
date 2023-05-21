import { LANDING_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { ResponseBoarding } from 'services/models/boarding.model'

const boardingService = {
  getBoardingCards: async () => {
    const { data } = await api.get<ResponseBoarding>(`${LANDING_SERVICE}/onboarding-cards`, {
      id: 'boardingService.getBoardingCards',
    })

    return data.content
  },
}

export default boardingService
