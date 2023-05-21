import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const overlayStyles = css`
  .overlay {
    transition: all 0.5s ease-in-out;
    border-radius: var(--border-radius);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${colors.neutrals[100]}75;
    z-index: 1;
    transition: all 0.5s ease-in-out;
  }

  .overlay:hover {
    opacity: 1;
  }

  .overlay :global(.icon) {
    all: unset;
    width: 4rem;
    height: 4rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay :global(.spinner) {
    color: ${colors.primary[500]};
    animation-duration: 2.5s;
  }

  .overlay :global(.error-icon) {
    color: ${colors.semantic.danger};
    width: 2rem;
    height: 2rem;
  }

  .overlay :global(.play-icon),
  .overlay :global(.pause-icon) {
    color: ${colors.primary[500]};
    width: 2.5rem;
    height: 2.5rem;
  }

  .overlay--desktop :global(.icon:hover) {
    cursor: pointer;
    background-color: ${colors.neutrals[100]};
  }

  .overlay--desktop,
  .overlay--mobile {
    opacity: var(--opacity);
  }
`
