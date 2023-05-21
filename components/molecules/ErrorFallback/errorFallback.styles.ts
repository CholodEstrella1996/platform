import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

export const errorFallbackLocalStyles = css`
  .error-fallback__container {
    display: grid;
    place-content: center;
    flex: 1;
  }

  .error-fallback__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    text-align: center;
  }

  .error-fallback__icon {
    display: flex;
    justify-content: center;
    font-size: 8rem;
    color: ${theme.colors.semantic.danger};
  }

  .error-fallback__caption {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
