import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../subscription.messages'
import { Details } from '../../subscription.model'
import { SubscriptionStyles } from '../../subscription.styles'

const { colors, mediaQueries } = theme

type DetailsProp = {
  data: Details
}

export const DetailsComponent = ({ data }: DetailsProp) => {
  const { expiration, mount, payment, period, state } = data
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return (
    <>
      <div className="subscription__card">
        <Typography variant={isTablet ? 'h5' : 'h6'} color={colors.primary[500]}>
          {intl.formatMessage(messages.subscription.details.title)}
        </Typography>
        <ul className="details__list">
          <li className="details__item">
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.subscription.details.state)}
            </Typography>
            <div className={`pill pill--${state === 'active' ? 'active' : 'inactive'}`}>
              {state}
            </div>
          </li>
          <li className="details__item">
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.subscription.details.mount)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[500]}>
              USD {mount} /{period}
            </Typography>
          </li>
          <li className="details__item">
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.subscription.details.payment)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[500]}>
              {payment}
            </Typography>
          </li>
          <li className="details__item">
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.subscription.details.expiration)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[500]}>
              {intl.formatDate(expiration, {
                day: 'numeric',
                year: 'numeric',
                month: 'long',
                timeZone: TIME_ZONE_UTC,
              })}
            </Typography>
          </li>
        </ul>
      </div>
      <style jsx>{SubscriptionStyles}</style>
    </>
  )
}
