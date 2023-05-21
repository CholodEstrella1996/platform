import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme
const { alert } = colors

export const GlobalStyles = css.global`
  /* General */
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: ${typography.name}, sans-serif;
  }
  body {
    overscroll-behavior: none;
  }

  * {
    box-sizing: border-box;
    scrollbar-width: thin;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  /* Snackbar */
  .SnackbarItem-contentRoot,
  .SnackbarContent-root.SnackbarItem-contentRoot {
    font-family: ${typography.name}, sans-serif;
  }

  div .SnackbarItem-wrappedRoot > .SnackbarItem-variantSuccess {
    background-color: ${alert.success};
  }

  div .SnackbarItem-wrappedRoot > .SnackbarItem-variantError {
    background-color: ${alert.error};
  }

  div .SnackbarItem-wrappedRoot > .SnackbarItem-variantWarning {
    background-color: ${alert.warning};
  }

  /* Scrollbar */
  *::-webkit-scrollbar {
    width: 1rem;
  }

  *::-webkit-scrollbar-track {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${colors.neutrals[200]};
    border-radius: 2rem;
    background-clip: padding-box;
    border: 0.25rem solid transparent;
  }

  *::-webkit-scrollbar-thumb:hover {
    background-color: ${colors.neutrals[300]};
  }

  *::-webkit-scrollbar-thumb:active {
    background-color: ${colors.neutrals[400]};
  }

  *::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  .MuiBox-root {
    outline: none;
  }
`
