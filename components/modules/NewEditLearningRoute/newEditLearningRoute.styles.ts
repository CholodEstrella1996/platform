import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme
export const NewEditLearningRouteStyles = css`
  .nav__bottom {
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  }
  .nav__bottom--next {
    justify-content: flex-end;
  }
  .nav__bottom--confirm {
    justify-content: space-between;
  }

  .no-group-message {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    padding-left: 0.25rem;
  }
  .no-group-message__link {
    color: ${colors.primary[500]};
    text-decoration: underline;
    margin-left: 0.25rem;
  }
`

export const NewEditLearningRouteGlobalStyles = css.global`
  .step__content {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
    gap: 1rem;
    margin-top: 1rem;
  }

  .step__header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .step__label > span:nth-child(2) span {
    font-family: ${typography.name};
    color: ${colors.neutrals[400]};
    font-weight: ${typography.weight.semibold};
  }

  .step__label > span:first-child svg {
    font-size: 2rem;
  }
`
