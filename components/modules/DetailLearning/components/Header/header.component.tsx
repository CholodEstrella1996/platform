import { Edit2Outline } from '@easy-eva-icons/react'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { GROUP_PERMISSIONS, LEARNING_UNIT_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { historyPath } from 'utils/helpers/historyPath'

import messages from '../../detailLearning.messages'

const { colors, mediaQueries } = theme

type Props = {
  title: string
}

const { detailFromLearning } = LEARNING_UNIT_PERMISSIONS
const {
  learning: { detailFromGroup },
} = GROUP_PERMISSIONS

const Header = ({ title }: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)

  const navigatePage = () => void router.push(`${history}/edit`)

  const { permissions } = useAppContext()
  const [updateFromGroupAuth] = [permissions[detailFromGroup.update]]
  const [updateFromLearningAuth] = [permissions[detailFromLearning.update]]

  return (
    <>
      <BreadCrumbs />
      <HeaderTitle title={title}>
        {(updateFromGroupAuth || updateFromLearningAuth) &&
          (isTablet ? (
            <Button variant="contained" size="medium" onClick={navigatePage}>
              {intl.formatMessage(messages.editButton, { isTablet })}
            </Button>
          ) : (
            <MoreMenu>
              <IconButton onClick={navigatePage} className="action__buttons">
                <Edit2Outline fontSize={24} color={colors.neutrals[400]} />
                <Typography variant="s1" color={colors.neutrals[400]}>
                  {intl.formatMessage(messages.editButton, { isTablet })}
                </Typography>
              </IconButton>
            </MoreMenu>
          ))}
      </HeaderTitle>
    </>
  )
}
export default Header
