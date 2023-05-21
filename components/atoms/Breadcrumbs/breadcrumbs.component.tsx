import React, { useEffect, useState } from 'react'

import { HomeOutline } from '@easy-eva-icons/react'
import { Breadcrumbs as MUIBreadcrumbs, Link } from '@mui/material'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { CRUMBS, urlKeycloak } from './breadcrumbs.pages'
import { BreadcrumbsLocalStyles } from './breadcrumbs.styles'

type Crumb = { name: string; href: string; hasTranslation?: boolean }

const { mediaQueries, colors } = theme

const Breadcrumbs = () => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const router = useRouter()
  const [crumb, setCrumb] = useState<Crumb[]>([])

  const realPath = router.asPath.split('/').filter((path) => path)
  const dynamicPath = router.pathname.split('/').filter((path) => path)

  const translatedPath = (name: string) => CRUMBS[name as keyof typeof CRUMBS]
  const lastItem = (index: number) => index === crumb.length - 1
  const splittedPath = (name: string) => name.split('-')?.at(0)

  const addCrumbs = () => {
    const breadcrumbs = dynamicPath
      .map((name, index) => {
        if (splittedPath(name) === 'detail')
          return {
            name: decodeURI(realPath[index + 2]),
            href: `/${realPath.slice(0, index + 3).join('/')}`,
          }
        return {
          name,
          href: `/${realPath.slice(0, index + 1).join('/')}`,
          hasTranslation: true,
        }
      })
      .filter((item) => item.name.charAt(0) !== '[')
    setCrumb(breadcrumbs)
  }

  const onPush = (href?: string) => {
    const path = href || '/'
    void router.push(path)
  }

  useEffect(() => addCrumbs(), [])
  if (!isTablet || !crumb.length) return null
  return (
    <>
      <MUIBreadcrumbs aria-label="breadcrumb" className="breadcrumbs__content">
        <Link onClick={() => onPush()} className="navigation__link link--icon">
          <HomeOutline fontSize={16} />
        </Link>
        {crumb.map(({ name, href, hasTranslation }, index) => {
          if (lastItem(index)) return null
          return (
            <Link
              key={name}
              onClick={() => onPush(href)}
              className={`navigation__link ${lastItem(index) ? 'navigation__link--lastUrl' : ''}`}
              underline="none">
              <Typography variant="c1" color={colors.neutrals[300]}>
                {(hasTranslation && intl.formatMessage(translatedPath(name))) ||
                  name.split(urlKeycloak).shift()}
              </Typography>
            </Link>
          )
        })}
      </MUIBreadcrumbs>
      <style jsx>{BreadcrumbsLocalStyles}</style>
    </>
  )
}

export default Breadcrumbs
