import { GroupAddOutlined as GroupIcon } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../group.messages'

type Props = {
  title: string
  selectOptions: OptionProps[]
  showSelect: boolean
}

const { create } = GROUP_PERMISSIONS
const { colors, mediaQueries } = theme

const Header = ({ title, selectOptions, showSelect }: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const { permissions } = useAppContext()

  const [createAuth] = [permissions[create]]

  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }

  return (
    <HeaderTitle title={title}>
      {isTablet ? (
        <>
          {showSelect && (
            <Select
              name="subscriptionId"
              className="subscription__select"
              label={intl.formatMessage(messages.select.label)}
              options={selectOptions}
              placeholder={intl.formatMessage(messages.select.placeholder)}
              isClearable
            />
          )}
          {createAuth && (
            <Button
              variant="contained"
              size="medium"
              icon={<GroupIcon fontSize="small" />}
              iconPosition="left"
              onClick={() => void navigatePage('/groups/new/')}>
              {intl.formatMessage(messages.button)}
            </Button>
          )}
        </>
      ) : (
        createAuth && (
          <MoreMenu>
            <IconButton
              onClick={() => void navigatePage('/groups/new/')}
              className="action__buttons">
              <GroupIcon fontSize="small" />
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.button)}
              </Typography>
            </IconButton>
          </MoreMenu>
        )
      )}
    </HeaderTitle>
  )
}
export default Header
