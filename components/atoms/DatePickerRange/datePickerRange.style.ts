import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme

export const DatePickerRangeStyles = css`
  .dateRangePicker__container {
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

  .range__picker :global(.react-datepicker-wrapper .react-datepicker__input-container input) {
    width: 100%;
    padding: 0.67rem;
    padding-left: 3rem;
    border-radius: 2rem;
    border: 2px solid ${colors.neutrals[300]};
    font-family: ${typography.name};
    font-size: 0.875rem;
    font-weight: ${typography.weight.regular};
    outline: none;
  }
  .range__picker:hover :global(.react-datepicker-wrapper .react-datepicker__input-container input) {
    border: 2px solid ${colors.primary[500]};
  }

  .range__picker
    :global(.react-datepicker-wrapper .react-datepicker__input-container input::placeholder) {
    color: ${colors.neutrals[200]};
  }

  .range__picker :global(.dateRangePicker__icon) {
    position: absolute;
    left: 1.4rem;
    bottom: 50%;
    top: 50%;
    margin-top: 1px;
    color: ${colors.primary[500]};
  }

  .dateRangePicker__icon--disabled {
    color: ${colors.neutrals[200]};
  }

  .range__picker :global(.react-datepicker__tab-loop .react-datepicker-popper .react-datepicker) {
    border: none;
    box-shadow: 0px 12rem 5rem rgba(0, 0, 0, 0.01), 0px 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0px 3rem 3rem rgba(0, 0, 0, 0.09), 0px 0.75rem 1.5rem rgba(0, 0, 0, 0.1),
      0px 0px 2rem rgba(0, 0, 0, 0.1);
  }
  .range__picker
    :global(.react-datepicker__tab-loop .react-datepicker-popper .react-datepicker__header) {
    background-color: ${colors.neutrals.white};
  }

  .range__picker
    :global(
      .react-datepicker__tab-loop
        .react-datepicker-popper
        .react-datepicker__header
        .react-datepicker__current-month
    ) {
    text-transform: capitalize;
  }

  .range__picker
    :global(.react-datepicker-wrapper .react-datepicker__input-container button::after) {
    padding-right: 0.6rem;
    background-color: transparent;
    color: ${colors.neutrals[200]};
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 600;
  }
  .range__picker
    :global(.react-datepicker-wrapper .react-datepicker__input-container button:hover::after) {
    color: ${colors.neutrals[700]};
  }
  .range__picker:focus-within
    :global(.react-datepicker-wrapper .react-datepicker__input-container button::after) {
    color: ${colors.neutrals[700]};
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
