import Image from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'
import { useMediaQuery } from 'hooks/use-media-query'

import { ErrorProps } from './errorCard.model'
import { ErrorCardStyles } from './errorCard.styles'

const { colors, mediaQueries } = theme
export const ErrorCardComponent = ({ image, title, description, children }: ErrorProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return (
    <>
      <div className="error-card">
        <div className="error-card__image">
          <Image
            src={image ?? DEFAULT_ICON_IMG_PROPS.image}
            alt={DEFAULT_ICON_IMG_PROPS.alt}
            width={500}
            height={500}
          />
        </div>
        <div className="error-card__content">
          <Typography variant={isTablet ? 'h1' : 'h3'} color={colors.primary[500]}>
            {title}
          </Typography>
          <Typography variant={isTablet ? 'h5' : 'h6'} color={colors.neutrals[400]}>
            {description}
          </Typography>
          {children && children}
        </div>
      </div>
      <style jsx>{ErrorCardStyles}</style>
    </>
  )
}
