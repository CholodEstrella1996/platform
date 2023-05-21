import { useEffect, useState } from 'react'

import Router from 'next/router'
import { useIntl } from 'react-intl'

import ModalSpinner from 'components/atoms/ModalSpinner'
import { useNotification } from 'hooks/notification'
import { Announcement } from 'services/models/announcement.model'
import announcementService from 'services/modules/announcement'

import { NoticeDetail } from './noticeDetail.component'
import messages from '../../announcement.messages'

type Prop = {
  idAnnouncement: number
  openModal: (value: boolean) => void
}
const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '11.5rem',
  minWidth: '13.75rem',
}
export const NoticeDetailContainer = ({ idAnnouncement, openModal }: Prop) => {
  const [noticeDetail, setNoticeDetail] = useState<Announcement>()
  const [isLoading, setIsLoading] = useState(false)
  const intl = useIntl()
  const isFromGroup = !!Router.query['id-group']
  const { onError } = useNotification()

  const getNoticeDetail = async (id: number) => {
    setIsLoading(true)
    try {
      const detail = await announcementService.getAnnouncementDetail(id)
      setNoticeDetail(detail)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetNoticeDetail error >>: ', error)
      onError(intl.formatMessage(messages.announcement.getNoticeDetailError))
      openModal(false)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    void getNoticeDetail(idAnnouncement)
  }, [])

  if (isLoading) return <ModalSpinner style={spinnerStyle} />
  if (!noticeDetail) return null
  return <NoticeDetail noticeDetail={noticeDetail} isFromGroup={isFromGroup} />
}
