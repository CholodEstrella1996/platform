export type AlertModalProps = {
  titleText?: string
  subtitleText?: string
  descriptionText?: string

  cancelActionText?: string
  onCancel?: () => void
  continueActionText?: string
  onContinue?: () => void

  open: boolean
}
