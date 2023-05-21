import { DownloadOutlined } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { LANDING_PAGE_URL } from 'constants/urls.constants'

import messages from '../../myDevices.messages'
import { MyDevicesStyles } from '../../myDevices.styles'

const { colors } = theme
export const ActivateDevicesComponent = () => {
  const router = useRouter()
  const intl = useIntl()
  const handleDownload = () => {
    void router.push(`${LANDING_PAGE_URL}/downloads`)
  }
  return (
    <>
      <div className="my-devices__activate">
        <Typography variant="s1" color={colors.neutrals[400]}>
          {intl.formatMessage(messages.myDevices.activate)}
        </Typography>
        <Button
          variant="contained"
          size="medium"
          icon={<DownloadOutlined />}
          onClick={() => void handleDownload()}>
          {intl.formatMessage(messages.myDevices.download)}
        </Button>
      </div>
      <style jsx>{MyDevicesStyles}</style>
    </>
  )
}
