import { theme } from 'components/atoms/ThemeProvider'

import { Component, Variant, Weight } from './typography.models'
import { TypographyLocalStyles } from './typography.styles'

const { colors, gradients, typography } = theme

export type TypographyProps = {
  variant?: Variant
  component?: Component

  color?: string
  weight?: Weight

  className?: string
  children?: string | React.ReactNode
}

export const Typography = (props: TypographyProps) => {
  const { variant = 'h3', component, color = '', weight, className = '', children } = props

  const colorIsGradient = color?.includes('gradient')
  const colorIsHex = color?.startsWith('#')

  if (color && !(colorIsGradient || colorIsHex))
    throw new Error('Color must be a hex color or a gradient')

  const content =
    typeof children === 'string' && variant === 'label' ? children.toUpperCase() : children

  const baseProps = {
    className: `base ${variant} ${colorIsGradient ? 'isGradient' : 'isColor'}`,
    ...(weight && { style: { fontWeight: typography.weight[weight] } }),
  }

  const variants = {
    h1: <h1 {...baseProps}>{content}</h1>,
    h2: <h2 {...baseProps}>{content}</h2>,
    h3: <h3 {...baseProps}>{content}</h3>,
    h4: <h4 {...baseProps}>{content}</h4>,
    h5: <h5 {...baseProps}>{content}</h5>,
    h6: <h6 {...baseProps}>{content}</h6>,
    s1: <p {...baseProps}>{content}</p>,
    s2: <p {...baseProps}>{content}</p>,
    p1: <p {...baseProps}>{content}</p>,
    p2: <p {...baseProps}>{content}</p>,
    c1: <p {...baseProps}>{content}</p>,
    c2: <p {...baseProps}>{content}</p>,
    label: <p {...baseProps}>{content}</p>,

    div: <div {...baseProps}>{content}</div>,
    span: <span {...baseProps}>{content}</span>,
  }

  const CssVariables = {
    '--selected-color': color ?? colors.primary[500],
    '--selected-gradient': color ?? gradients.engineering,
  }

  return (
    <span style={CssVariables} className={`lib ${className}`}>
      {variants[component ?? variant]}

      <style jsx>{TypographyLocalStyles}</style>
    </span>
  )
}
