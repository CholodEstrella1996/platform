import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const ProgressCardStyles = css`
  .progress__container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .select__filters {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  .progress__detail__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 16.25rem;
    overflow: auto;
    padding-right: 1rem;
  }

  .name__amount {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.25rem;
  }

  .progress__detail :global(.MuiLinearProgress-root) {
    height: 0.45rem;
    border-radius: 0.25rem;
  }
  .progress__detail :global(.MuiLinearProgress-colorPrimary) {
    background-color: ${colors.neutrals[50]};
  }
  .progress__detail :global(.MuiLinearProgress-barColorPrimary) {
    background-color: ${colors.primary[500]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .select__filters {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`
