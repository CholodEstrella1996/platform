import React, { useMemo, useState } from 'react'

import { ChevronRight } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import MenuIcon from '@mui/icons-material/Menu'
import Divider from '@mui/material/Divider'
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

import HeaderMobileStyles from './headerMobile.styles'
import messages from '../../header.messages'
import Notification from '../Notifications'

const { view } = ANNOUNCEMENTS_PERMISSIONS
const { colors } = theme

const HeaderMobileComponent = () => {
  const router = useRouter()
  const intl = useIntl()
  const { permissions } = useAppContext()
  const [announcementAuth] = [permissions[view]]
  const [menuOpen, setMenuOpen] = useState(false)

  const activeLink = useMemo(() => router.asPath.slice(0, 7), [router.asPath])

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const pushNewPage = async (url: string): Promise<void> => {
    setMenuOpen(false)
    await router.push(url)
  }

  return (
    <>
      <header className="navbar__container__mobile">
        {menuOpen && (
          <div className="navbar__opened">
            <div className="navbar__header">
              <Typography
                className="navbar__header__title"
                variant="h6"
                color={colors.primary[500]}>
                {intl.formatMessage(messages.menu.title)}
              </Typography>
              <div className="navbar__header__icon">
                <CloseIcon sx={{ color: colors.primary[500] }} onClick={handleMenuClick} />
              </div>
            </div>
            <div className="navbar__header__divider">
              <Divider variant="middle" />
            </div>

            <div className="navbar__pages">
              <ul className="navbar__pages__wrapper">
                {PAGES.filter((pages) => pages.url !== '/dashboard').map(
                  ({ url, id, name, icon: Icon, permission }) => {
                    if (permission && !permissions[permission]) return null
                    return (
                      <li
                        className="navbar__pages__item"
                        key={id}
                        role="presentation"
                        onClick={() => {
                          void pushNewPage(url)
                        }}>
                        <Icon className="navbar__pages__mobileIcons" />
                        <Typography
                          variant="s1"
                          color={
                            url.slice(0, 7) === activeLink
                              ? colors.primary[500]
                              : colors.neutrals[400]
                          }>
                          {intl.formatMessage(name)}
                        </Typography>
                      </li>
                    )
                  },
                )}

                <li className="navbar__item__button">
                  <a href={LANDING_PAGE_URL} target="_blank" rel="noreferrer">
                    <Button
                      icon={<ChevronRight sx={{ color: colors.primary[500] }} />}
                      size="medium"
                      variant="outlined"
                      iconPosition="right">
                      {intl.formatMessage(messages.menu.button)}
                    </Button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}

        {!menuOpen && (
          <nav className="navbar__content">
            <div className="navbar__brand">
              <MenuIcon sx={{ color: colors.neutrals[300] }} onClick={handleMenuClick} />
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
            </div>

            <div className="navbar__content__right">
              {announcementAuth && <Notification />}
              <User />
            </div>
          </nav>
        )}
      </header>
      <style jsx>{HeaderMobileStyles}</style>
    </>
  )
}
export default HeaderMobileComponent
