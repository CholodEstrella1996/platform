import type { IncomingMessage } from 'http'

import { useEffect, useState } from 'react'

import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak-fork/ssr'
import cookie from 'cookie'
import type { AppProps, AppContext } from 'next/app'
import Head from 'next/head'
import Router from 'next/router'
import { SnackbarProvider } from 'notistack'
import { ErrorBoundary } from 'react-error-boundary'

import Spinner from 'components/atoms/Spinner'
import { ThemeProvider } from 'components/atoms/ThemeProvider'
import DefaultLayout from 'components/molecules/DefaultLayout'
import { ErrorFallback } from 'components/molecules/ErrorFallback'
import keycloakCfg from 'constants/keycloak.config'
import { ContextProvider } from 'context/appContext'
import { DataTableStyles } from 'styles/dataTable'
import { GlobalStyles } from 'styles/globals'

interface InitialProps {
  cookies: unknown
}

const initOptions = {
  onLoad: 'login-required',
}

function MyApp({ Component, pageProps, cookies }: AppProps & InitialProps) {
  const [showChild, setShowChild] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const start = () => setIsLoading(true)
  const complete = () => setIsLoading(false)

  useEffect(() => {
    setShowChild(true)

    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', complete)
    Router.events.on('routeChangeError', complete)

    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', complete)
      Router.events.off('routeChangeError', complete)
    }
  }, [])

  if (!showChild || typeof window === 'undefined') return null
  return (
    <>
      <Head>
        <title>CloudLabs</title>
      </Head>
      <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}
        initOptions={initOptions}
        autoRefreshToken
        LoadingComponent={<Spinner />}>
        <ContextProvider>
          <ThemeProvider>
            <SnackbarProvider
              maxSnack={1}
              hideIconVariant
              anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
              <DefaultLayout>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Component {...pageProps} />
                  </ErrorBoundary>
                )}
              </DefaultLayout>
            </SnackbarProvider>
          </ThemeProvider>
        </ContextProvider>
      </SSRKeycloakProvider>
      <style jsx>{DataTableStyles}</style>
      <style jsx global>
        {GlobalStyles}
      </style>
    </>
  )
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

MyApp.getInitialProps = async (context: AppContext) => ({
  cookies: parseCookies(context?.ctx?.req),
})

export default MyApp
