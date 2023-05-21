import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const SuscriptionExpiredModalStyles = css.global`
  .demo__modal {
    position: absolute;
    width: calc(100vw - 1rem);
    height: auto;
    overflow: hidden;
    background-color: ${colors.neutrals[50]};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 1rem;
    gap: 2rem;
  }

  .demo__modal > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    height: fit-content;
    height: 100%;
  }

  .demo__close {
    display: flex;
    justify-content: flex-end;
    color: ${colors.neutrals[200]};
    cursor: pointer;
  }

  .demo__card__data {
    display: grid;
    padding: 0 1rem;
    gap: 1rem;
    align-items: center;
    align-content: center;
    text-align: center;
  }

  .demo__card__image {
    width: 100%;
    height: auto;
    position: relative;
  }

  .demo__card__image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .demo__card__text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .demo__card__buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    height: auto;
  }

  .demo__card__buttons > div.container,
  .demo__card__buttons > div.container > button {
    width: 100%;
  }

  .demo__card__buttons > div:first-child {
    order: 2;
  }
  .demo__card__buttons > div:last-child {
    order: 1;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .demo__modal {
      max-width: 80vw;
      height: auto;
      padding: 1.5rem;
    }

    .demo__demo__modal > div {
      gap: 2rem;
    }

    .demo__card__data {
      grid-template-columns: 1fr 1fr;
    }

    .demo__card__text {
      flex: 1;
      text-align: left;
    }

    .demo__card__buttons {
      flex-direction: row;
    }

    .demo__card__buttons > div.container,
    .demo__card__buttons > div.container > button {
      width: fit-content;
    }

    .demo__card__buttons > div:first-child {
      order: 1;
    }
    .demo__card__buttons > div:last-child {
      order: 2;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .demo__modal {
      max-width: 50rem;
    }
  }
`
