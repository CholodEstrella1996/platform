import { ChevronRight } from '@mui/icons-material'

import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardIconTitleProps } from './cardIconTitle.model'
import { CardIconTitleLocalStyles } from './cardIconTitle.styles'

const { colors } = theme

export const CardIconTitleComponent = (props: CardIconTitleProps) => {
  const { image, icon, iconBgColor, title, href } = props

  const hasLink = href !== undefined

  const content = (
    <div
      style={{
        '--hover-bg-color': hasLink ? colors.neutrals[100] : colors.neutrals.white,
        '--hover-cursor': hasLink ? 'pointer' : 'inherit',
      }}
      className="card__icon__title">
      <div
        className="card__picture"
        style={{ backgroundColor: iconBgColor ?? colors.neutrals[50] }}>
        <Avatar
          name={title}
          color={iconBgColor ?? colors.neutrals[50]}
          icon={!image && icon}
          image={image}
        />
      </div>

      <Typography variant="s1" color={colors.neutrals[400]}>
        {title}
      </Typography>

      {hasLink && <ChevronRight sx={{ color: colors.primary[500] }} />}

      <style jsx>{CardIconTitleLocalStyles}</style>
    </div>
  )

  if (!hasLink) return content
  return (
    <a href={href || '/'} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}
