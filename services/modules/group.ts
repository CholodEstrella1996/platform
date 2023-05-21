import { AddUserForm } from 'components/modules/MyInstitution/myInstitution.model'
import { EditGroup, NewGroup } from 'components/modules/NewEditGroup/newEditGroup.model'
import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { ResponseGroups, GroupById } from 'services/models/group.model'

type GetGroupsArgs = {
  subscriptionId?: number
  params?: {
    availableForMemberId?: number
    organizationId?: number
  }
}

const groupService = {
  getGroups: async ({ subscriptionId, params }: GetGroupsArgs) => {
    const id = subscriptionId ? `?subscriptionId=${subscriptionId}` : ''
    const { data } = await api.get<ResponseGroups>(`${PLATFORM_URL_CLASSROOM}/classrooms${id}`, {
      id: 'groupService.getGroups',
      params,
    })

    return data.content
  },

  getMyClassrooms: async () => {
    const { data } = await api.get<ResponseGroups>(
      `${PLATFORM_URL_CLASSROOM}/classrooms/my-classrooms`,
      { id: 'groupService.getMyClassrooms' },
    )

    return data.content
  },

  getGroupById: async (id: number) => {
    const { data } = await api.get<GroupById>(`${PLATFORM_URL_CLASSROOM}/classrooms/${id}/report`, {
      id: 'groupService.getGroupById',
    })

    return data
  },

  createGroup: async (id: number, newGroup: NewGroup) => {
    const { data } = await api.post<GroupById>(
      `${PLATFORM_URL_CLASSROOM}/organizations/${id}/classrooms`,
      newGroup,
      { id: 'groupService.createGroup' },
    )

    return data
  },

  editGroup: async (id: number, group: EditGroup) => {
    const { data } = await api.put<GroupById>(`${PLATFORM_URL_CLASSROOM}/classrooms/${id}`, group, {
      id: 'groupService.editGroup',
    })

    return data
  },

  deleteUser: async (classroomId: number, memberId: number) =>
    api.delete(`${PLATFORM_URL_CLASSROOM}/classrooms/${classroomId}/members/${memberId}`, {
      id: 'groupService.deleteUser',
    }),

  deleteGroup: async (id: number) =>
    api.delete(`${PLATFORM_URL_CLASSROOM}/classrooms/${id}`, { id: 'groupService.deleteGroup' }),

  addUserToGroup: async (data: AddUserForm) =>
    api.post(`${PLATFORM_URL_CLASSROOM}/classrooms/members`, data, {
      id: 'groupService.addUserToGroup',
    }),
}

export default groupService
