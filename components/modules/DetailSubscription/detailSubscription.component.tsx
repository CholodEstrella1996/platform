import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import Chip from 'components/atoms/Chip'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { TIME_ZONE_UTC } from 'constants/timeZone'

import Header from './components/Header'
import { Products } from './components/products/products.component'
import messages from './detailSubscription.messages'
import { DetailSubscriptionData } from './detailSubscription.model'
import { DetailSubscriptionStyles } from './detailSubscription.styles'

const { colors } = theme

export const DetailSubscriptionComponent = ({
  content,
  isDownloading,
  onDownload,
}: DetailSubscriptionData) => {
  const {
    code,
    productUnitsCount,
    endDate,
    allowedAccess,
    status,
    productUnits,
    invoiceAvailable,
    kind,
  } = content
  const isPlural = productUnitsCount !== 1
  const intl = useIntl()
  const handleDownload = (state: boolean) => {
    onDownload(state)
  }

  return (
    <div className="detail-subscription">
      <BreadCrumbs />
      <Header
        title={`${intl.formatMessage(messages.detailSubscription.name)}`}
        isDownloading={isDownloading}
        onDownload={(state: boolean) => handleDownload(state)}
        invoiceAvailable={invoiceAvailable}
        subscriptionType={code}
      />

      <div className="suscription__content">
        <div className="subscription__details">
          <div className="subscription__header">
            <Typography variant="h6" color={colors.primary[500]}>
              {intl.formatMessage(messages.detailSubscription.title)}
            </Typography>
          </div>
          <ul className="access__info">
            <li>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.detailSubscription.access.status)}
              </Typography>
              <Chip title={status.displayName} status={status.name} />
            </li>
            <li>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.detailSubscription.access.type)}
              </Typography>
              <Chip title={kind.displayName} status="invited" />
            </li>

            <li>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.detailSubscription.access.date)}
              </Typography>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {intl.formatDate(endDate, { timeZone: TIME_ZONE_UTC })}
              </Typography>
            </li>
            <li>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.detailSubscription.access.included)}
              </Typography>
              <Typography variant="s2" color={colors.neutrals[400]}>
                {allowedAccess ?? '-'}
              </Typography>
            </li>
          </ul>
        </div>

        <div className="products__details">
          <div className="details__title">
            <Typography variant="h6" color={colors.primary[500]}>
              {intl.formatMessage(messages.detailSubscription.products.title)}
            </Typography>
            <Typography variant="p1" color={colors.neutrals[300]}>
              ({productUnitsCount}
              {intl.formatMessage(messages.detailSubscription.products.quantity, { isPlural })})
            </Typography>
          </div>
          <Products products={productUnits} />
        </div>
      </div>
      <style jsx>{DetailSubscriptionStyles}</style>
    </div>
  )
}
