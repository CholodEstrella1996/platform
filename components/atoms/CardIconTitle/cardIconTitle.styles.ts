import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const CardIconTitleLocalStyles = css`
  .card__icon__title {
    display: grid;
    grid-template-columns: 0.5fr 3fr 0.25fr;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    cursor: pointer;
  }

  .card__icon__title:hover {
    background-color: var(--hover-bg-color);
    cursor: var(--hover-cursor);
  }

  .card__picture {
    border-radius: 100%;
  }

  .card__picture,
  .card__picture :global(div) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
  }
`
