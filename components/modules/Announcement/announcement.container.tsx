import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { ResponseAnnouncement } from 'services/models/announcement.model'
import { ApiRequest } from 'services/models/responseBase.model'
import announcementService from 'services/modules/announcement'

import { AnnouncementComponent } from './announcement.component'
import messages from './announcement.messages'
import { DataFilter } from './announcement.model'

const SIZE_PAGE = 10
export const AnnouncementContainer = () => {
  const [announcementData, setAnnouncementData] = useState<ResponseAnnouncement>()
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(0)
  const methods = useForm<DataFilter>({ mode: 'all' })
  const { handleSubmit } = methods
  const intl = useIntl()
  const { onError } = useNotification()
  const router = useRouter()
  const idGroup = Number(router.query['id-group'])
  const groupName = String(router.query['name-group'])
  const historyIndex = router.asPath.indexOf('announcement')
  const isGeneral = idGroup ? 0 : 1

  const getAnnouncements = async (
    numberPage: number,
    classroomId: number,
    dataFilter?: DataFilter,
  ) => {
    setIsLoading(true)
    const params: ApiRequest = {
      pageNumber: numberPage,
      pageSize: SIZE_PAGE,
      classroomId,
      general: isGeneral,
      ...(dataFilter?.search && { searchQuery: dataFilter?.search }),
    }

    try {
      const data = await announcementService.getAnnouncements(params)
      setAnnouncementData(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getAnnouncements error >>: ', error)
      onError(intl.formatMessage(messages.announcement.getAnnouncementsError))
      void router.push(router.asPath.slice(0, historyIndex - 1))
    }
    setIsLoading(false)
  }

  const onClickHelper = (page?: number, data?: DataFilter) => {
    void getAnnouncements(page ?? pageNumber, idGroup, data)
    if (page) setPageNumber(page)
  }

  const handleSearch: SubmitHandler<DataFilter> = async (data) => {
    onClickHelper(0, data)
  }

  useEffect(() => {
    void getAnnouncements(0, idGroup)
  }, [])

  if (!announcementData) return null
  return (
    <FormProvider {...methods}>
      <AnnouncementComponent
        isLoading={isLoading}
        announcements={announcementData}
        onSearch={handleSubmit(handleSearch)}
        onClickHelper={(page: number) => onClickHelper(page)}
        getAnnouncements={getAnnouncements}
        groupName={groupName}
      />
    </FormProvider>
  )
}
