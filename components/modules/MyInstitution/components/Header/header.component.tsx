import SmsIcon from '@mui/icons-material/SmsOutlined'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../myInstitution.messages'

type Props = {
  title: string
}

const {
  institutionAnnouncement: { view },
} = MY_INSTITUTION_PERMISSIONS

const { colors, mediaQueries } = theme

const Header = ({ title }: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }
  const { permissions } = useAppContext()
  const [announcementAuth] = [permissions[view]]

  const buttonAnnouncement = isTablet ? (
    <Button
      variant="contained"
      size="medium"
      icon={<SmsIcon fontSize="small" />}
      iconPosition="left"
      onClick={() => void navigatePage(`/my-institution/announcement`)}>
      {intl.formatMessage(messages.header.button)}
    </Button>
  ) : (
    <MoreMenu>
      <IconButton
        onClick={() => void navigatePage('/my-institution/announcement')}
        className="action__buttons">
        <SmsIcon fontSize="small" />
        <Typography variant="s1" color={colors.neutrals[400]}>
          {intl.formatMessage(messages.header.button)}
        </Typography>
      </IconButton>
    </MoreMenu>
  )
  return <HeaderTitle title={title}>{announcementAuth && buttonAnnouncement}</HeaderTitle>
}

export default Header
