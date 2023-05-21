import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { useMediaQuery } from 'hooks/use-media-query'
import { ProductUnits } from 'services/models/subscriptions'

import { productsStyles } from './products.styles'

type Props = {
  products: ProductUnits[]
}

const { colors, mediaQueries } = theme

export const Products = ({ products }: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <div className="product__container">
      {products.map(({ id, name, icon, type }) => {
        const image = icon ? icon.url : DEFAULT_ICON_IMG_PROPS.image
        return (
          <div className="cart__products__items" key={id}>
            <div className="item__info">
              <div className="item__info__avatar">
                <Image
                  src={image}
                  width="64"
                  height="64"
                  placeholder="blur"
                  alt={name || DEFAULT_ICON_IMG_PROPS.alt}
                  blurDataURL={DEFAULT_ICON_IMG_PROPS.image.blurDataURL}
                />
              </div>

              <div className="item__info__title">
                <Typography variant={isTablet ? 's2' : 'c2'} color={colors.neutrals[500]}>
                  <span className="info__title">{name}</span>
                </Typography>
                <Typography variant="c2" color={colors.neutrals[300]} className="capitalized">
                  {type}
                </Typography>
              </div>
            </div>
          </div>
        )
      })}

      <style jsx>{productsStyles}</style>
    </div>
  )
}
