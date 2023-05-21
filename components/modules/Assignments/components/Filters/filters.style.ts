import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const FilterStyles = css`
  .filters__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .grading__table :global(.filters__container > div) {
    flex: 1;
  }

  .top__filters,
  .bottom__filters {
    display: grid;
    gap: 1rem;
  }

  .top__filters {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .bottom__filters {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  .bottom__filters :global(.datePicker__container .MuiFormControl-root .MuiInputBase-root) {
    background-color: ${colors.neutrals.white};
  }

  .bottom__filters
    :global(.datePicker__container .MuiFormControl-root .MuiInputBase-root .MuiInputBase-input) {
    padding: 0.7rem 0;
  }

  .filters__container .clear__filter {
    width: 100%;
    margin-top: 0.5rem;
  }
  .filters__container :global(.clear__button button) {
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .top__filters,
    .bottom__filters {
      gap: 1rem;
    }

    .top__filters {
      display: flex;
    }
    .bottom__filters {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }
`
