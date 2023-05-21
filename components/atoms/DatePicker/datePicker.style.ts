import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme

export const DatePickerStyles = css`
  .datePicker__container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  }
  .datePicker__container:hover {
    cursor: var(--cursor-hover);
  }

  label {
    padding-left: 1.5rem;
  }

  .warning__msg {
    padding-left: 1.5rem;
  }

  .warning__icon {
    position: absolute;
    width: 1rem;
    top: 44%;
    right: 1.25rem;
    transform: translate(0, -52%);
    color: ${colors.semantic.danger};
    align-items: center;
  }
`
export const DatePickerGlobalStyles = css.global`
  .datePicker__mobile__icon {
    color: ${colors.primary[500]};
  }
  .datePicker__mobile__icon--disabled {
    color: ${colors.neutrals[200]};
  }
  .datePicker .MuiInputBase-root.MuiOutlinedInput-root.Mui-disabled:hover {
    border: 2px solid ${colors.neutrals[300]};
    cursor: not-allowed;
  }
  .datePicker .MuiInputBase-root.MuiOutlinedInput-root {
    font-weight: ${typography.weight.regular};
    font-family: ${typography.name};
  }
  .datePicker--error .MuiInputBase-root.MuiOutlinedInput-root {
    border: 2px solid ${colors.semantic.danger};
  }
  .datePicker--error .MuiInputBase-root.MuiOutlinedInput-root:hover {
    border: 2px solid ${colors.primary[500]};
  }
  .datePicker .MuiInputBase-root {
    border-radius: 2rem;
    border: 2px solid ${colors.neutrals[300]};
  }
  .datePicker .MuiInputBase-root:hover {
    border-radius: 2rem;
    border: 2px solid ${colors.primary[500]};
  }
  .datePicker .MuiOutlinedInput-notchedOutline {
    border-style: none;
  }
  .datePicker
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium {
    color: ${colors.primary[500]};
    margin-left: 0;
    padding: 0;
  }
  .datePicker
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.Mui-disabled:hover,
  .datePicker
    .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-edgeStart.MuiIconButton-sizeMedium.Mui-disabled {
    color: ${colors.neutrals[200]};
    cursor: not-allowed;
  }
  .datePicker div input.Mui-disabled {
    cursor: not-allowed;
    color: ${colors.neutrals[200]};
    -webkit-text-fill-color: ${colors.neutrals[200]};
  }
  .datePicker .MuiInputBase-input-MuiOutlinedInput-input:hover .Mui-disabled,
  .datePicker .MuiButtonBase-root-MuiIconButton-root.Mui-disabled:hover,
  .datePicker .MuiButtonBase-root-MuiIconButton-root.Mui-disabled {
    color: ${colors.neutrals[300]};
    cursor: not-allowed;
  }

  .datePicker > .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
    color: ${colors.neutrals[700]};
    font-size: 0.875rem;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
  }

  .MuiPaper-root.MuiPickersPopper-paper {
    border-radius: 2rem;
  }
`
