import { ReactNode } from 'react'

import { CssVariables } from './themeProvider.models'
import { themeProviderStyles } from './themeProvider.styles'
import { getColors, getGradients, getTypography } from './themeProvider.utils'

const cssVariables: CssVariables = { ...getTypography(), ...getColors(), ...getGradients() }

export type ThemeProviderProps = {
  children?: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <div style={cssVariables}>
    {children}

    <style jsx global>
      {themeProviderStyles}
    </style>
  </div>
)
