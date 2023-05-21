import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const CardPorcentLaboratoryStyles = css`
  .container {
    border-radius: 2rem;
    max-width: 22rem;
    background-color: ${colors.neutrals.white};
    padding: 2rem;
    gap: 1.5rem;
  }
  .container__cardmodal {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
  }
  .container__cardmodal__icon {
    color: ${colors.primary[500]};
    background-color: ${colors.primary[100]};
    border-radius: 2rem;
    padding: 0.7rem;
    width: 5rem;
    height: 5.4rem;


  }
  .container__cardmodal__title {
    color:${colors.neutrals[400]}
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .container__cardmodal__icon :global(svg) {
    font-size: 3.75rem;
  }
  .lineChar__container__titles {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-top: 1.5rem;
  }
`
