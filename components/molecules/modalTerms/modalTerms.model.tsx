export type TermsProps = {
  openBoarding?: (value: boolean) => void
}

export type ModalTermsProps = {
  url: string
  onAcceptTerms: () => Promise<void>
  openBoarding?: (value: boolean) => void
  onClose: () => void | Promise<void>
}
