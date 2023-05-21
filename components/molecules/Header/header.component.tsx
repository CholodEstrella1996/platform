import { theme } from 'components/atoms/ThemeProvider'

import HeaderDesktopComponent from './components/HeaderDesktop'
import HeaderMobileComponent from './components/HeaderMobile'
import { useMediaQuery } from '../../../hooks/use-media-query'

const { mediaQueries } = theme
const Header = () => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return isTablet ? <HeaderDesktopComponent /> : <HeaderMobileComponent />
}

export default Header
