import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const LaboratoriesLocalStyles = css`
  .laboratories__page,
  .filters__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .laboratories__header__right {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .laboratories__page :global(.filter__input) {
    width: 100%;
  }

  .filters__container {
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    width: 100%;
  }

  .filter__label {
    display: flex;
    flex-shrink: 0;
    width: fit-content;
    height: 1.5rem;
    padding: 0;
  }

  .laboratory__cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    padding-top: 2rem;
  }

  .cards__grid {
    display: grid;
    gap: 2rem;
    width: 100%;
  }

  .laboratory__cards__empty {
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
  }

  .laboratory__cards :global(.laboratory__cards__pagination) {
    display: flex;
    justify-content: flex-end;
    border-bottom: none;
    color: ${colors.neutrals[400]};
    width: 100%;
  }

  .laboratories__page :global(.explore__button) {
    display: flex;
    justify-content: center;
    padding-top: 1rem;
  }

  .laboratory__cards :global(.spinner__container) {
    position: inherit;
    height: 17rem;
    background-color: transparent;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .filters__container {
      flex-direction: row;
      align-items: flex-end;
      gap: 1.5rem;
      width: 100%;
    }

    .filter__label {
      height: 3rem;
      padding: 0.75rem 0 0;
    }

    .cards__grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .laboratory__cards :global(.spinner__container) {
      height: 43rem;
    }

    .laboratories__header__right {
      grid-template-columns: 1fr 1.5fr;
    }
  }
`
