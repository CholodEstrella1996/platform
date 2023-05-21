import React, { useState } from 'react'

import { SaveOutline } from '@easy-eva-icons/react'
import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import { Step, StepContent, StepLabel, Stepper } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { useNotification } from 'hooks/notification'

import Header from './components/Header'
import StepOne from './components/StepOne'
import TableSteps from './components/TableSteps'
import messages from './newEditGroup.messages'
import { NewEditGroupProps, TableData } from './newEditGroup.model'
import { NewEditGroupGlobalStyles, NewEditGroupLocalStyles } from './newEditGroup.styles'

export const NewEditGroupComponent = ({
  onSubmit,
  data,
  role,
  isEditable,
  isLoading,
  isSaving,
  subscriptionOptions,
  listStatus,
  groupSubscription,
}: NewEditGroupProps) => {
  const [currentStep, setCurrentStep] = useState(1)

  const intl = useIntl()
  const { onWarning } = useNotification()
  const { resetField, trigger, watch, getValues, setValue } = useFormContext()
  const finalStep = 3
  const profileTeacher = intl.formatMessage(messages.steps.stepTwo.profile, { isPlural: false })
  const profileStudent = intl.formatMessage(messages.steps.stepThree.profile, { isPlural: false })
  const warningNotification = intl.formatMessage(messages.notificationTexts.warning, {
    profile: currentStep === 2 ? profileTeacher : profileStudent,
  })

  const steps = [
    {
      label: intl.formatMessage(messages.stepDescription.stepOneDescription),
      element: <StepOne isEditable={isEditable} groupSubscription={groupSubscription} />,
    },
    {
      label: intl.formatMessage(messages.stepDescription.stepTwoDescription),
      element: (
        <TableSteps
          data={data}
          listStatus={listStatus}
          stepNumber={2}
          stepProfile={intl.formatMessage(messages.steps.stepTwo.profile, { isPlural: true })}
          onPageChange={role}
          isLoading={isLoading}
          subscriptionOptions={subscriptionOptions}
          disabledSubscription={false}
        />
      ),
    },
    {
      label: intl.formatMessage(messages.stepDescription.stepThreeDescription),
      element: (
        <TableSteps
          data={data}
          listStatus={listStatus}
          stepNumber={3}
          stepProfile={intl.formatMessage(messages.steps.stepThree.profile, { isPlural: true })}
          onPageChange={role}
          isLoading={isLoading}
          subscriptionOptions={subscriptionOptions}
          disabledSubscription
        />
      ),
    },
  ]

  const handleNext = async () => {
    if (!(await trigger())) return
    resetField('search')
    const registeredValues: TableData[] = watch('teachersInCharge')

    const selectedSubscription = getValues('currentSubscription')

    if (currentStep === 1) {
      setCurrentStep((prevStep) => prevStep + 1)
      if (!isEditable && selectedSubscription !== groupSubscription) {
        setValue('students', [])
        setValue('currentSubscription', groupSubscription)
      }
      role('organization-teacher', 0)
      return
    }
    if (currentStep === 2 && !registeredValues.length) {
      onWarning(warningNotification)
      return
    }

    setValue('subscriptionFilter', groupSubscription)
    setCurrentStep((prevStep) => prevStep + 1)
    role('organization-student', 0)
  }

  const handleBack = async () => {
    resetField('search')
    if (currentStep === 3) {
      resetField('subscriptionFilter')
      setCurrentStep((prevStep) => prevStep - 1)
      role('organization-teacher', 0, true)
    }
    if (currentStep === 2) {
      setCurrentStep((prevStep) => prevStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!(await trigger())) return
    const registeredValues: TableData[] = watch('students')
    if (!registeredValues.length) {
      onWarning(warningNotification)
      return
    }
    void onSubmit()
  }

  return (
    <>
      <Header
        title={intl.formatMessage(messages.stepDescription.title, {
          isEditable,
        })}
      />

      <Stepper activeStep={currentStep - 1} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel className="step__label">{step.label}</StepLabel>
            <StepContent>{step.element}</StepContent>
          </Step>
        ))}
      </Stepper>

      <div className={currentStep === 1 ? 'nextButton' : 'actionButtons'}>
        {currentStep > 1 && (
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
          icon={currentStep !== finalStep ? <ChevronRight /> : <SaveOutline fontSize={24} />}
          iconPosition={currentStep === finalStep ? 'left' : 'right'}
          onClick={currentStep === finalStep ? () => void handleSubmit() : () => void handleNext()}>
          {currentStep === finalStep
            ? intl.formatMessage(messages.actionButtons.create, { isEditable })
            : intl.formatMessage(messages.actionButtons.next)}
        </Button>
      </div>

      <style jsx>{NewEditGroupLocalStyles}</style>
      <style jsx global>
        {NewEditGroupGlobalStyles}
      </style>
    </>
  )
}
