import { USER_SERVICE } from 'constants/urls.constants'
import api from 'services/api.client'
import { ClientResponse, StatusResponse } from 'services/models/client.model'
import {
  RequiredActions,
  PermissionsRequest,
  PermissionsResponse,
  ProfileResponse,
} from 'services/models/user.model'

const userService = {
  getUser: async () => {
    const { data } = await api.get<ProfileResponse>(`${USER_SERVICE}/auth/user/profile/`, {
      id: 'userService.getUser',
    })

    return data
  },

  deleteAvatar: async (id: string | number) =>
    api.delete<ClientResponse>(`${USER_SERVICE}/users/${id}/avatar`, {
      id: 'userService.deleteAvatar',
    }),

  updateUser: async (user: FormData) =>
    api.put(`${USER_SERVICE}/users/profile`, user, {
      headers: { 'Content-Type': 'multipart/form-data' },
      id: 'userService.updateUser',
    }),

  userRequiredActions: async (actions: RequiredActions) =>
    api.patch(`${USER_SERVICE}/users/required-actions`, actions, {
      id: 'userService.userRequiredActions',
    }),

  getIdentitiesType: async () => {
    const { data } = await api.get<StatusResponse>(`${USER_SERVICE}/users/identity-types`, {
      id: 'userService.getIdentitiesType',
    })

    return data.content
  },
  getGender: async () => {
    const { data } = await api.get<StatusResponse>(`${USER_SERVICE}/genders`, {
      id: 'userService.getGender',
    })

    return data.content
  },
  getEducationalLevel: async () => {
    const { data } = await api.get<StatusResponse>(`${USER_SERVICE}/educational-levels`, {
      id: 'userService.getEducationalLevel',
    })

    return data.content
  },

  evaluatePermissions: async (permissions: PermissionsRequest) => {
    const { data } = await api.post<PermissionsResponse>(
      `${USER_SERVICE}/auth/permissions-request`,
      permissions,
      { id: 'userService.evaluatePermissions' },
    )

    return data
  },
}

export default userService
