import { Box, Fade, Modal } from '@mui/material'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { AlertModalProps } from './alertModal.model'
import { AlertStyle } from './alertModal.style'

export const AlertModalComponent = (props: AlertModalProps) => {
  const {
    titleText,
    subtitleText,
    descriptionText,
    cancelActionText,
    onCancel,
    continueActionText,
    onContinue,
    open = false,
  } = props

  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        closeAfterTransition>
        <Fade in={open}>
          <Box className="modalBox">
            {titleText && (
              <Typography color={theme.colors.neutrals[500]} variant="s1">
                {titleText}
              </Typography>
            )}
            {subtitleText && (
              <Typography
                color={theme.colors.neutrals[400]}
                variant="s2"
                className="alert-sub-title">
                {subtitleText}
              </Typography>
            )}
            {descriptionText && (
              <Typography color={theme.colors.neutrals[400]} variant="s2">
                {descriptionText}
              </Typography>
            )}
            <div className="alert-container-btn">
              {cancelActionText && (
                <Button
                  type="button"
                  onClick={onCancel}
                  variant="white"
                  className="alert-btn-cancel"
                  size="small">
                  {cancelActionText}
                </Button>
              )}
              {continueActionText && (
                <Button
                  type="button"
                  onClick={onContinue}
                  variant="white"
                  className="alert-btn-delete"
                  size="small">
                  {continueActionText}
                </Button>
              )}
            </div>
          </Box>
        </Fade>
      </Modal>
      <style jsx global>
        {AlertStyle}
      </style>
    </>
  )
}
