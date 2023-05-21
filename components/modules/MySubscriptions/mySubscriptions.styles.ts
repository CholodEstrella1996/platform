import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme
export const MySubscriptionsStyles = css`
  .subscriptions__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    row-gap: 1rem;
    column-gap: 2rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .subscriptions__container {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`
