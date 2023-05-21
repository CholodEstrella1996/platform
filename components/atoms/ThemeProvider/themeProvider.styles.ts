import css from 'styled-jsx/css'

import { theme } from './themeProvider.constants'

export const themeProviderStyles = css.global`
  @import url(${theme.typography.src});

  html,
  body {
    font-family: ${theme.typography.name};
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`
