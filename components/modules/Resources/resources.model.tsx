import { PedagogicalMaterial } from 'services/models/applications.model'

type Resource = {
  title: string
  simulator: TitleLink
  guide: TitleLink
  video: TitleLink
  webinar: TitleLink
}

type TitleLink = {
  title: string
  link: string
}

type ResourceMaterial = {
  guides: PedagogicalMaterial[]
  videos: PedagogicalMaterial[]
  webinars: PedagogicalMaterial[]
  procedures: PedagogicalMaterial[]
}

export type { Resource, TitleLink, ResourceMaterial }
