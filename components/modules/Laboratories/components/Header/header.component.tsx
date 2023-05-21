import { AwardOutline } from '@easy-eva-icons/react'
import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Input from 'components/atoms/CustomInput/'
import { InputProps } from 'components/atoms/CustomInput/customInput.model'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../laboratories.messages'
import { LaboratoriesLocalStyles } from '../../laboratories.styles'

type Prop = {
  title: string
}

const { assignments } = LABORATORIES_PERMISSIONS

const { colors, mediaQueries } = theme
export const HeaderComponent = ({ title }: Prop) => {
  const intl = useIntl()
  const router = useRouter()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const { permissions } = useAppContext()
  const [assignmentViewAuth] = [permissions[assignments.view]]

  const dataInput: InputProps = {
    name: 'search',
    label: '',
    placeholder: intl.formatMessage(messages.header.search),
    isClearable: true,
    size: 'small',
    icon: <Search />,
    iconPosition: 'left',
  }

  const handleRouting = () => void router.push(`/laboratories/assignments`)

  return (
    <>
      <div className="laboratories__header">
        <HeaderTitle title={title}>
          {assignmentViewAuth && (
            <div className="laboratories__header__right">
              {isTablet ? (
                <>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleRouting}
                    className="grading__button">
                    {intl.formatMessage(messages.header.button)}
                  </Button>
                  <Input className="filter__input" {...dataInput} />
                </>
              ) : (
                <MoreMenu>
                  <IconButton className="action__buttons" onClick={handleRouting}>
                    <AwardOutline color={colors.neutrals[400]} />
                    <Typography variant="s1" color={colors.neutrals[400]}>
                      {intl.formatMessage(messages.header.button)}
                    </Typography>
                  </IconButton>
                </MoreMenu>
              )}
            </div>
          )}
        </HeaderTitle>
        {!isTablet && <Input className="filter__input" {...dataInput} />}
      </div>

      <style jsx>{LaboratoriesLocalStyles}</style>
    </>
  )
}
