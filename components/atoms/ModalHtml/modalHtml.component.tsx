import { Modal, Box } from '@mui/material'
import { useKeycloak } from '@react-keycloak-fork/ssr'
import dynamic from 'next/dynamic'

import { Button } from 'components/atoms/Button'
import { theme, ThemeProvider } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import ModalHeaderWithoutTitle from './components/ModalHeaderWithoutTitle'
import ModalHeader from './components/ModalHeaderWithTitle'
import { PropsModal } from './modalHtml.model'
import { ModalHtmlStyles, ModalHtmlGlobalStyles } from './modalHtml.styles'
import 'react-quill/dist/quill.snow.css'

const { colors, mediaQueries } = theme
const ModalHtmlComponent = (props: PropsModal) => {
  const {
    title,
    buttonOutlined,
    buttonContained,
    html,
    contentClass = '',
    open,
    setModalOpen,
    onAcceptTerms,
  } = props

  const isTablet = useMediaQuery(mediaQueries.tablet)
  const { keycloak } = useKeycloak()
  const handleClick = () => {
    if (keycloak) window.location.href = keycloak.createLogoutUrl()
  }
  const handleAccept = () => {
    if (onAcceptTerms) {
      void onAcceptTerms()
      setModalOpen(false)
    }
  }

  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false })

  return (
    <>
      <Modal className="modalHtml is-open" open={open}>
        <Box sx={{ outline: 'none' }}>
          <ThemeProvider>
            <div className="modalHtml__container">
              <div className="modalHtml__content">
                {title ? (
                  <ModalHeader
                    title={title}
                    color={colors.primary[500]}
                    setModalOpen={setModalOpen}
                  />
                ) : (
                  <ModalHeaderWithoutTitle setModalOpen={setModalOpen} />
                )}

                <div className={`modalHtml__react-quill ${contentClass}`}>
                  <ReactQuill readOnly theme="snow" defaultValue={html} />
                </div>

                {buttonOutlined && buttonContained && (
                  <div className="modalHtml__buttons">
                    <Button
                      variant="outlined"
                      onClick={() => handleClick()}
                      type="button"
                      size={isTablet ? 'large' : 'small'}
                      iconPosition="right">
                      {buttonOutlined}
                    </Button>

                    <Button
                      variant="contained"
                      size={isTablet ? 'large' : 'small'}
                      onClick={() => handleAccept()}
                      iconPosition="right">
                      {buttonContained}
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </ThemeProvider>
        </Box>
      </Modal>

      <style jsx>{ModalHtmlStyles}</style>
      <style jsx>{ModalHtmlGlobalStyles}</style>
    </>
  )
}

export default ModalHtmlComponent
