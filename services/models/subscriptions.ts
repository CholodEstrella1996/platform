import { Media } from './applications.model'
import { Status } from './client.model'
import { BaseResponse } from './responseBase.model'

type Subscriptions = BaseResponse & {
  content: Types[]
}

type Types = {
  id: number
  code: string
  availableInvites: number
  productUnitsByKind: ProductUnitsByKind[]
}

type ProductUnitsByKind = {
  name: string
  displayName: string
  packages: Packages[]
}

type Packages = {
  id: number
  name: string
  price: string
  description: string
  pictureUrl: Media | null
  visible: boolean
  productUnitId: number
  defaultPackage: boolean
}

type SubscriptionPackage = {
  areas: ProductUnitsByKind
  laboratories: ProductUnitsByKind
  topics: ProductUnitsByKind
}

type MySubscriptionsResponse = BaseResponse & {
  content: MySubscriptions[]
}

type MySubscriptions = {
  id: number
  name: string
  email: string
  imageUrl: string
  phone: string
  kind: Status
  startDate: Date
  endDate: Date
  status: Status
  customerKind: Status
  country: Country
  licenceNumber: string
  code: string
  installationCount: number
  usedInstallationsCount: number
  userCount: number
  devicesPerUser: number
  ltiServerLocation: string
  ltiSupportForAndroid: boolean
  isLtiServerExternal: boolean
  tokenLTI: string
  ltiErrorMessage: string
  licenceId: number
  offlineActivations: number
  allowedAccess: number
  activeMembers: number
  activeInvites: number
}

type Country = {
  id: number
  name: string
}

type Subscription = {
  id: number
  code: string
  status: {
    id: number
    name: string
    displayName: string
  }
  startDate: string
  endDate: string
  allowedAccess?: number
  kind: {
    id: number
    name: string
    displayName: string
  }
  invoiceAvailable: boolean
  productUnits: ProductUnits[]
  productUnitsCount: number
}

type ProductUnits = {
  id: number
  name: string
  type: string
  picture?: string
  icon: {
    id: number
    name: string
    url: string
    kind: string
    format: {
      extension: string
      contentType: string
    }
  }
  media: Media | null
}

export type {
  ProductUnits,
  Subscription,
  Subscriptions,
  SubscriptionPackage,
  Packages,
  Types,
  MySubscriptionsResponse,
  MySubscriptions,
}
