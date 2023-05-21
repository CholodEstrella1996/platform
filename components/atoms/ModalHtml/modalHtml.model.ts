export type PropsModal = {
  title?: string
  buttonOutlined?: string
  buttonContained?: string
  html: string
  open: boolean
  contentClass?: string
  setModalOpen: (openM: boolean) => void
  onAcceptTerms?: () => Promise<void>
}
