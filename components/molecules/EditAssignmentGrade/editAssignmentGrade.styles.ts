import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

export const EditAssignmentGradeStyles = css.global`
  .edit-grade__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: ${theme.colors.neutrals.white};
    border-radius: 2rem;
    margin: 1rem 0;
  }
`
