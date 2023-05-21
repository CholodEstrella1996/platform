import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const ErrorCardStyles = css`
  .error-card {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }
  .error-card__image {
    text-align: center;
  }
  .error-card__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .error-card {
      grid-template-columns: 1fr 1fr;
      padding: 0 2rem;
    }
    .error-card__content {
      align-items: flex-start;
      text-align: start;
    }
  }
`
