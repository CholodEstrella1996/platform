import { useState } from 'react'

import { Plus } from '@easy-eva-icons/react'
import { IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import BreadCrumbs from 'components/atoms/Breadcrumbs'
import HeaderTitle from 'components/atoms/HeaderTitle'
import MoreMenu from 'components/atoms/MoreMenu'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import NewAnnouncement from 'components/molecules/NewAnnouncementModal'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from '../../announcement.messages'

type Props = {
  title: string
  getAnnouncements: (numberPage: number, classroomId: number) => Promise<void>
}

export const Header = ({ title, getAnnouncements }: Props) => {
  const [openNewNotice, setOpenNewNotice] = useState(false)
  const { colors, mediaQueries } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  return (
    <>
      {isTablet && <BreadCrumbs />}
      <HeaderTitle title={title}>
        {!isTablet && (
          <MoreMenu>
            <IconButton onClick={() => setOpenNewNotice(true)} className="action__buttons">
              <Plus fontSize={24} color={colors.neutrals[400]} />
              <Typography variant="s1" color={colors.neutrals[400]}>
                {intl.formatMessage(messages.announcement.menu.new)}
              </Typography>
            </IconButton>
          </MoreMenu>
        )}
        {openNewNotice && (
          <NewAnnouncement
            openNewNotice={openNewNotice}
            onClose={() => setOpenNewNotice(!openNewNotice)}
            getAnnouncements={getAnnouncements}
          />
        )}
      </HeaderTitle>
    </>
  )
}
