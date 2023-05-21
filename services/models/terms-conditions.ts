export type TermsAndConditions = {
  id: number
  title: string
  version: string
  description: string
  active: boolean
  content: {
    id: number
    name: string
    url: string
    kind: string
    format: {
      extension: string
      contentType: string
    }
  }
}
