import React from 'react'

import { ChevronLeft, ChevronRight, Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import messages from '../../formModal.messages'
import { StepFormProps } from '../../formModal.model'
import { FormModalGlobalStyles, FormModalLocalStyles } from '../../formModal.styles'

const FormStep = (props: StepFormProps) => {
  const {
    title,
    submitText,
    activeStep,
    finalStep,
    currentStep,
    isLoading,
    readOnly,
    stepIndicator,
    closeForm,
    handleNext = () => {},
    handleBack = () => {},
    handleSubmit,
  } = props
  const { colors } = theme
  const intl = useIntl()

  return (
    <>
      <div className="step-form__header">
        <div className="step-form__title">
          <Typography variant="h5" weight="bold" color={colors.primary[500]}>
            {title}
          </Typography>

          <IconButton onClick={() => closeForm()}>
            <Close fontSize="small" />
          </IconButton>
        </div>
        {!readOnly ||
          (stepIndicator && (
            <Typography variant="s2" weight="semibold" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.stepCounter, { q: activeStep, p: finalStep })}
            </Typography>
          ))}
      </div>

      {currentStep}

      <div className="step-form__buttons">
        <Button
          variant="outlined"
          size="medium"
          icon={activeStep > 1 && <ChevronLeft />}
          iconPosition="left"
          onClick={activeStep === 1 ? () => closeForm() : () => handleBack()}>
          {activeStep === 1
            ? intl.formatMessage(messages.actionButtons.cancel, { readOnly })
            : intl.formatMessage(messages.actionButtons.back)}
        </Button>

        {!readOnly && (
          <Button
            variant="contained"
            size="medium"
            icon={activeStep < finalStep && <ChevronRight />}
            iconPosition="right"
            disabled={isLoading}
            onClick={
              activeStep === finalStep ? () => void handleSubmit() : () => void handleNext()
            }>
            {activeStep === finalStep
              ? submitText
              : intl.formatMessage(messages.actionButtons.next)}
          </Button>
        )}
      </div>

      <style jsx>{FormModalLocalStyles}</style>
      <style jsx global>
        {FormModalGlobalStyles}
      </style>
    </>
  )
}
export default FormStep
