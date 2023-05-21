import { CommonClient } from './client.model'

type User = CommonClient

type ProfileResponse = CommonClient

type PermissionsRequest = {
  permissions: string[]
}

type PermissionsResponse = {
  [key: string]: boolean
}

type RequiredActions = {
  requiredActions: string[]
}

export type { User, ProfileResponse, PermissionsRequest, PermissionsResponse, RequiredActions }
