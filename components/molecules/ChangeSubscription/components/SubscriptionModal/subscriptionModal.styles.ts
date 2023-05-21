import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const SubscriptionModalStyles = css`
  .subscription__modal,
  .subscription__products {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .subscription__modal {
    max-height: 24rem;
    height: 24rem;
  }
  .subscription__products {
    overflow: auto;
  }
  .subscription__modal :global(.subscription__type),
  .subscription__products {
    padding: 1rem;

    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
  }

  .subscription__products :global(.products__titles) {
    margin-bottom: 1rem;
  }

  .subscription__products :global(.areaLabTopic__name) {
    padding: 0.75rem 1rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 2rem;
    margin-bottom: 0.5rem;
  }
`
