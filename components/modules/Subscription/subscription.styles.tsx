import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const SubscriptionStyles = css`
  .subscriptions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .subscription__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .subscription__card__header {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
  .subscription__card {
    background-color: ${colors.neutrals.white};
    padding: 1.5rem;
    border-radius: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    height: fit-content;
  }

  // DETAILS
  .details__list,
  .product__list,
  .billing__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .details__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .pill {
    padding: 0.25rem 0.75rem;
    color: ${colors.neutrals.white};
    background-color: ${colors.semantic.success};
    border-radius: 1rem;
    text-transform: capitalize;
  }
  .pill--active {
    background-color: ${colors.semantic.success};
  }
  .pill--inactive {
    background-color: ${colors.semantic.danger};
  }

  // PRODUCT

  .product__access {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  // BILLING
  .billing__card {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: 100%;
  }

  .billing__card__state {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 1rem;
    flex-shrink: 0;
  }

  .state--success {
    background-color: ${colors.semantic.success};
  }
  .state--error {
    background-color: ${colors.semantic.danger};
  }
  .state--warning {
    background-color: ${colors.semantic.warning};
  }

  .fill {
    flex: 1;
  }
  .clamp {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .capitalize {
    text-transform: capitalize;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .subscription__card {
      padding: 2rem;
    }

    .details__item {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .subscription__content {
      flex-direction: row;
    }
  }
`
