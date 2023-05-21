import { BaseResponse } from './responseBase.model'

type CommonClient = {
  address: string
  avatarContentId: number
  avatarUrl: string | File
  birthDate: string
  cityId: number
  countryId: number
  educationalLevel: Status
  email: string
  emailVerified: boolean
  enabled: boolean
  firstName: string
  gender: Status
  id: string
  identityNumber: number
  identityType: Omit<Status, 'displayName'>
  isCustomer: boolean
  organizationId?: number
  password?: unknown
  phoneNumber: number
  postalCode: string
  requiredActions: string[]
  stateId: number
  surname: string
  subscriptions?: Subscription[] // user
  organization?: Organization // user
  city?: City // user
  createAt?: number // user
  status?: Status // user
  role?: Status[] // user
  username?: string // user
}
type Status = {
  id: number
  name: string
  displayName: string
}

type StatusResponse = BaseResponse & {
  content: Status
}

type ClientResponse = {
  id: number
  role: Status[]
  status: Status
  subscriptions: Subscription[]
  user: CommonClient
}

type Client = ClientResponse

type Organization = {
  address: string
  city: string
  cityId: number
  country: string
  educationKind: Status
  id: number
  identityType: string
  logoUrl: string
  name: string
  organizationKind: Status
  phoneNumber: string
  postalCode: string
  sector: Status
  state: string
}

type City = {
  name: string
  stateName: string
  countryName: string
}

type Subscription = {
  id: number
  code: string
}

export type { CommonClient, StatusResponse, Status, ClientResponse, Client, Subscription }
