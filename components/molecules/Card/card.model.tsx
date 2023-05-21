export type CardProps = {
  name: string
  type?: string
  isFromGroups?: boolean
  educationKind?: string
  sector?: string
}

export type GroupCardProps = {
  content: Content[]
}

export type Content = { id: number; title: string }
