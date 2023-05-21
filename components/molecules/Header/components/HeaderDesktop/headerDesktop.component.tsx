import React, { useMemo } from 'react'

import { ChevronRight } from '@mui/icons-material'
import { Divider } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import User from 'components/molecules/User'
import { DEFAULT_BRAND_IMG_PROPS } from 'constants/defaultStaticImages'
import { ANNOUNCEMENTS_PERMISSIONS } from 'constants/permissions'
import { PAGES } from 'constants/platformPages'
import { LANDING_PAGE_URL } from 'constants/urls.constants'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import HeaderDesktopStyles from './headerDesktop.styles'
import messages from '../../header.messages'
import Notifications from '../Notifications'

const { view } = ANNOUNCEMENTS_PERMISSIONS

const { colors, mediaQueries } = theme
const HeaderDesktopComponent = () => {
  const intl = useIntl()
  const router = useRouter()
  const isDesktop = useMediaQuery(mediaQueries.desktop)
  const { permissions } = useAppContext()
  const [announcementAuth] = [permissions[view]]

  const activeLink = useMemo(() => router.asPath.slice(0, 7), [router.asPath])

  return (
    <>
      <header className="navbar">
        <nav className="navbar__content">
          <div className="navbar__icon">
            <Link href="/dashboard">
              <a>
                <Image
                  src={DEFAULT_BRAND_IMG_PROPS.image}
                  alt={DEFAULT_BRAND_IMG_PROPS.alt}
                  width={242}
                  height={111}
                  layout="responsive"
                />
              </a>
            </Link>
          </div>
          <ul className="navbar__pages">
            {PAGES.filter((pages) => pages.url !== '/dashboard').map(
              ({ url, id, name, permission }) => {
                if (permission && !permissions[permission]) return null
                return (
                  <li className="navbar__pages__item" key={id}>
                    <Link href={url}>
                      <a>
                        <Typography
                          variant={isDesktop ? 's1' : 's2'}
                          color={
                            url.slice(0, 7) === activeLink
                              ? colors.primary[500]
                              : colors.neutrals[400]
                          }>
                          {intl.formatMessage(name)}
                        </Typography>
                      </a>
                    </Link>
                  </li>
                )
              },
            )}
          </ul>
          <div className="navbar__right">
            <a href={LANDING_PAGE_URL} target="_blank" rel="noreferrer">
              <Button
                icon={<ChevronRight sx={{ color: colors.primary[500] }} />}
                variant="outlined"
                type="button"
                size="small"
                iconPosition="right">
                {intl.formatMessage(messages.menu.button)}
              </Button>
            </a>
            <Divider orientation="vertical" flexItem />
            <div className="navbar__right__buttons">
              {announcementAuth && <Notifications />}
              <User />
            </div>
          </div>
        </nav>
      </header>
      <style jsx>{HeaderDesktopStyles}</style>
    </>
  )
}
export default HeaderDesktopComponent
