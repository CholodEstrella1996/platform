import { useState } from 'react'

import { Close } from '@mui/icons-material'
import { Box, IconButton, Modal } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { SENT_INVITE_MODAL_IMG } from 'constants/defaultStaticImages'

import { SentInviteModalStyles } from './sentInviteModal.styles'
import messages from '../../invite.messages'

type Prop = {
  isOpen: boolean
  isChildrenInvitation: boolean
}

const { colors } = theme

export const SentInviteModalComponent = ({ isOpen, isChildrenInvitation }: Prop) => {
  const [openModal, setOpenModal] = useState(isOpen)
  const intl = useIntl()
  const router = useRouter()
  const routerPath = isChildrenInvitation ? `/my-children` : `/my-institution`

  const handleClose = () => {
    setOpenModal((prevState) => !prevState)
    void router.push(routerPath)
  }

  return (
    <>
      <Modal open={openModal} className="sent-invite__modal">
        <Box className="sent-modal">
          <div className="sent-modal__container">
            <IconButton onClick={() => handleClose()}>
              <Close fontSize="medium" />
            </IconButton>
            <div className="sent-modal__content">
              <Image src={SENT_INVITE_MODAL_IMG.image} alt={SENT_INVITE_MODAL_IMG.alt} />
              <div className="sent-modal__text">
                <Typography variant="h4" color={colors.primary[500]} weight="bold">
                  {intl.formatMessage(messages.sentInvite.title)}
                </Typography>
                <Typography variant="s1" color={colors.neutrals[500]}>
                  {intl.formatMessage(messages.sentInvite.message, {
                    isParent: isChildrenInvitation,
                  })}
                </Typography>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <style jsx>{SentInviteModalStyles}</style>
    </>
  )
}
