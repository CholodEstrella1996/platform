import { BaseResponse } from './responseBase.model'

export type LaboratoryById = Application & {
  pedagogicalMaterials: PedagogicalMaterial[]
  applications: Application[]
  learningUnits: Application[]
  media: Media[]
  application: {
    androidPackageName: string
    appleUrl: string
    downloadable: Content
    platform: Platform
  }
}

export type LaboratoryResponse = BaseResponse & {
  content: LaboratoryContent[]
}

export type LaboratoryContent = {
  id: number
  name: string
  description: string
  productUnitId: number
  classroomCode: string
  iconUrl: string
  color: string
  colorDark: string
  colorLight: string
  type: Type
  firstMedia: FirstMedia
}

export type FirstMedia = {
  id: number
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

type Application = {
  id: number
  name: string
  description: string
  productUnitId: number
  classroomCode: string
  iconUrl: string
  type: Type
  colorLight: string
}

type Type = {
  id: number
  name: string
  displayName: string
}

export type Media = {
  id: number
  content: Content
}

type Content = {
  id: number
  url?: string
  name: string
  kind: string
  format: Format
}

type Format = {
  extension: string
  contentType: string
}

type Platform = {
  iconContentId: number
  id: number
  name: string
}

export type PedagogicalMaterial = {
  id: number
  name: string
  description: string
  content: Content
  type: Type
  authorities: Type[]
  html?: string
}
