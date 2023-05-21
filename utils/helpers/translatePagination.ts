import { defaultLanguage } from './handleLanguage'

const locales: Record<string, string> = {
  en: 'of',
  es: 'de',
  pt: 'de',
  tr: '/',
}

export const translatePagination = (from: number, to: number, count: number) => {
  const currentLanguage = defaultLanguage()

  return `${from}-${to} ${locales[currentLanguage]} ${count}`
}
