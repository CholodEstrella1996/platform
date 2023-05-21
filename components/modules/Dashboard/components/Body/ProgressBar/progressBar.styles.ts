import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, gradients } = theme

export const ProgressBarStyles = css`
  .progressBar__labels {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 1rem;
  }

  .labels {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .labels--center {
    align-items: center;
  }
  .labels--right {
    align-items: end;
  }

  .progressBar__labels :global(.label__registered) {
    background-color: ${colors.primary[500]};
  }
  .progressBar__labels :global(.label__invited) {
    background-color: ${colors.technology[500]};
  }
  .progressBar__labels :global(.label__available) {
    background-color: ${colors.technology[200]};
  }
  .progressBar__labels :global(.label__notAvailable) {
    background-color: ${colors.neutrals[200]};
  }
  .progressBar__labels :global(.label__total) {
    background-color: ${colors.neutrals[500]};
  }
  .progressBar__container {
    flex: 1;
  }
  .progressBar__container :global(.MuiLinearProgress-root) {
    height: 0.625rem;
    border-radius: 0.25rem;
    background-color: ${colors.neutrals[100]};
  }
  .progressBar__container :global(.MuiLinearProgress-root .MuiLinearProgress-barColorPrimary) {
    background: ${gradients.primary2};
    border-radius: 0.25rem;
  }
  .progressBar__container :global(.MuiLinearProgress-root .MuiLinearProgress-colorPrimary) {
    background-color: ${colors.neutrals[200]};
  }
  .progressBar__container :global(.MuiLinearProgress-root .MuiLinearProgress-dashed) {
    visibility: hidden;
  }
  .progressBar__container :global(.MuiLinearProgress-root .MuiLinearProgress-bar2Buffer) {
    border-radius: 0.25rem;
  }
`
