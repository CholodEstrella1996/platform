import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const TabContentStyles = css`
  .tabPanel__card {
    background: ${colors.neutrals.white};
    padding: 1rem;
    width: 100%;
    min-height: 400px;
    margin: 0;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .tabPanel__card__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;
  }

  .tabPanel__card__body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
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
    padding-top: 0.66rem;
    padding-bottom: 0.66rem;
  }

  .tabPanel__card__table {
    height: auto;
  }

  .mt-2 {
    margin-top: 1.375rem;
  }

  .button__container {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .tabPanel__card {
      padding: 2rem;
    }

    .tabPanel__card__filter {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
  }
`

export const TabContentGlobalStyles = css.global`
  .input {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
  }
  .tabContent__buttons {
    display: flex;
    gap: 1rem;
  }
  .iconButton {
    height: 2.5rem;
    width: fit-content;
    border-radius: 2rem;
    border: 2px solid ${colors.primary[500]};
    color: ${colors.primary[500]};
  }
  .iconButton:hover {
    border: 2px solid ${colors.primary[700]};
    color: ${colors.primary[700]};
  }
`
