import { FirstMedia } from 'services/models/applications.model'

export type CardLabProps = {
  id: number
  firstMedia?: FirstMedia
  title: string
  subtitle: string
  price?: number
  type?: string
  href: string
  group: Group[]
}

type Group = {
  id: number
  title: string
  subtitle: string
  colorLight: string
  color?: string
  colorDark?: string
  price?: number
  avatar: string
}
