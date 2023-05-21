import { Status as Recipients } from './client.model'
import { BaseResponse } from './responseBase.model'

type ResponseAnnouncement = BaseResponse & {
  content: Announcement[]
}

type Announcement = {
  id: number
  subject: string
  message: string
  senderFullName: string
  classroom: {
    id: number
    name: string
    description: string
  }
  recipientRoles: Recipients[]
  sendDate: Date
}

type PostAnnouncement = {
  message: string
  subject: string
  senderFullName: string
  recipientRoles: string[]
  recipientClassroomId: number
}

type NotificactionResponse = BaseResponse & {
  content: Notifications[]
}

type Notifications = {
  id: number
  subject: string
  message: string
  sendDate: string
  senderFullName: string
  classroom: {
    id: number
    name: string
    description: string
  }
}

export type {
  ResponseAnnouncement,
  Announcement,
  NotificactionResponse,
  Notifications,
  PostAnnouncement,
}
