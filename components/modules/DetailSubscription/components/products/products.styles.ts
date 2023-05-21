import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const productsStyles = css`
  .product__container {
    display: grid;
    gap: 1rem;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .cart__products__items {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    width: calc(100% - 0.5rem);
    background-color: ${colors.neutrals[50]};
    border-radius: 1rem;
    overflow: hidden;
    flex-shrink: 0;
    height: max-content;
  }

  .item__info {
    display: flex;
    gap: 1rem;
    flex: 1;
    justify-content: start;
    align-items: center;
  }

  .item__info__avatar {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    flex-shrink: 0;
    overflow: hidden;
  }

  .item__info__avatar :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .item__info__title {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }

  .item__info__title :global(.capitalized) {
    text-transform: capitalize;
  }

  .info__title {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .item__info__avatar {
      width: 4rem;
      height: 4rem;
    }
  }
`
