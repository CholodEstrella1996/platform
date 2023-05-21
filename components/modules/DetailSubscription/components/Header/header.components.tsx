import { Download, HelpOutline } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import MoreMenu from 'components/atoms/MoreMenu'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { MY_SUBSCRIPTION_PERMISSIONS } from 'constants/permissions'
import { LANDING_SUPPORT } from 'constants/platformPages'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../detailSubscription.messages'
import { DetailSubscriptionStyles } from '../../detailSubscription.styles'

const {
  detail: { download },
} = MY_SUBSCRIPTION_PERMISSIONS
const { colors, mediaQueries } = theme

type HeaderProps = {
  title: string
  onDownload: (state: boolean) => void
  isDownloading: boolean
  invoiceAvailable: boolean
  subscriptionType: string
}

export const HeaderComponent = ({
  title,
  onDownload,
  isDownloading,
  invoiceAvailable,
  subscriptionType,
}: HeaderProps) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const router = useRouter()
  const { permissions } = useAppContext()
  const [downloadAuth] = [permissions[download]]

  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }

  const handleDownload = () => {
    onDownload(true)
  }

  return (
    <>
      <div className="header">
        <div className="header__title">
          <Typography variant={isTablet ? 'h3' : 'h4'} color={colors.primary[500]}>
            {title}
          </Typography>
          <SubscriptionType type={subscriptionType} />
        </div>
        <div className="header__buttons">
          {isTablet ? (
            <>
              <Button
                variant="outlined"
                icon={<HelpOutline />}
                iconPosition="left"
                size="medium"
                onClick={() => void navigatePage(LANDING_SUPPORT)}>
                {intl.formatMessage(messages.detailSubscription.buttons.support)}
              </Button>

              {downloadAuth && invoiceAvailable && (
                <Button
                  variant="contained"
                  icon={<Download />}
                  iconPosition="left"
                  disabled={isDownloading}
                  loading={isDownloading}
                  size="medium"
                  onClick={() => void handleDownload()}>
                  {intl.formatMessage(messages.detailSubscription.buttons.download)}
                </Button>
              )}
            </>
          ) : (
            <MoreMenu>
              <IconButton
                onClick={() => void navigatePage(LANDING_SUPPORT)}
                className="action__buttons">
                <HelpOutline />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.detailSubscription.buttons.support)}
                </Typography>
              </IconButton>

              {downloadAuth && invoiceAvailable && (
                <IconButton
                  onClick={() => void handleDownload()}
                  className="action__buttons"
                  disabled={isDownloading}>
                  {isDownloading ? <CircularProgress size={20} /> : <Download />}
                  <Typography variant="s1" color={colors.neutrals[400]}>
                    {intl.formatMessage(messages.detailSubscription.buttons.download)}
                  </Typography>
                </IconButton>
              )}
            </MoreMenu>
          )}
        </div>
      </div>
      <style jsx>{DetailSubscriptionStyles}</style>
    </>
  )
}
