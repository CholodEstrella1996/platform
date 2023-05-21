import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { useMediaQuery } from './use-media-query'
import { UseMediaQueryStyles } from './use-media-query.compStyles'

const { mediaQueries } = theme
export const BasicuseMediaQuery = () => {
  const isDesktop = useMediaQuery(mediaQueries.desktop)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const isMobile = useMediaQuery(mediaQueries.mobile)

  return (
    <>
      <div className="use-media-query__container">
        <Typography variant="h4">
          Tamaño de Pantalla actual:
          {(isDesktop && ' Desktop') || (isTablet && ' Tablet') || (isMobile && ' Mobile')}
        </Typography>
        <Typography variant="s1" component="span">
          Ejemplo de uso:
          <pre>{JSON.stringify({ isDesktop, isTablet, isMobile }, null, 3)}</pre>
        </Typography>
      </div>
      <style jsx>{UseMediaQueryStyles}</style>
    </>
  )
}
