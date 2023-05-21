import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

export const AlertStyle = css.global`
  .alert-container-btn {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
  }
  .alert-btn-cancel .buttonComponent__white {
    color: ${theme.colors.neutrals[400]};
  }

  .alert-btn-delete .buttonComponent__white {
    color: ${theme.colors.semantic.danger};
  }
  .alert-sub-title {
    margin-top: 1rem;
  }

  .modalBox {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 600px;
    min-width: 320px;
    background-color: ${theme.colors.neutrals.white};
    border-radius: 2rem;
    box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.25);
    padding: 2rem;
  }

  .modalBox:focus {
    outline: none;
  }
`
