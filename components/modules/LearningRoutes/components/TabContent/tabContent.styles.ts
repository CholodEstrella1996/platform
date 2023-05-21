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
    border-radius: 1rem;
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

  .header__icons {
    display: flex;
    gap: 1rem;
  }

  .tabPanel__card__body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .tabPanel__card__filter {
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    align-items: initial;
  }

  .tabPanel__card__table {
    height: auto;
  }

  .mt-2 {
    margin-top: 1.5rem;
  }

  .button__container {
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .tabPanel__card {
      padding: 2rem;
    }
    .tabPanel__card__header {
      flex-direction: row;
      justify-content: space-between;
    }
    .tabPanel__card__filter {
      flex-direction: row;
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
`
