import { User } from 'services/models/user.model'

export type ContextProps = {
  user: User | null
  permissions: {
    [key: string]: boolean
  }
  language: Language
  updateLanguage?: (language: Language) => void
  updateUser?: (user: User) => void
  profile: string
}

export type Language = 'es' | 'en' | 'pt' | 'tr'
