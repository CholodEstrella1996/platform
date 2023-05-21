import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const ChangeSubscriptionStyles = css`
  .card-subscription,
  .subscription__type,
  .subscription__text__type {
    display: flex;
    flex-direction: column;
  }

  .card-subscription {
    gap: 1rem;
  }

  .subscription__type {
    gap: 0.5rem;
    padding: 1rem;
    padding-left: 1.5rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 2rem;
  }
  .subscription__text__type {
    gap: 0.25rem;
    text-align: center;
  }

  .subscription__type :global(button) {
    width: 100%;
  }

  .subscription__spinner {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .subscription__type,
    .subscription__text__type {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    .subscription__type {
      justify-content: space-between;
    }
  }
`
