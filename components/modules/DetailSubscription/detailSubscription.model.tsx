import { Subscription } from 'services/models/subscriptions'

type DetailSubscriptionProps = {
  idSubscription: number
}

type DetailSubscriptionData = DetailSubscriptionBase & {
  isDownloading: boolean
  onDownload: (state: boolean) => void
}

type DetailSubscriptionBase = {
  content: Subscription
}

type SubscriptionProduct = {
  id: number
  name: string
  description: string
  visible: boolean
  productUnitId: number
  defaultPackage: boolean
  type: string
  price: number
  color: string
  colorDark: string
  colorLight: string
  icon: GeneralFile
  picture: string | null
  media: {
    id: number
    content: GeneralFile
  }[]
}

type GeneralFile = {
  id: number
  name: string
  url: string
  kind: string
  format: {
    extension: string
    contentType: string
  }
}

export type {
  DetailSubscriptionProps,
  DetailSubscriptionData,
  DetailSubscriptionBase,
  SubscriptionProduct,
}
