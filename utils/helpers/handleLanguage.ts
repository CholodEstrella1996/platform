import Router from 'next/router'

import { Language } from 'services/models/languages.model'

const defaultLanguage = (language?: string) => {
  let currentLanguage = 'en'
  if (typeof window !== 'undefined') {
    currentLanguage =
      window.localStorage.getItem('languageCode') || window.navigator.language.split('-')[0]
    if (language) {
      window.localStorage.setItem('languageCode', language)
      if (currentLanguage !== language) Router.reload()
      currentLanguage = language
    }
  }
  return currentLanguage
}

const optionsLanguages = (listLanguage: Language[]) => {
  const result = listLanguage.map(({ id, name, languageCode }) => ({
    id,
    value: languageCode || '',
    label: name || '',
  }))
  return result
}

export { defaultLanguage, optionsLanguages }
