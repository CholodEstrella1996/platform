import { useState } from 'react'

import { Plus, Search } from '@easy-eva-icons/react'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import Filter from 'components/molecules/Filter'
import { InputProps } from 'components/molecules/Filter/filter.model'
import NewAnnouncement from 'components/molecules/NewAnnouncementModal'
import TableDataAnnouncement from 'components/molecules/TableDataAnnouncement'
import { DataRow } from 'components/molecules/TableDataAnnouncement/tableDataAnnouncement.model'
import { GROUP_PERMISSIONS, MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { PROFILES } from 'constants/profiles'
import { TIME_ZONE_UTC } from 'constants/timeZone'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'
import { Status } from 'services/models/client.model'

import { AnnouncementTableStyles, AnnouncementTableGlobalStyles } from './announcementTable.styles'
import messages from '../../announcement.messages'
import { AnnouncementTableProps } from '../../announcement.model'

const { groupAnnouncement } = GROUP_PERMISSIONS
const { institutionAnnouncement } = MY_INSTITUTION_PERMISSIONS

export const AnnouncementTableComponent = ({
  announcements,
  pageChange,
  onSearch,
  getAnnouncements,
  isLoading,
}: AnnouncementTableProps) => {
  const [openNewNotice, setOpenNewNotice] = useState(false)
  const { content, totalElements, number, size } = announcements
  const { colors, mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const { permissions } = useAppContext()
  const [createGroupAnnouncementAuth] = [permissions[groupAnnouncement.create]]
  const [createInstitutionAnnouncementAuth] = [permissions[institutionAnnouncement.create]]

  const dataInput: InputProps = {
    name: 'search',
    label: String(intl.formatMessage(messages.announcement.search.label)),
    placeholder: String(intl.formatMessage(messages.announcement.search.placeholder)),
    isClearable: true,
    iconPosition: 'left',
    size: 'small',
    icon: <Search />,
    visible: true,
  }

  const getRoles = (roles: Status[]) => {
    const roleArray = roles.map((elem) =>
      intl.formatMessage(PROFILES[elem.name.split('-')[1] as keyof typeof PROFILES]),
    )
    const addressees = roleArray.join(', ')
    return addressees.charAt(0).toUpperCase() + addressees.slice(1)
  }

  const formattedAnnouncements: DataRow[] = content.map((notice) => ({
    ...notice,
    affair: notice.subject,
    message: notice.message,
    shippingDate: intl.formatDate(notice.sendDate, { timeZone: TIME_ZONE_UTC }),
    recipientRoles: notice.classroom ? '' : getRoles(notice.recipientRoles),
  }))

  return (
    <>
      <div className="announcementTable__card">
        <div className="announcementTable__card__header">
          <span>
            <Typography variant="h6" color={colors.primary[500]}>
              {intl.formatMessage(messages.announcement.header.title)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.announcement.header.loaded, {
                quantity: totalElements,
              })}
            </Typography>
          </span>
          <div className="header__icons">
            {isTablet && (createGroupAnnouncementAuth || createInstitutionAnnouncementAuth) && (
              <Button
                icon={<Plus fontSize={24} />}
                iconPosition="left"
                size="medium"
                onClick={() => setOpenNewNotice(true)}>
                {intl.formatMessage(messages.announcement.menu.new)}
              </Button>
            )}
          </div>
        </div>
        <div className="announcementTable__card__body">
          <Filter input={dataInput} onSearch={onSearch} />
          <div className="announcementTable__card__table">
            <TableDataAnnouncement
              isLoading={isLoading}
              rows={formattedAnnouncements}
              totalElements={totalElements}
              pageSize={size}
              activePage={number}
              pageChange={pageChange}
            />
          </div>
        </div>
      </div>
      {openNewNotice && (
        <NewAnnouncement
          openNewNotice={openNewNotice}
          onClose={() => setOpenNewNotice(!openNewNotice)}
          getAnnouncements={getAnnouncements}
        />
      )}
      <style jsx>{AnnouncementTableStyles}</style>
      <style jsx global>
        {AnnouncementTableGlobalStyles}
      </style>
    </>
  )
}
