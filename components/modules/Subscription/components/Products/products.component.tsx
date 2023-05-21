import { Divider } from '@mui/material'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../subscription.messages'
import { Products } from '../../subscription.model'
import { SubscriptionStyles } from '../../subscription.styles'

const { colors, mediaQueries } = theme

type ProductsProp = {
  data: Products
}

export const ProductsComponent = ({ data }: ProductsProp) => {
  const { access, items } = data
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  return (
    <>
      <div className="subscription__card ">
        <Typography variant={isTablet ? 'h5' : 'h6'} color={colors.primary[500]}>
          {intl.formatMessage(messages.subscription.products.title)}
        </Typography>
        <div className="product__list">
          {items.length &&
            items.map((info) => (
              <div className="product__item" key={info.id}>
                <Typography variant="s2" color={colors.neutrals[500]}>
                  {info.title}
                </Typography>
                <Typography variant="c2" color={colors.neutrals[300]}>
                  <span className="capitalize">{info.type}</span>
                </Typography>
              </div>
            ))}
        </div>
        <Divider />
        <div className="product__access">
          <Typography variant="s2" color={colors.neutrals[500]}>
            {intl.formatMessage(messages.subscription.products.access)}
          </Typography>
          <Typography variant="s2" color={colors.neutrals[300]}>
            x{access}
          </Typography>
        </div>
      </div>
      <style jsx>{SubscriptionStyles}</style>
    </>
  )
}
