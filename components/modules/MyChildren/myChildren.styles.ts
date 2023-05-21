import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const MyChildrenLocalStyles = css`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 3rem 0 2rem;
  }

  .myChildren__card {
    background: ${colors.neutrals.white};
    padding: 1rem;
    width: 100%;
    min-height: 400px;
    margin: 0;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .myChildren__card__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .myChildren__card__body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .myChildren__card__filter {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    align-items: initial;
  }

  .myChildren__card__table {
    height: auto;
  }

  .mt-2 {
    margin-top: 1.375rem;
  }

  .button__container {
    display: flex;
    justify-content: center;
  }

  .tabPanel__card__filter {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
  }

  .tabPanel__card__filter :global(.input__filter .input__formControl) {
    padding: 0.66rem 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .myChildren__card {
      padding: 2rem;
    }

    .myChildren__card__filter {
      flex-direction: row;
      gap: 1rem;
    }

    .tabPanel__card__filter {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
  }

  :global(.input) {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
  }

  :global(.myChildren__buttons) {
    display: flex;
    gap: 1rem;
  }

  :global(.iconButton) {
    height: 2.5rem;
    width: fit-content;
    border-radius: 2rem;
    border: 2px solid ${colors.primary[500]};
    color: ${colors.primary[500]};
  }

  :global(.iconButton:hover) {
    border: 2px solid ${colors.primary[700]};
    color: ${colors.primary[700]};
  }
`
