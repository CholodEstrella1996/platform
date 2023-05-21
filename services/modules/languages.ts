import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import { ResponseLanguage, Language } from 'services/models/languages.model'

import api from '../api.client'

const formatLanguages = async (languages: Language[]) => {
  const newLanguages = languages.map((item) => ({
    id: item.id,
    defaultLanguage: item.defaultLanguage,
    languageCode: item.languageCode.split('-')[0],
    name: item.name,
  }))
  return newLanguages
}

const languageService = {
  getLanguages: async () => {
    const { data } = await api.get<ResponseLanguage>(`${PLATFORM_URL_CLASSROOM}/languages`, {
      id: 'languageService.getLanguages',
    })

    return formatLanguages(data.content)
  },
}

export default languageService
