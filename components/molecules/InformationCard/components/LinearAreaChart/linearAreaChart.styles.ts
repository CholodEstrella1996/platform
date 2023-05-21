import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const LinearAreaChartStyles = css`
  .linearArea__chart,
  .linearArea__information {
    display: flex;
    flex-direction: column;
  }

  .linearArea__chart {
    width: auto;
  }

  .linearArea__information {
    gap: 1rem;
  }

  .linear__chart :global(.mixed-chart div) {
    max-height: 10rem;
  }

  .linearArea__data__detail {
    max-height: 9.375rem;
    overflow: auto;
    padding-right: 0.25rem;
  }

  .linearArea__detail {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px ${colors.neutrals[100]} solid;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .linearArea__chart {
      max-width: inherit;
    }
  }
`
