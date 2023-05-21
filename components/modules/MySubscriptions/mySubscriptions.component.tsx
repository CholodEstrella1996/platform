import { HelpOutline } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Dialog from 'components/atoms/Dialog'
import HeaderTitle from 'components/atoms/HeaderTitle'
import { theme } from 'components/atoms/ThemeProvider'
import { LANDING_SUPPORT } from 'constants/platformPages'
import { useMediaQuery } from 'hooks/use-media-query'

import SubscriptionCard from './components/SubscriptionCard'
import messages from './mySubscriptions.messages'
import { SubscriptionProps } from './mySubscriptions.model'
import { MySubscriptionsStyles } from './mySubscriptions.styles'

const { mediaQueries } = theme
export const MySubscriptionsComponent = ({ subscriptions }: SubscriptionProps) => {
  const intl = useIntl()
  const router = useRouter()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <div>
        <HeaderTitle title={intl.formatMessage(messages.title)}>
          <Button
            variant="outlined"
            icon={<HelpOutline />}
            iconPosition="left"
            size={isTablet ? 'medium' : 'small'}
            onClick={() => void router.push(LANDING_SUPPORT)}>
            {intl.formatMessage(messages.button)}
          </Button>
        </HeaderTitle>
        {subscriptions.length ? (
          <section className="subscriptions__container">
            {subscriptions.map(({ id, name, code, status }) => (
              <SubscriptionCard name={name} type={code} status={status} key={id} id={id} />
            ))}
          </section>
        ) : (
          <Dialog message={intl.formatMessage(messages.emptySubscriptions)} />
        )}
      </div>
      <style jsx>{MySubscriptionsStyles}</style>
    </>
  )
}
