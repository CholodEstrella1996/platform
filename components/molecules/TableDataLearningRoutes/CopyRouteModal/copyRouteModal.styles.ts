import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const CopyRouteLocalStyles = css`
  .modal__inputs {
    display: flex;
    flex-direction: column;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    padding: 1rem;
    gap: 1rem;
    margin-top: 1rem;
  }

  .modal__notification {
    display: flex;
    gap: 0.25rem;
    padding: 1rem;
    align-items: center;
  }
`
