import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import { HeaderTitleStyles } from './headerTitle.styles'

type TitleProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

const { colors, mediaQueries } = theme

export const HeaderTitleComponent = ({ title, subtitle, children }: TitleProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  return (
    <>
      <div className="header">
        <div className="header__title">
          <Typography variant={isTablet ? 'h3' : 'h4'} color={colors.primary[500]}>
            {title}
          </Typography>
          {!!subtitle && (
            <Typography variant={isTablet ? 'h6' : 'p2'} color={colors.neutrals[300]}>
              {subtitle}
            </Typography>
          )}
        </div>
        {children && <div className="header__buttons">{children}</div>}
      </div>
      <style jsx>{HeaderTitleStyles}</style>
    </>
  )
}
