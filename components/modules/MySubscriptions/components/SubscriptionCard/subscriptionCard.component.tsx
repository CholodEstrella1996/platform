import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import Chip from 'components/atoms/Chip'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { historyPath } from 'utils/helpers/historyPath'

import { SubscriptionCardStyles } from './subscriptionCard.styles'
import messages from '../../mySubscriptions.messages'
import { CardProps } from '../../mySubscriptions.model'

const { colors } = theme
export const SubscriptionCardComponent = ({ id, name, type, status }: CardProps) => {
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)
  const cardRoute = `${history}/detail-subscription/${id}/${name}`
  const navigatePage = async (link: string): Promise<void> => {
    await router.push(link)
  }
  const statusWithNoSpace = status.name.split(' ')[1] ?? status.name

  return (
    <>
      <div
        role="button"
        className="card__container"
        onClick={() => void navigatePage(cardRoute)}
        onKeyDown={() => void navigatePage(cardRoute)}
        tabIndex={0}>
        <div className="name__type">
          <SubscriptionType type={type} />
          <Typography variant="s1" color={colors.primary[500]} className="clamp">
            {intl.formatMessage(messages.name)}
          </Typography>
        </div>

        <Chip title={status.displayName} status={statusWithNoSpace} />
      </div>

      <style jsx>{SubscriptionCardStyles}</style>
    </>
  )
}
