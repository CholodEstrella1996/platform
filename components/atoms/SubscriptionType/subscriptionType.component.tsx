import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { SubscriptionTypeStyles } from './subscriptionType.styles'

type Prop = {
  type: string
}
const { colors } = theme
export const SubscriptionType = ({ type }: Prop) => (
  <>
    <div className="subscription-type">
      <Typography variant="s2" color={colors.neutrals.white}>
        {type}
      </Typography>
    </div>
    <style jsx>{SubscriptionTypeStyles}</style>
  </>
)
