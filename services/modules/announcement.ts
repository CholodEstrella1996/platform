import { PLATFORM_URL_CLASSROOM } from 'constants/urls.constants'
import api from 'services/api.client'
import {
  Announcement,
  NotificactionResponse,
  PostAnnouncement,
  ResponseAnnouncement,
} from 'services/models/announcement.model'
import { ApiRequest } from 'services/models/responseBase.model'
import { queryParams } from 'utils/helpers/queryParams'

const announcementService = {
  getAnnouncements: async (paramsRequest: ApiRequest) => {
    const { data } = await api.get<ResponseAnnouncement>(
      `${PLATFORM_URL_CLASSROOM}/announcements?${queryParams(paramsRequest)}`,
      { id: 'announcementService.getAnnouncements' },
    )

    return data
  },

  getNotificactions: async () => {
    const { data } = await api.get<NotificactionResponse>(
      `${PLATFORM_URL_CLASSROOM}/announcements/inbox`,
      { id: 'announcementService.getNotificactions' },
    )

    return data
  },

  getAnnouncementDetail: async (id: number) => {
    const { data } = await api.get<Announcement>(`${PLATFORM_URL_CLASSROOM}/announcement/${id}`, {
      id: 'announcementService.getAnnouncementDetail',
    })

    return data
  },

  sendAnnouncement: async (notice: PostAnnouncement) =>
    api.post(`${PLATFORM_URL_CLASSROOM}/organizations/announcements`, notice, {
      id: 'announcementService.sendAnnouncement',
    }),

  readNotification: async (id: number) =>
    api.patch(`${PLATFORM_URL_CLASSROOM}/announcements/${id}/is-read`, undefined, {
      id: 'announcementService.readNotification',
    }),
}

export default announcementService
