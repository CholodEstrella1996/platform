import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const AssignmentLocalStyles = css`
  .grading__table {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
  }

  .grading__table__upper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  .grading__table__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .filters__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 1rem;
  }
  .grading__table :global(.filters__container > div) {
    flex: 1;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .grading__table {
      padding: 1.5rem;
      gap: 2rem;
    }

    .grading__table__header {
      margin-bottom: 0;
    }

    .filters__container {
      flex-direction: row;
    }
  }
`

export const AssignmentGlobalStyles = css.global`
  .grading__table .card__filter {
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .grading__table .card__filter {
      margin-bottom: 0;
    }
  }
`
