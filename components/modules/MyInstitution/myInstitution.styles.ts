import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const MyInstitutionStyles = css`
  .tab :global(.tab__container) {
    width: 100%;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.08);
    border-radius: 1rem;
    overflow: hidden;
  }
  .tab :global(.tab__nav) {
    background-color: ${colors.neutrals.white};
  }
  .action__buttons {
    padding-left: 1rem;
  }
  .tab :global(.tab__panel) {
    padding-top: 0.25rem;
  }
  .tab :global(.tab__items) {
    font-size: 1rem;
    text-transform: capitalize;
    color: ${colors.neutrals[500]};
    font-family: var(--font-family);
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 2px solid transparent;
  }
  .tab :global(.tab__items:hover) {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 2px solid ${colors.primary[200]};
  }
  .tab :global(.tab__items.Mui-selected) {
    color: ${colors.primary[500]};
    font-weight: var(--semibold-weight);
  }

  .tab :global(.MuiTabs-indicator) {
    background-color: ${colors.primary[500]};
  }
`
