export type Page = {
  id: number
  name: object
  url: string
  icon?: React.ComponentState
  permission: string
}

export type HeaderComponentProps = {
  icon: React.ReactNode
  pages: Page[]
  button?: React.ReactNode
}
