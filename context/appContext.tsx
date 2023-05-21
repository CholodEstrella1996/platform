import { createContext, useCallback, useContext, useLayoutEffect, useMemo, useState } from 'react'

import { useKeycloak } from '@react-keycloak-fork/ssr'
import { IntlProvider } from 'react-intl'

import { ALL_PERMISSIONS } from 'constants/permissions'
import api from 'services/api.client'
import userService from 'services/modules/user'
import messages from 'translations'
import { defaultLanguage } from 'utils/helpers/handleLanguage'

import { ContextProps } from './context.model'

type Props = {
  children: React.ReactNode
}
const defaultValues: ContextProps = {
  language: defaultLanguage() as ContextProps['language'],
  user: null,
  updateLanguage: () => {},
  updateUser: () => {},
  permissions: {},
  profile: '',
}

const AppContext = createContext(defaultValues)

export function ContextProvider({ children }: Props) {
  const { keycloak } = useKeycloak()
  const [appState, setAppState] = useState<ContextProps>(defaultValues)

  const updateLanguage = (language: ContextProps['language']) => {
    setAppState((prevState) => ({ ...prevState, language }))
  }

  const updateUser = (user: ContextProps['user']) => {
    setAppState((prevState) => ({ ...prevState, user }))
  }

  const setInterceptor = useCallback(() => {
    api.interceptors.request.use(
      (req) => {
        if (keycloak && req.headers) {
          req.headers.Authorization = `Bearer ${String(keycloak.token)}`
        }
        return req
      },
      (error) => Promise.reject(error),
    )
  }, [])

  const setUser = useCallback(async () => {
    try {
      const [user, permissions] = await Promise.all([
        userService.getUser(),
        userService.evaluatePermissions(ALL_PERMISSIONS),
      ])
      const profile = user.role?.find((role) => role)?.name
      setAppState({ ...appState, user, permissions, ...(profile && { profile }) })
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Context err :>> ', err)
      if (keycloak) window.location.href = keycloak.createLogoutUrl()
    }
  }, [])

  useLayoutEffect(() => {
    setInterceptor()
    void setUser()
  }, [setUser, setInterceptor])

  const contextValue = useMemo(() => ({ ...appState, updateLanguage, updateUser }), [appState])
  if (!appState.user) return null
  return (
    <AppContext.Provider value={contextValue}>
      <IntlProvider locale={contextValue.language} messages={messages[contextValue.language]}>
        {children}
      </IntlProvider>
    </AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}
