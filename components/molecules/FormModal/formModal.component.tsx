import React, { useState } from 'react'

import { Box, Modal } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { ThemeProvider } from 'components/atoms/ThemeProvider'
import { useNotification } from 'hooks/notification'

import FormStep from './components/FormStep'
import messages from './formModal.messages'
import { FormModalProps } from './formModal.model'
import { FormModalGlobalStyles, FormModalLocalStyles } from './formModal.styles'

export const FormModalComponent = ({
  steps,
  title,
  isOpen,
  onClose,
  onSubmit,
  submitText,
  fullScreen = false,
  readOnly = false,
  stepIndicator = false,
  isOnlyModal = false,
  preventModalClose,
}: FormModalProps) => {
  const [activeStep, setActiveStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [openAlert, setOpenAlert] = useState(false)
  const finalStep = steps.length
  const { onWarning } = useNotification()
  const intl = useIntl()
  const methods = useFormContext()
  const handleSubmit = async () => {
    if (isOnlyModal) {
      void onSubmit()
      if (preventModalClose) return
      onClose()
      return
    }
    const result = await methods.trigger()

    if (result) {
      setIsLoading(true)
      void onSubmit()
      setIsLoading(false)
      onClose()
    } else onWarning(intl.formatMessage(messages.notificationText.warning))
  }

  const handleNext = async () => {
    if (!methods) {
      setActiveStep((prevStep) => prevStep + 1)
      return
    }

    const result = await methods.trigger()
    if (result) setActiveStep((prevStep) => prevStep + 1)
    else onWarning(intl.formatMessage(messages.notificationText.warning))
  }

  const handleCloseForm = (reason?: 'backdropClick' | 'escapeKeyDown') => {
    if (reason !== 'backdropClick') {
      setOpenAlert(false)
      onClose()
      setActiveStep(1)
    }
  }

  return (
    <>
      <Modal
        className="form-modal"
        open={isOpen}
        onClose={readOnly ? () => onClose() : (event, reason) => handleCloseForm(reason)}>
        <Box className="form-modal__dialog">
          <Box
            className={`form-modal__container ${
              fullScreen ? 'form-modal__container--fullScreen' : ''
            }`}>
            <ThemeProvider>
              <FormStep
                title={title}
                submitText={submitText}
                activeStep={activeStep}
                finalStep={finalStep}
                currentStep={steps[activeStep - 1].element}
                isLoading={isLoading}
                readOnly={readOnly}
                stepIndicator={stepIndicator}
                closeForm={readOnly ? () => onClose() : () => setOpenAlert(true)}
                handleNext={() => void handleNext()}
                handleBack={() => setActiveStep((prevStep) => prevStep - 1)}
                handleSubmit={() => void handleSubmit()}
              />
            </ThemeProvider>
          </Box>
        </Box>
      </Modal>

      {openAlert && (
        <AlertModal
          open={openAlert}
          titleText={intl.formatMessage(messages.notificationText.closeAlert.title)}
          subtitleText={intl.formatMessage(messages.notificationText.closeAlert.subtitle)}
          cancelActionText={intl.formatMessage(messages.notificationText.closeAlert.cancelText)}
          onCancel={() => setOpenAlert(false)}
          continueActionText={intl.formatMessage(messages.notificationText.closeAlert.continueText)}
          onContinue={handleCloseForm}
        />
      )}

      <style jsx>{FormModalLocalStyles}</style>
      <style jsx global>
        {FormModalGlobalStyles}
      </style>
    </>
  )
}
