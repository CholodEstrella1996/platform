import Image from 'next/image'
import Link from 'next/link'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS, DEFAULT_LABS_IMG_PROPS } from 'constants/defaultStaticImages'

import { CardLabProps } from './cardLab.model'
import { CardLabLocalStyles } from './cardLab.styles'
import { Video } from '../Video'

export const CardLabComponent = (props: CardLabProps) => {
  const { firstMedia, title, subtitle, price, group, href } = props
  const intl = useIntl()
  return (
    <div
      style={{
        '--avatar-bg-color': group[0]?.colorLight ?? 'inherit',
        '--overline-color': group[0]?.colorDark ?? 'inherit',
      }}>
      <Link href={href}>
        <a className="card">
          <div className="card__inner">
            <div className="card__inner__image">
              {!!firstMedia?.content?.url && firstMedia?.content?.kind === 'video' ? (
                <div className="video__player">
                  <Video src={firstMedia.content.url} withoutBorderRadius type="preview" />
                </div>
              ) : (
                <Image
                  src={firstMedia?.content?.url || DEFAULT_LABS_IMG_PROPS.image}
                  layout="responsive"
                  width="640"
                  height="360"
                  placeholder="blur"
                  blurDataURL={DEFAULT_LABS_IMG_PROPS.image.blurDataURL}
                  alt={title || DEFAULT_LABS_IMG_PROPS.alt}
                  priority
                />
              )}
            </div>
            <div className="card__inner__content">
              <div className="card__info">
                <div className="card__info__avatar">
                  <Image
                    src={group[0]?.avatar || DEFAULT_ICON_IMG_PROPS.image}
                    layout="responsive"
                    width="20"
                    height="20"
                    alt={group[0]?.title || DEFAULT_LABS_IMG_PROPS.alt}
                    priority
                  />
                </div>
                <div className="card__info__title">
                  {!!subtitle && <span className="info__subtitle">{subtitle}</span>}
                  <span className="info__title">{title}</span>
                </div>
              </div>
              {!!price && (
                <div className="card__price">
                  <Typography variant="c2" color={theme.colors.neutrals[500]}>
                    USD {intl.formatNumber(price, { currency: 'usd' })}
                  </Typography>
                </div>
              )}
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{CardLabLocalStyles}</style>
    </div>
  )
}
