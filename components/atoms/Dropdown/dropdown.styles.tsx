import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const DropdownStyles = css`
  .dropdown,
  .dropdown__header,
  .dropdown__container {
    display: flex;
    gap: 1rem;
  }
  .dropdown {
    flex-direction: column;
    padding: 0 1rem 1rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 1rem;
  }

  .dropdown__header {
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem 0;
    cursor: pointer;
  }

  .dropdown__icon {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    rotate: 0deg;
    transition: rotate 0.25s ease-in-out;
  }

  .dropdown__icon--rotate {
    rotate: -180deg;
    transition: rotate 0.25s ease-in-out;
  }

  .dropdown__content {
    flex-direction: column;
    padding-top: 1rem;
    border-top: 1px solid ${colors.neutrals[100]};
  }
`
