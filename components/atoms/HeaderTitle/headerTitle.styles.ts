import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme
export const HeaderTitleStyles = css`
  .header {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0;
    align-items: center;
    width: 100%;
  }

  .header__buttons {
    display: flex;
    width: fit-content;
    gap: 1rem;
    align-items: center;
  }

  .header__buttons :global(button.buttonWithIconLeft__medium) {
    padding: 0.75rem 1rem 0.75rem 0.75rem;
    height: inherit;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .header {
      align-items: flex-end;
    }

    .header__buttons {
      align-items: flex-end;
    }
  }
`
