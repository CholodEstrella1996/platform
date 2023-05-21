import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAppContext } from 'context/appContext'

import Cards from './Cards'
import Filters from './Filters'
import messages from '../../dashboard.messages'
import { DashboardStyles } from '../../dashboard.styles'

const { colors } = theme

export const HeaderComponent = () => {
  const intl = useIntl()
  const { user } = useAppContext()
  return (
    <>
      <div className="header__container">
        <div className="header__welcome-filters">
          <div className="header__welcome">
            <Typography variant="h2" color={colors.neutrals[500]}>
              {intl.formatMessage(messages.welcome.title, { name: user?.firstName })} &#128075;
            </Typography>
            <Typography variant="s1" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.welcome.subtitle)}
            </Typography>
          </div>
          <Filters />
        </div>
        <Cards />
      </div>
      <style jsx>{DashboardStyles}</style>
    </>
  )
}
