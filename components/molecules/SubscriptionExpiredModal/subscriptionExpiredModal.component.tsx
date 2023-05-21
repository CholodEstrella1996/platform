import { useState } from 'react'

import { ArrowForwardOutline } from '@easy-eva-icons/react'
import { Box, Modal } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme, ThemeProvider } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import {
  DEFAULT_BRAND_IMG_PROPS,
  DEFAULT_DEMO_ACCESS_IMG_PROPS,
} from 'constants/defaultStaticImages'
import { STORE_PAGE_URL } from 'constants/urls.constants'
import { useMediaQuery } from 'hooks/use-media-query'

import { messages } from './subscriptionExpiredModal.messages'
import { SuscriptionExpiredModalStyles } from './subscriptionExpiredModal.style'

const { colors, mediaQueries } = theme

type Props = {
  title: string
  description: string
}

export const SubscriptionExpiredModalComponent = ({ title, description }: Props) => {
  const [open, setOpen] = useState(true)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const { keycloak } = useKeycloak()

  const handleClose = () => {
    setOpen(!open)
    if (keycloak) window.location.href = keycloak.createLogoutUrl()
  }
  const handleExplore = () => {
    void router.push(`${STORE_PAGE_URL}/explore-labs`)
  }

  return (
    <>
      <Modal open={open} sx={{ zIndex: 50 }}>
        <Box className="demo__modal">
          <ThemeProvider>
            <div className="demo__card__data">
              <div className="demo__card__image">
                <Image
                  src={DEFAULT_DEMO_ACCESS_IMG_PROPS.image}
                  alt={DEFAULT_BRAND_IMG_PROPS.alt}
                  width="500"
                  height="500"
                  layout="responsive"
                />
              </div>
              <div className="demo__card__text">
                <Typography
                  variant={isTablet ? 'h5' : 'h6'}
                  color={colors.primary[500]}
                  weight="bold">
                  {title}
                </Typography>
                <Typography variant={isTablet ? 's1' : 's2'} color={colors.neutrals[300]}>
                  {description}
                </Typography>
              </div>
            </div>
            <div className="demo__card__buttons">
              <Button variant="outlined" size="medium" onClick={handleClose}>
                {intl.formatMessage(messages.button.close)}
              </Button>
              <Button
                onClick={handleExplore}
                variant="contained"
                size="medium"
                icon={<ArrowForwardOutline fontSize={20} />}
                iconPosition="right">
                {intl.formatMessage(messages.button.explore)}
              </Button>
            </div>
          </ThemeProvider>
        </Box>
      </Modal>
      <style jsx global>
        {SuscriptionExpiredModalStyles}
      </style>
    </>
  )
}
