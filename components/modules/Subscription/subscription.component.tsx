import { useIntl } from 'react-intl'

import HeaderTitle from 'components/atoms/HeaderTitle'

import BillingHistory from './components/BillingHistory'
import DetailsComponent from './components/Details'
import ProductsComponent from './components/Products'
import messages from './subscription.messages'
import { SubscriptionProps } from './subscription.model'
import { SubscriptionStyles } from './subscription.styles'

export const SubscriptionComponent = ({ content }: SubscriptionProps) => {
  const { details, products, billing } = content
  const intl = useIntl()

  return (
    <div className="subscriptions">
      <HeaderTitle title={intl.formatMessage(messages.subscription.title)} />
      <div className="subscription__content">
        <DetailsComponent data={details} />
        <ProductsComponent data={products} />
        <BillingHistory data={billing} />
      </div>
      <style jsx>{SubscriptionStyles}</style>
    </div>
  )
}
