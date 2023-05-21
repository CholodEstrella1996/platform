import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, gradients } = theme

export const buttonStyles = css`
  .buttonComponent {
    display: flex;
    align-items: center;
    border-radius: 6.25rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    border: none;
    background: ${gradients.primary2};
    color: ${colors.neutrals.white};
    width: auto;
    justify-content: space-around;
    flex-shrink: 0;
    white-space: nowrap;
  }

  .buttonComponent:hover {
    background: ${colors.primary[800]};
  }

  .buttonComponent:disabled {
    background: ${colors.neutrals[200]};
    cursor: not-allowed;
  }

  .buttonComponent__outlined {
    border: 0.125rem solid;
    border-color: ${colors.primary[500]};
    color: ${colors.primary[500]};
    background: transparent;
  }

  .buttonComponent__outlined:hover {
    border-color: ${colors.primary[800]};
    color: ${colors.primary[800]};
    background: transparent;
  }

  .buttonComponent__outlined:disabled {
    border-color: ${colors.neutrals[200]};
    color: ${colors.neutrals[200]};
    background: transparent;
  }

  .buttonComponent__white {
    background: ${colors.neutrals.white};
    color: ${colors.primary[500]};
  }

  .buttonComponent__white:hover {
    background: ${colors.neutrals[50]};
  }

  .buttonComponent__white:disabled {
    border: 0.125rem solid;
    border-color: ${colors.neutrals[200]};
    background: ${colors.neutrals[200]};
    cursor: not-allowed;
  }

  .buttonComponent__outlinedWhite {
    border: 0.125rem solid;
    border-color: ${colors.neutrals.white};
    background: transparent;
    color: ${colors.neutrals.white};
  }

  .buttonComponent__outlinedWhite:hover {
    border-color: ${colors.neutrals[50]};
    background: transparent;
    color: ${colors.neutrals.white};
  }

  .buttonComponent__outlinedWhite:disabled {
    border: 0.125rem solid;
    border-color: ${colors.neutrals[200]};
    background: ${colors.neutrals[200]};
  }

  .buttonComponent__small {
    height: 2rem;
  }
  .buttonComponent__small div .lib_Typography-p1 {
    font-size: 0.75rem;
    line-height: 1rem;
  }
  .buttonComponent__small > .buttonIcon > :first-child {
    font-size: 1.125rem;
  }

  .buttonComponent__medium {
    height: 2.5rem;
    padding: 0.375rem 1.5rem;
  }
  .buttonComponent__medium div .lib_Typography-p1 {
    font-size: 1rem;
  }
  .buttonComponent__medium > .buttonIcon > :first-child {
    font-size: 1.5rem;
  }

  .buttonComponent__large {
    height: 3rem;
    padding: 0.625rem 1.875rem;
  }
  .buttonComponent__large div .lib_Typography-p1 {
    font-size: 1.25rem;
  }
  .buttonComponent__large > .buttonIcon > :first-child {
    font-size: 1.875rem;
  }

  .buttonIcon {
    display: flex;
  }

  .buttonIcon--left {
    margin-right: 0.313rem;
  }

  .buttonIcon--right {
    margin-left: 0.313rem;
  }

  .buttonWithIconLeft__small {
    padding: 0.25rem 0.75rem 0.25rem 0.375rem;
  }

  .buttonWithIconLeft__medium {
    padding: 0.375rem 1rem 0.375rem 0.625rem;
  }

  .buttonWithIconLeft__large {
    padding: 0.625rem 1.5rem 0.625rem 1rem;
  }

  .buttonWithIconRight__small {
    padding: 0.25rem 0.375rem 0.25rem 0.75rem;
  }

  .buttonWithIconRight__medium {
    padding: 0.375rem 0.625rem 0.375rem 1rem;
  }

  .buttonWithIconRight__large {
    padding: 0.625rem 1rem 0.625rem 1.5rem;
  }

  .buttonComponent__content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buttonComponent__fullWidth {
    width: 100%;
  }

  .buttonContainer__procedures--fixed {
    position: fixed;
    right: 1rem;
    bottom: 1rem;
  }
`
