import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme

export const ResourcesStyles = css`
  .resources__simulator {
    width: 100%;
    min-height: 45rem;
    height: fit-content;
    border-radius: 2rem;
    background-color: black;
    overflow-y: hidden;
  }

  .tabs-container :global(.MuiTabs-flexContainer) {
    display: flex;
  }
  .tabs-container :global(.tab__items) {
    font-size: 1rem;
    text-transform: capitalize;
    color: ${colors.neutrals[400]};
    font-family: ${typography.name};
    width: 100%;
  }
  .card-download-app {
    padding: 2rem;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    box-shadow: 1px 2px 12px 3px rgba(0, 0, 0, 0.08);
  }
  .card-download-app :global(.card__description) {
    margin-top: 1rem;
  }
  .card-download-app :global(.button__download) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: min-content;
    margin: 2rem auto 0 auto;
  }
`
