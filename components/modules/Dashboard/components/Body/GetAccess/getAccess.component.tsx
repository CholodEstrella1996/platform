import { CircularProgress } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { STORE_PAGE_URL } from 'constants/urls.constants'
import { useMediaQuery } from 'hooks/use-media-query'

import { DateAccess } from './getAccess.model'
import { GetAccessStyles } from './getAccess.style'
import messages from '../../../dashboard.messages'

const { colors, mediaQueries } = theme
type Props = {
  isLoading: boolean
  endDateOfAccess?: DateAccess
}

export const GetAccessComponent = ({ endDateOfAccess, isLoading }: Props) => {
  const intl = useIntl()
  const router = useRouter()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  const handleExplore = () => {
    void router.push(`${STORE_PAGE_URL}/explore-labs`)
  }
  const accessButton = (
    <Button
      variant="outlined"
      size={isTablet ? 'large' : 'medium'}
      onClick={handleExplore}
      fullWidth={!isTablet}>
      {intl.formatMessage(messages.getAccess.button)}
    </Button>
  )

  return (
    <>
      <div className="getAccess__container ">
        <div className="getAccess__description">
          <div className="getAccess__description__header">
            <Typography variant={isTablet ? 'h1' : 'h3'} color={colors.primary[500]}>
              {intl.formatMessage(messages.getAccess.title)}
            </Typography>
            <Typography variant={isTablet ? 'h6' : 's1'} color={colors.primary[500]}>
              {intl.formatMessage(messages.getAccess.description)}
            </Typography>
          </div>

          {isTablet && accessButton}
        </div>
        {isLoading ? (
          <div className="getAccess__clock">
            <Typography variant="c1" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.getAccess.date.title)}
            </Typography>
            <div className="getAccess__clock__time">
              <div className="time">
                <Typography variant="h3" color={colors.primary[900]} weight="bold">
                  {String(endDateOfAccess?.day ?? 0).padStart(2, '0')}
                </Typography>
                <Typography variant="c1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.getAccess.date.day)}
                </Typography>
              </div>
              <div className="time__divider">
                <Typography variant="h4" color={colors.primary[900]} weight="bold">
                  :
                </Typography>
              </div>
              <div className="time">
                <Typography variant="h3" color={colors.primary[900]} weight="bold">
                  {String(endDateOfAccess?.hour ?? 0).padStart(2, '0')}
                </Typography>
                <Typography variant="c1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.getAccess.date.hour)}
                </Typography>
              </div>
              <div className="time__divider">
                <Typography variant="h4" color={colors.primary[900]} weight="bold">
                  :
                </Typography>
              </div>
              <div className="time">
                <Typography variant="h3" color={colors.primary[900]} weight="bold">
                  {String(endDateOfAccess?.minute ?? 0).padStart(2, '0')}
                </Typography>
                <Typography variant="c1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.getAccess.date.minute)}
                </Typography>
              </div>
            </div>
          </div>
        ) : (
          <div className="getAccess__loading">
            <CircularProgress size={30} />
          </div>
        )}
        {!isTablet && accessButton}
      </div>
      <style jsx>{GetAccessStyles}</style>
    </>
  )
}
