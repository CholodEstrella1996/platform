import { useState } from 'react'

import { Modal, Box } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import ModalHtml from 'components/atoms/ModalHtml'
import { theme, ThemeProvider } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_BRAND_IMG_PROPS } from 'constants/defaultStaticImages'
import { setCookie } from 'utils/helpers/cookie'

import messages from './cardCookie.messages'
import { CardCookieLocalStyles } from './cardCookie.styles'

type Props = {
  url: string
  onClose: () => void | Promise<void>
}

export const CardCookieComponent = ({ url, onClose }: Props) => {
  const intl = useIntl()
  const { colors } = theme
  const [openModal, setOpen] = useState(false)
  const [show, setShow] = useState(true)
  const { keycloak } = useKeycloak()
  const modalTitle = intl.formatMessage(messages.content.modal)

  const handleReject = () => {
    if (keycloak) window.location.href = keycloak.createLogoutUrl()
  }

  const handleAccept = () => {
    void setCookie()
    setShow((prevStep) => !prevStep)
    void onClose()
  }

  return (
    <>
      {show && (
        <Modal open={show} className="cookies">
          <Box>
            <ThemeProvider>
              <div className="cookies__container">
                <div className="cookies__brand">
                  <Image
                    src={DEFAULT_BRAND_IMG_PROPS.image}
                    alt={DEFAULT_BRAND_IMG_PROPS.alt}
                    width={80}
                    height={40}
                    layout="fixed"
                  />
                </div>
                <div className="cookies__content">
                  <Typography variant="s1" weight="bold" color={colors.neutrals[700]}>
                    {intl.formatMessage(messages.content.titleCookies)}
                  </Typography>
                  <Typography variant="s1" color={colors.neutrals[700]}>
                    {intl.formatMessage(messages.content.descriptions)}
                    <a
                      aria-hidden="true"
                      onClick={() => setOpen((prevStep) => !prevStep)}
                      color={colors.neutrals[700]}>
                      {intl.formatMessage(messages.content.link)}
                    </a>
                  </Typography>
                </div>
                <div className="cookies__buttons">
                  <Button
                    variant="outlined"
                    onClick={() => handleReject()}
                    type="button"
                    size="large"
                    iconPosition="right">
                    {intl.formatMessage(messages.content.button.decline)}
                  </Button>
                  <Button variant="contained" size="large" onClick={() => handleAccept()}>
                    {intl.formatMessage(messages.content.button.accept)}
                  </Button>
                </div>
              </div>
            </ThemeProvider>
          </Box>
        </Modal>
      )}
      <ModalHtml open={openModal} title={modalTitle} html={url} setModalOpen={setOpen} />

      <style jsx>{CardCookieLocalStyles}</style>
    </>
  )
}
