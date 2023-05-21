import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const FilterStyles = css`
  .card__filter {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    align-items: flex-start;
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__filter {
      gap: 1rem;
      flex-direction: row;
      align-items: flex-end;
    }
  }
`

export const FilterGlobalStyles = css.global`
  .input__filter {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
    width: 100%;
  }

  .cl-select--small__indicator.cl-select--small__clear-indicator:hover {
    color: ${colors.neutrals[400]};
  }
  .cl-select--small__indicator.cl-select--small__clear-indicator {
    color: ${colors.neutrals[400]};
  }
  .css-319lph-ValueContainer {
    font-weight: var(--semibold-weight);
  }
`
