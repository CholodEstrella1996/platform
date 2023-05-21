import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const InformationCardStyles = css`
  .card__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    width: 100%;
    min-height: 6rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    gap: 1.5rem;
  }

  .card__header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .card__body {
    height: 100%;
  }

  .card__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0.75rem;
    background-color: var(--icon-bg-color);
    border-radius: 1.5rem;
  }

  .card__icon :global(svg) {
    font-size: 3.5rem;
    color: var(--icon-color);
  }

  .card__information {
    display: flex;
    flex-direction: column;
  }
`
