type Step = {
  id: number
  element: JSX.Element
}

export type FormModalProps = {
  steps: Step[]
  title: string
  isOpen: boolean
  onClose: () => void
  onSubmit: () => Promise<void>
  submitText?: string
  fullScreen?: boolean
  readOnly?: boolean
  stepIndicator?: boolean
  isOnlyModal?: boolean
  preventModalClose?: boolean
}

export type StepFormProps = {
  title: string
  submitText?: string
  activeStep: number
  finalStep: number
  currentStep: JSX.Element
  isLoading: boolean
  readOnly?: boolean
  stepIndicator?: boolean
  closeForm: () => void
  handleNext?: () => void
  handleBack?: () => void
  handleSubmit: () => void
}

export type MockForm = {
  name: string
  search: string
  description: string
}
