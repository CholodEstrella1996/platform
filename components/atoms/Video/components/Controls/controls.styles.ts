import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const controlsStyles = css`
  .controls-container {
    all: unset;
    box-sizing: border-box;
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 100%;
    z-index: 3;
    align-items: flex-end;
    justify-content: center;
    padding: 1rem;
    transition: all 0.5s ease-in-out;
  }

  .controls {
    all: unset;
    box-sizing: border-box;
    opacity: var(--opacity);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0.3rem;
    padding-right: 0.5rem;
    border-radius: 1.5rem;
    background-color: ${colors.neutrals[50]};
    gap: 1rem;
    color: ${colors.primary[300]};
    transition: all 0.5s ease-in-out;
  }

  .controls :global(.main-button) {
    color: ${colors.primary[500]};
  }

  .buttons {
    display: flex;
    gap: 0.25rem;
  }
`
