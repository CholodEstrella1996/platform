import { useState } from 'react'

import { useIntl } from 'react-intl'

import ModalHtml from 'components/atoms/ModalHtml'

import messages from './modalTerms.messages'
import { ModalTermsProps } from './modalTerms.model'
import { ModalTermsStyles } from './modalTerms.styles'

export const ModalTermsComponent = ({ url, onAcceptTerms, onClose }: ModalTermsProps) => {
  const intl = useIntl()
  const [openModal, setOpen] = useState(true)

  const handleAccept = async () => {
    void onAcceptTerms()
    void onClose()
  }

  return (
    <>
      <ModalHtml
        open={openModal}
        title={intl.formatMessage(messages.content.title)}
        html={url}
        setModalOpen={setOpen}
        buttonContained={intl.formatMessage(messages.content.button.accept)}
        buttonOutlined={intl.formatMessage(messages.content.button.decline)}
        onAcceptTerms={() => handleAccept()}
      />

      <style jsx>{ModalTermsStyles}</style>
    </>
  )
}
