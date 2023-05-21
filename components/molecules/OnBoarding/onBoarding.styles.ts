import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const OnBoardingGlobalStyles = css.global`
  .onBoarding__modal {
    width: 100vw;
    height: 100vh;
    padding: 1rem;
    background-color: ${colors.neutrals[50]};
    outline: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    overflow-y: auto;
    border-radius: 0;
  }

  .onBoarding__modal > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    height: 100%;
  }

  .onBoarding__close {
    display: flex;
    justify-content: flex-end;
    color: ${colors.neutrals[200]};
    cursor: pointer;
  }

  .card__data {
    display: grid;
    gap: 1rem;
    align-items: center;
    align-content: center;
    text-align: center;
  }

  .card__image {
    width: 100%;
    height: 18rem;
    position: relative;
  }

  .card__image :global(img) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .card__text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card__text__capitalize {
    display: block;
  }
  .card__text__capitalize::first-letter {
    text-transform: uppercase;
  }

  .onBoarding__modal div :global(.onBoarding__stepper) {
    position: inherit;
    justify-items: center;
    background-color: transparent;
    box-shadow: none;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 2rem;
    grid-template-areas: 'column-2 column-2' 'column-1 column-3';
    padding-bottom: 1.5rem;
  }

  .button__back:nth-child(1) {
    grid-area: column-1;
  }
  .onBoarding__modal div :global(.onBoarding__stepper) > div:nth-child(2) {
    grid-area: column-2;
  }
  .button__next:nth-child(3) {
    grid-area: column-3;
  }

  .onBoarding__buttons {
    display: flex;
    justify-content: space-around;
  }

  .MuiMobileStepper-dotActive {
    background-color: ${colors.primary[500]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .onBoarding__modal {
      width: 80vw;
      height: auto;
      border-radius: 2rem;
      padding: 1.5rem;
    }

    .onBoarding__modal > div {
      gap: 2rem;
    }

    .card__data {
      grid-template-columns: 1fr 1fr;
      padding: 0 1rem;
    }

    .card__text {
      flex: 1;
      text-align: left;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .onBoarding__modal {
      width: 55vw;
    }
  }
`
