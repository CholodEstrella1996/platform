import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './announcement.messages'
import { AnnouncementProps } from './announcement.model'
import { AnnouncementGlobalStyles, AnnouncementStyles } from './announcement.styles'
import AnnouncementTable from './components/AnnouncementTable'
import Header from './components/Header'

export const AnnouncementComponent = ({
  announcements,
  onSearch,
  onClickHelper,
  isLoading,
  getAnnouncements,
  groupName,
}: AnnouncementProps) => {
  const intl = useIntl()
  const { mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const isGroupMobile = !isTablet && groupName !== 'undefined'

  return (
    <>
      <Header
        title={isGroupMobile ? groupName : intl.formatMessage(messages.announcement.header.title)}
        getAnnouncements={getAnnouncements}
      />
      <AnnouncementTable
        isLoading={isLoading}
        announcements={announcements}
        pageChange={(newPage: number) => void onClickHelper(newPage)}
        onSearch={onSearch}
        getAnnouncements={getAnnouncements}
      />
      <style jsx>{AnnouncementStyles}</style>
      <style jsx global>
        {AnnouncementGlobalStyles}
      </style>
    </>
  )
}
