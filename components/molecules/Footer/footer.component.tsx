import React from 'react'

import { DownloadOutlined } from '@mui/icons-material'
import Image from 'next/image'
import router from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_BRAND_IMG_PROPS } from 'constants/defaultStaticImages'
import { LANDING_PAGE_URL } from 'constants/urls.constants'
import { useMediaQuery } from 'hooks/use-media-query/use-media-query'
import { Language } from 'services/models/languages.model'

import FooterSocialMedia from './components/SocialMedia'
import messages from './footer.messages'
import { FooterGlobalStyles, FooterLocalStyles } from './footer.styles'

type Props = {
  listLanguage: Language[]
}

export const FooterComponent = ({ listLanguage }: Props) => {
  const { colors, mediaQueries } = theme
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const navigatePage = async (): Promise<void> => {
    await router.replace(`${LANDING_PAGE_URL}/downloads`)
  }
  const options = () => {
    const newListStatus: OptionProps[] = listLanguage.map(
      ({ id, name, languageCode }: Language) => ({
        id,
        value: languageCode,
        label: name,
      }),
    )
    return newListStatus
  }

  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="footer__container">
        <section className="footer__text">
          <div className="footer__brand">
            <Image
              src={DEFAULT_BRAND_IMG_PROPS.image}
              width={242}
              height={111}
              layout="responsive"
              alt={DEFAULT_BRAND_IMG_PROPS.alt}
            />
          </div>
          <Typography variant="c1" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.brand.copyright, { year: currentYear })}
          </Typography>
        </section>
        <section className="footer__clickable">
          <div className="footer__buttons">
            <Select
              isSearchable={isTablet}
              options={options()}
              name="languageCode"
              label=""
              size="small"
              fullWidth
            />
            <Button
              variant="outlined"
              size="medium"
              onClick={() => {
                void navigatePage()
              }}
              icon={<DownloadOutlined />}
              iconPosition="left">
              {intl.formatMessage(messages.download.desktop)}
            </Button>
          </div>
          <div className="footer__social">
            <FooterSocialMedia />
          </div>
        </section>
      </footer>

      <style jsx>{FooterLocalStyles}</style>
      <style jsx global>
        {FooterGlobalStyles}
      </style>
    </>
  )
}
