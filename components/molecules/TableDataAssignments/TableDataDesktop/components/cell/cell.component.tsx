import { GridCellParams } from '@mui/x-data-grid'
import { useIntl } from 'react-intl'

import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { Assignment } from 'services/models/assignments.model'

type Props = {
  type: 'subscription' | 'finalAverage' | 'deliveryDate'
  item: GridCellParams
}

const { colors } = theme
const UNSUBMITTED_STATUS = 'unsubmitted'

export const Cell = ({ type, item }: Props) => {
  const intl = useIntl()
  const row = item.row as Assignment
  const canShowValue = row.status.name !== UNSUBMITTED_STATUS
  const finalAverage = canShowValue && type === 'finalAverage' && row.finalAverage
  const deliveryDate =
    canShowValue &&
    type === 'deliveryDate' &&
    intl.formatDate(row.deliveryDate, {
      timeZone: TIME_ZONE_UTC,
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    })
  const textValue = finalAverage || deliveryDate
  if (type === 'subscription') return <SubscriptionType type={row.subscriptionCode} />

  return (
    <Typography variant="s2" color={colors.neutrals[400]}>
      {textValue || '-'}
    </Typography>
  )
}
