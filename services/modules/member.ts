import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import { ClientResponse } from 'services/models/client.model'
import { ApiRequestMember } from 'services/models/responseBase.model'
import { downloadBlob } from 'utils/helpers/downloadBlob'
import { queryParamsRole } from 'utils/helpers/queryParams'

import { MemberResponse, MemberStatusResponse } from '../models/member.model'

const memberService = {
  getMembers: async (id: number, paramsRequest: ApiRequestMember) => {
    const { data } = await api.get<MemberResponse>(
      `${PLATFORM_URL_CLASSROOM}/organizations/${id}/members?${queryParamsRole(paramsRequest)}`,
      { id: 'memberService.getMembers' },
    )

    return data
  },

  downloadMembersList: async (id: number, paramsRequest: ApiRequestMember) => {
    const { data } = await api.get(
      `${PLATFORM_URL_CLASSROOM}/organizations/${id}/members?${queryParamsRole(paramsRequest)}`,
      {
        id: 'memberService.downloadMembersList',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Accept: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        },
        responseType: 'blob',
      },
    )
    const blob: Blob = data
    downloadBlob(blob, paramsRequest.role.replace('organization-', ''), 'xlsx')
  },

  getMemberById: async (organizationId: number, id: number) => {
    const { data } = await api.get<ClientResponse>(
      `${PLATFORM_URL_CLASSROOM}/organizations/${organizationId}/members/${id}`,
      { id: 'memberService.getMemberById' },
    )

    return data
  },

  deleteMember: (organizationId: number, id: number) =>
    api.delete<ClientResponse>(
      `${PLATFORM_URL_CLASSROOM}/organizations/${organizationId}/members/${id}`,
      { id: 'memberService.deleteMember' },
    ),

  getMembersStatus: async () => {
    const { data } = await api.get<MemberStatusResponse>(
      `${PLATFORM_URL_CLASSROOM}/members/status`,
      { id: 'memberService.getMembersStatus' },
    )

    return data.content
  },

  updateMember: (organizationId: number, id: number, member: FormData) =>
    api.put<ClientResponse>(
      `${PLATFORM_URL_CLASSROOM}/organizations/${organizationId}/members/${id}`,
      member,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
        id: 'memberService.updateMember',
      },
    ),
}

export default memberService
