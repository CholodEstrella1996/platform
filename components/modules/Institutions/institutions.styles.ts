import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme
export const InstitutionsStyles = css`
  .institutions__list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
    min-height: 33rem;
  }
  .institutions__list a {
    height: fit-content;
  }

  .institutions__container :global(.institutions__list__pagination) {
    display: flex;
    justify-content: flex-end;
    margin-top: 2rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .institutions__list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`
