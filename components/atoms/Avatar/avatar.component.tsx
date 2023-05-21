import { ReactNode } from 'react'

import Image, { StaticImageData } from 'next/image'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { avatarStyles } from './avatar.styles'

const { colors } = theme

export type AvatarProps = {
  name?: string
  color?: string
  image?: string | StaticImageData
  icon?: ReactNode
  size?: 'small' | 'medium' | 'large' | 'fill'
}

export const Avatar = (props: AvatarProps) => {
  const { name = ' ', color = colors.neutrals[100], image, icon = null, size = 'medium' } = props

  const containerStyles = { backgroundColor: icon || !image ? color : 'transparent' }
  const firstLetter = name.charAt(0).toUpperCase()

  if (icon) {
    return (
      <div className={`avatar avatar--${size}`} style={containerStyles}>
        <div className="avatar__icon">{icon}</div>

        <style jsx>{avatarStyles}</style>
      </div>
    )
  }

  if (image) {
    return (
      <div className={`avatar avatar--${size}`} style={containerStyles}>
        <Image src={image} alt="avatar" layout="fill" className="avatar__image" />

        <style jsx>{avatarStyles}</style>
      </div>
    )
  }

  return (
    <div className={`avatar avatar--${size}`} style={containerStyles}>
      <div className="avatar__text">
        <Typography
          variant={size === 'small' ? 's2' : 'h2'}
          weight="regular"
          color={colors.neutrals.white}>
          {firstLetter}
        </Typography>
      </div>

      <style jsx>{avatarStyles}</style>
    </div>
  )
}
