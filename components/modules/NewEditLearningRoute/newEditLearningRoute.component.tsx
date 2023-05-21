import React from 'react'

import { SaveOutline } from '@easy-eva-icons/react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Step, StepContent, StepLabel, Stepper } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'

import Header from './components/Header'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import messages from './newEditLearningRoute.messages'
import { NewEditLearningRouteProps } from './newEditLearningRoute.model'
import {
  NewEditLearningRouteGlobalStyles,
  NewEditLearningRouteStyles,
} from './newEditLearningRoute.styles'

const NewEditLearningRouteComponent = ({
  addLabs,
  groupOptions,
  isEditable,
  isLoading,
  isSaving,
  labsList,
  nodes,
  onSubmit,
  onEdit,
  reference,
  subscriptionOptions,
  setLaboratoryInOrder,
}: NewEditLearningRouteProps) => {
  const methods = useFormContext()
  const intl = useIntl()
  const [activeStep, setActiveStep] = React.useState(0)

  const steps = [
    {
      label: intl.formatMessage(messages.stepDescription.stepOneDescription),
      element: (
        <StepOne
          groupOptions={groupOptions}
          subscriptionOptions={subscriptionOptions}
          isLoading={isLoading}
          reference={reference}
          isEditable={isEditable}
        />
      ),
    },
    {
      label: intl.formatMessage(messages.stepDescription.stepTwoDescription),
      element: (
        <StepTwo
          laboratoryList={labsList}
          onEdit={onEdit}
          nodes={nodes}
          addLabs={addLabs}
          isLoading={isLoading}
          setLaboratoryInOrder={setLaboratoryInOrder}
        />
      ),
    },
  ]

  const handleNext = async () => {
    const result = await methods.trigger()
    if (result) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  return (
    <>
      <Header title={intl.formatMessage(messages.navigation.pageTitle, { isEditable })} />

      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel className="step__label">{step.label}</StepLabel>
            <StepContent>{step.element}</StepContent>
          </Step>
        ))}
      </Stepper>

      <div className={`nav__bottom nav__bottom--${activeStep === 0 ? 'next' : 'confirm'}`}>
        {activeStep > 0 && (
          <Button
            variant="outlined"
            size="medium"
            icon={<ChevronLeft />}
            iconPosition="left"
            onClick={() => void handleBack()}>
            {intl.formatMessage(messages.actionButtons.back)}
          </Button>
        )}
        <Button
          loading={isSaving}
          disabled={isSaving}
          variant="contained"
          size="medium"
          icon={activeStep === steps.length - 1 ? <SaveOutline fontSize={24} /> : <ChevronRight />}
          iconPosition={activeStep === steps.length - 1 ? 'left' : 'right'}
          onClick={
            activeStep === steps.length - 1 ? () => void onSubmit() : () => void handleNext()
          }>
          {activeStep === steps.length - 1
            ? intl.formatMessage(messages.actionButtons.confirm)
            : intl.formatMessage(messages.actionButtons.next)}
        </Button>
      </div>

      <style jsx>{NewEditLearningRouteStyles}</style>
      <style jsx global>
        {NewEditLearningRouteGlobalStyles}
      </style>
    </>
  )
}

export default NewEditLearningRouteComponent
