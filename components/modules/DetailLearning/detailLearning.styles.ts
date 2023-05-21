import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const DetailLearningLocalStyles = css`
  .learning__title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .learningRoute__description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .laboratories__container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
  }

  .laboratories__grid {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
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

  .laboratory__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
  }
  .laboratory__item:hover {
    background-color: ${colors.neutrals[100]};
  }
  .item__number {
    width: 1.75rem;
    height: 1.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${colors.primary[500]} 0.18rem solid;
    border-radius: 100%;
    flex-shrink: 0;
  }
`
