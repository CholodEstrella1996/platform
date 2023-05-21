import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const GroupStyles = css`
  .groups__content {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .dialog-container {
    background-color: ${colors.mathematics[100]};
    border-radius: 2rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .groups__content {
      grid-template-columns: repeat(2, 1fr);
    }

    .group__list :global(.subscription__select #subscriptionId) {
      width: 14.5rem;
    }

    .card__container :global(.group__name p) {
      -webkit-line-clamp: 1;
    }
  }
`
