import Image from 'next/image'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_NOT_ALLOWED_IMG_PROPS } from 'constants/defaultStaticImages'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './notAllowed.messages'
import { NotAllowedLocaleStyles } from './notAllowed.styles'

const { mediaQueries, colors } = theme
const { image, alt } = DEFAULT_NOT_ALLOWED_IMG_PROPS

export const NotAllowedComponent = () => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  return (
    <>
      <div className="notAllowed__container">
        <div className="notAllowed__container__image">
          <Image
            src={image}
            alt={alt}
            width={512}
            height={512}
            placeholder="blur"
            blurDataURL={image.blurDataURL}
            layout="responsive"
          />
        </div>
        <div className="notAllowed__container__content">
          <Typography variant={isTablet ? 'h1' : 'h5'} color={colors.primary[500]}>
            {intl.formatMessage(messages.title)}
          </Typography>
        </div>
      </div>
      <style jsx>{NotAllowedLocaleStyles}</style>
    </>
  )
}
