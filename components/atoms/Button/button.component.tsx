/* eslint-disable react/button-has-type */
import React from 'react'

import { CircularProgress, CircularProgressProps } from '@mui/material'

import { Typography } from 'components/atoms/Typography'

import { buttonStyles } from './button.styles'

type Variant = 'contained' | 'outlined' | 'white' | 'outlinedWhite'

const spinnerColor: { [key in Variant]: CircularProgressProps['color'] } = {
  contained: 'inherit',
  outlined: 'primary',
  white: 'primary',
  outlinedWhite: 'inherit',
}

export type ButtonProps = {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  variant?: Variant
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  onClick?: React.MouseEventHandler
  children?: string
  className?: string
  loading?: boolean
  fullWidth?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    icon = null,
    iconPosition = 'left',
    size = 'small',
    variant = 'contained',
    disabled = false,
    type = 'button',
    onClick,
    children,
    className = '',
    loading,
    fullWidth = false,
  } = props

  const fullWidthStyles = fullWidth ? 'buttonComponent__fullWidth' : ''
  const leftStyles = icon && iconPosition === 'left' ? `buttonWithIconLeft__${size}` : ''
  const rightStyles = icon && iconPosition === 'right' ? `buttonWithIconRight__${size}` : ''
  const styles = `buttonComponent buttonComponent__${size} buttonComponent__${variant} ${leftStyles} ${rightStyles} ${fullWidthStyles}`

  return (
    <div className={`container ${className} ${fullWidthStyles}`}>
      <button type={type} className={styles} onClick={onClick} disabled={disabled}>
        <div className="buttonComponent__content">
          {iconPosition === 'left' && (
            <div className="buttonIcon buttonIcon--left">
              {!loading ? (
                icon
              ) : (
                <CircularProgress
                  disableShrink
                  size={20}
                  thickness={5}
                  color={spinnerColor[variant]}
                  style={{ marginRight: '0.25rem' }}
                />
              )}
            </div>
          )}

          <Typography variant="p1" weight="bold">
            {children}
          </Typography>

          {!!icon && iconPosition === 'right' && (
            <div className="buttonIcon buttonIcon--right">{icon}</div>
          )}
        </div>
      </button>

      <style jsx>{buttonStyles}</style>
    </div>
  )
}
