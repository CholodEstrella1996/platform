import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { textIconStyles } from './textIcon.styles'

const { colors } = theme

export type TextIconProps = {
  id: string
  icon?: string
  text: string

  size?: 'small' | 'medium' | 'large'

  colorAvatar?: string

  onClick?: React.MouseEventHandler

  className?: string
}

export const TextIcon = (props: TextIconProps) => {
  const {
    id,
    icon,
    text,

    size = 'small',

    colorAvatar,

    onClick = () => {},

    className,
  } = props

  const buttonStyles = `buttonIconText__${size}`
  const typographyStyles = `text__margin--${size}`

  return (
    <div className={className}>
      <div className="textIcon__container">
        <button type="button" className={`buttonIconText ${buttonStyles}`} onClick={onClick}>
          <Avatar name={id} size={size} image={icon} color={colorAvatar} />

          <Typography
            variant={size === 'large' ? 'h5' : 's2'}
            weight={size === 'large' ? 'bold' : 'semibold'}
            color={size === 'large' ? `${colors.neutrals[500]}` : `${colors.neutrals[400]}`}
            className={typographyStyles}>
            {text}
          </Typography>
        </button>
      </div>

      <style jsx>{textIconStyles}</style>
    </div>
  )
}
