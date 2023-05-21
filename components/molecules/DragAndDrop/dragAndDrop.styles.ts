import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const DragAndDropLocalStyles = css`
  .laboratory__cards {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0.5rem;
    height: auto;
  }

  .laboratory__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    border: 1px solid ${colors.neutrals[100]};
    border-radius: 2rem;
  }

  .laboratory__cards::-webkit-scrollbar {
    width: 0.5rem;
  }
  .laboratory__cards::-webkit-scrollbar-track {
    background: ${colors.neutrals[100]};
    border-radius: 6.25rem;
  }
  .laboratory__cards::-webkit-scrollbar-thumb {
    background: ${colors.neutrals[200]};
    border-radius: 6.25rem;
  }
`

export const DragAndDropGlobalStyles = css.global`
  .itemNumber {
    padding: 0.125rem 0.375rem;
    border: ${colors.primary[500]} 0.18rem solid;
    border-radius: 100%;
  }
`
