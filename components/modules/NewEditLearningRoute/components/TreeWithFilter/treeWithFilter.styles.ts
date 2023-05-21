import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
const localStyles = css``
const globalStyles = css.global`
  .filters__container .card__filter {
    padding: 1rem 0;
    width: 100%;
  }
  .treeLabs__container {
    background-color: ${colors.neutrals.white};
    padding: 1rem;
    border-radius: 1rem;
    height: 23rem;
    overflow-y: auto;
  }

  .treeLabs__container .MuiBox-root {
    height: auto;
    padding-top: 1rem;
  }
`
export { localStyles, globalStyles }
