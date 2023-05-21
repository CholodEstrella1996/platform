import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import { InviteResponse, InviteRequest } from 'services/models/invite.model'

import api from '../api.client'

const inviteService = {
  newInvite: async (dataInvite: InviteRequest) => {
    await api.post<InviteResponse>(`${PLATFORM_URL_CLASSROOM}/organizations/invites`, dataInvite, {
      id: 'inviteService.newInvite',
    })
  },
}

export default inviteService
