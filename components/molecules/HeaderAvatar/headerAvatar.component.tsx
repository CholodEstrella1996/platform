import Image from 'next/image'
import router from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Chip from 'components/atoms/Chip'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_BRAND_IMG_PROPS } from 'constants/defaultStaticImages'
import { LABORATORIES_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './headerAvatar.messages'
import { HeaderAvatarLocalStyles, HeaderAvatarGlobalStyles } from './headerAvatar.styles'

type Props = {
  id: number
  name: string
  title: string
  avatarUrl: string
  bgColor?: string
  buttonText: string
  price?: number
  isLearningUnit?: boolean
}

const { detail } = LABORATORIES_PERMISSIONS

const { colors, mediaQueries } = theme

const HeaderAvatarComponent = ({
  id,
  name,
  title,
  avatarUrl,
  bgColor,
  buttonText,
  price,
  isLearningUnit,
}: Props) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const avatarBgColor = bgColor ?? colors.neutrals[100]
  const { permissions } = useAppContext()
  const [accessLabAuth] = [permissions[detail.resource.view]]

  return (
    <>
      <div className="headerAvatar__card">
        <section className="headerAvatar__avatar__title">
          <div className="headerAvatar__avatar">
            {avatarUrl && (
              <Image
                src={avatarUrl}
                alt={name || DEFAULT_BRAND_IMG_PROPS.alt}
                layout="responsive"
                width={isTablet ? '6rem' : '9.25rem'}
                height={isTablet ? '6rem' : '9.25rem'}
                style={{ backgroundColor: avatarBgColor }}
                className="header__image"
              />
            )}
          </div>
          <div className="headerAvatar__info">
            <Chip title={name} size="medium" />
            <Typography variant={isTablet ? 'h2' : 'h5'} color={colors.neutrals[600]}>
              {title}
            </Typography>
          </div>
        </section>
        {price && !isTablet && (
          <div className="headerAvatar__price">
            <Typography variant="h2" color={theme.colors.primary[500]}>
              {`USD ${price}`}
            </Typography>
            <Typography variant="p1" color={theme.colors.neutrals[500]}>
              {`/${intl.formatMessage(messages.perUser)}`}
            </Typography>
          </div>
        )}
        {accessLabAuth && !isLearningUnit && (
          <Button
            size={isTablet ? 'large' : 'medium'}
            variant="contained"
            onClick={() => {
              void router.push(
                `/laboratories/detail-laboratory/${id}/${title}/detail-resource/${id}/${title}`,
              )
            }}>
            {buttonText}
          </Button>
        )}
      </div>

      <style jsx>{HeaderAvatarLocalStyles}</style>
      <style jsx global>
        {HeaderAvatarGlobalStyles}
      </style>
    </>
  )
}
export default HeaderAvatarComponent
