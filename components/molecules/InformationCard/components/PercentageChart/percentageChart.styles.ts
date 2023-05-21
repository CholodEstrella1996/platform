import css from 'styled-jsx/css'

export const PercentageChartStyles = css`
  .percentage__chart,
  .select__filters {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .percentage__chart {
    gap: 1.5rem;
  }

  .percentage__chart :global(.percentage__graph) {
    padding: 0;
    background-color: transparent;
  }
  .percentage__chart :global(.percentage__graph .circular__progress) {
    width: 11rem;
    height: 11rem;
  }

  .select__filters {
    gap: 0.75rem;
  }

  .select__filters :global(.select__container div .cl-select--small__menu) {
    top: auto;
    bottom: 100%;
  }

  .select__filters
    :global(.select__container div .cl-select--small__menu .cl-select--small__menu-list div) {
    padding: 0.25rem 0.5rem;
  }
`
