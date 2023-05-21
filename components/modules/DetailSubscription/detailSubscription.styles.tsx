import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const DetailSubscriptionStyles = css`
  .suscription__content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 0.5rem;
  }
  .subscription__details,
  .products__details {
    max-width: 100%;
    height: max-content;
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
    background-color: ${colors.neutrals.white};
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .subscription__details {
    order: 1;
    height: fit-content;
  }
  .products__details {
    order: 2;
    min-height: 10rem;
    max-height: 80vh;
  }

  .subscription__header {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .details__title {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    align-items: center;
  }

  ul.access__info {
    display: grid;
    gap: 1rem;
    list-style: none;
  }

  ul.access__info li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .detail-subscription :global(.buttonComponent__outlined.buttonWithIconLeft__medium) {
    padding: 0.65rem 1rem;
  }

  .header {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    align-items: center;
  }
  .header__title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
  .header__buttons {
    display: flex;
    width: fit-content;
    gap: 1rem;
    align-items: center;
  }

  .header__buttons :global(button.buttonWithIconLeft__medium) {
    padding: 0.75rem 1rem 0.75rem 0.75rem;
    height: inherit;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .subscription__header {
      flex-direction: row;
    }

    .header {
      align-items: flex-end;
    }

    .header__buttons {
      align-items: flex-end;
    }

    .suscription__content {
      grid-template-columns: 2fr 1fr;
    }
    .subscription__details {
      order: 2;
    }

    .products__details {
      order: 1;
      max-height: 50vh;
    }
  }
`
