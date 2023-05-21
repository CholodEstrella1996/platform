import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const FilterStyles = css`
  .filters__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: ${colors.neutrals.white};
    padding: 1rem;
    border-radius: 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .filters__container {
      flex-direction: row;
      background-color: inherit;
      padding: 0;
    }
    .filters__container :global(.select__container) {
      width: 100%;
    }
  }
`
