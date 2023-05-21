import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const PercentageGraphLocalStyles = css`
  .percentage__graph {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2.5rem 0;
    background-color: ${colors.neutrals[50]};
    border-radius: 1rem;
  }

  .percentage__details {
    margin-top: 2rem;
  }

  .percentage__graph :global(.circular__progress) {
    width: 11rem;
    height: 11rem;
  }

  .percentage__graph :global(.percentage) {
    display: flex;
    align-items: flex-end;
    margin-top: -0.75rem;
  }

  .percentage__graph :global(.percentage__hundred) {
    padding-bottom: 0.35rem;
  }

  .percentage__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .percentage__details :global(.simulator__professor) {
    width: 9.25rem;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .percentage__details :global(.bottom__padding) {
    padding-bottom: 0.125rem;
  }

  .percentage__graph :global(.capitalize) {
    text-transform: capitalize;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .percentage__graph :global(.circular__progress) {
      width: 14rem;
      height: 14rem;
    }
  }
`
