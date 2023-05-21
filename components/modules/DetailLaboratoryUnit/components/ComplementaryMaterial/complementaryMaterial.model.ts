type Type = 'guide' | 'tutorial' | 'webinar'

export type ComplementaryMaterialProps = {
  type: Type
  title: string
  href?: string
  color?: string
}
