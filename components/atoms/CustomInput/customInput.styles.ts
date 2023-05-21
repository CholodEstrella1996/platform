import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const InputLocalStyles = css`
  .input__formControl {
    display: flex;
    align-items: var(--form-control-align-items);
    gap: 0.5rem;
    padding: 0.6rem 1rem;
    background: ${colors.neutrals.white};
    border: 2px solid var(--form-control-border-color);
    border-radius: var(--form-control-border-radius);
    width: 100%;
    position: relative;
  }

  .input__control {
    border: none transparent;
    outline: none;
    padding: 0;
    background: inherit;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
    color: var(--input-color);
  }
  .input__control::placeholder {
    font-size: 0.875rem;
    font-weight: var(--regular-weight);
    color: ${colors.neutrals[200]};
  }

  .input__formControl > input:hover {
    cursor: var(--input-cursor-hover);
  }

  .input__formControl > input:disabled,
  .input__formControl > textarea:disabled {
    color: ${colors.neutrals[200]};
  }

  .input__formControl:focus-within {
    outline-color: ${colors.primary[500]};
  }

  .input__formControl:focus::placeholder {
    color: ${colors.neutrals[400]};
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus {
    box-shadow: inset;
    -webkit-text-fill-color: var(--input-color);
    -webkit-box-shadow: 0 0 0 2rem ${colors.neutrals.white} inset;
  }

  .input__formControl:disabled {
    background-color: ${colors.neutrals.white};
    border-color: ${colors.neutrals[200]};
  }
  .input__formControl:disabled::placeholder {
    color: ${colors.neutrals[200]};
  }

  .input--small,
  .input--medium {
    width: calc(100% - var(--input-default-width-and-padding));
    padding: 0 var(--input-default-width-and-padding) 0 0;
    font-size: 0.875rem;
    line-height: 1rem;
  }

  .input--small {
    padding: 0.125rem 0;
  }
  .input--medium {
    padding: 0.5rem 0;
  }

  .input--large {
    width: calc(100% - var(--input-large-width-and-padding));
    padding: 0.75rem 0;
    font-size: 0.875rem;
    line-height: 1.5rem;
  }

  .input__formControl > textarea {
    width: 100%;
    margin-bottom: 1.5rem;
    resize: none;
    line-height: 1.375;
  }

  .input__formControl:hover {
    border-color: var(--input-hover);
  }

  .icon__container {
    color: var(--icon-color);
  }

  .input__container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  label,
  .caption--style {
    padding-left: var(--label-and-caption-padding);
  }

  .icon--warning {
    color: ${colors.semantic.danger};
  }

  .icon--warningHide {
    display: flex;
  }

  .counter__container,
  .textArea__count {
    color: var(--counter-text-color);
  }

  .textArea__count {
    position: absolute;
    left: 1rem;
    bottom: 0.5rem;
    text-align: left;
  }

  .input__errorIcon {
    display: flex;
    align-items: center;
  }

  .clear__icon {
    all: unset;
    width: 1.2rem;
    height: 1.2rem;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }
`
