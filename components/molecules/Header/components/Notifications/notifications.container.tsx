import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { Notifications } from 'services/models/announcement.model'
import announcementService from 'services/modules/announcement'

import { NotificationsComponent } from './notifications.component'
import messages from '../../header.messages'

type NotificactionContainerProp = {
  message?: string
}

export const NotificationContainer = ({ message }: NotificactionContainerProp) => {
  const [notifications, setNotifications] = useState<Notifications[]>()
  const { onError } = useNotification()
  const intl = useIntl()

  const getNotificactions = async () => {
    try {
      const data = await announcementService.getNotificactions()
      setNotifications(data.content)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetNotifications error >>: ', error)
      onError(intl.formatMessage(messages.notifications.getNotificationError))
    }
  }

  const markAsRead = async (id: number) => {
    try {
      await announcementService.readNotification(id)
      void getNotificactions()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('PatchAnnouncement error >>: ', error)
      onError(intl.formatMessage(messages.notifications.readAnnouncementError))
    }
  }

  useEffect(() => {
    void getNotificactions()
  }, [])

  if (!notifications) return null
  return (
    <NotificationsComponent
      notices={notifications}
      message={message}
      markAsRead={(id) => void markAsRead(id)}
    />
  )
}
