import { useEffect } from 'react'

import { ErrorOutline } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { FallbackProps } from 'react-error-boundary'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import messages from './errorFallback.messages'
import { errorFallbackLocalStyles } from './errorFallback.styles'

export const ErrorFallbackComponent = ({ error }: FallbackProps) => {
  const router = useRouter()
  const intl = useIntl()

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error('', error)
  }, [error])

  return (
    <div role="alert" className="error-fallback__container">
      <div className="error-fallback__content">
        <div className="error-fallback__icon">
          <ErrorOutline fontSize="inherit" />
        </div>

        <div className="error-fallback__caption">
          <Typography variant="h1" color={theme.colors.neutrals[500]}>
            {intl.formatMessage(messages.errorFallback.title)}
          </Typography>

          <Typography variant="s1" color={theme.colors.neutrals[300]}>
            {intl.formatMessage(messages.errorFallback.description)}
          </Typography>
        </div>

        <Button variant="contained" size="large" onClick={() => void router.push('/')}>
          {intl.formatMessage(messages.errorFallback.button)}
        </Button>
      </div>

      <style jsx>{errorFallbackLocalStyles}</style>
    </div>
  )
}
