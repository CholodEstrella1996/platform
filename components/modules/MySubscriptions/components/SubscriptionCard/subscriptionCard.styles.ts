import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const SubscriptionCardStyles = css`
  .card__container,
  .name__type,
  .status__link {
    all: unset;
    display: flex;
    align-items: center;
  }

  .card__container {
    justify-content: space-between;
    gap: 0.5rem;
    padding: 2rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
    cursor: pointer;
  }

  .card__container:hover {
    background-color: ${colors.neutrals[100]};
  }

  .name__type {
    gap: 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container {
      gap: 0;
    }
  }
`
