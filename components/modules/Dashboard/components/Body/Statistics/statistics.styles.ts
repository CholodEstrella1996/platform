import css from 'styled-jsx/css'

export const StatisticsStyles = css`
  .statistics__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .statistics__container :global(.MuiGrid-root .MuiGrid-item .card__container) {
    height: 100%;
  }
`
