import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const AddUserStyle = css.global`
  .addUser__container {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
  }

  .userData__container,
  .userData__sections {
    display: flex;
    flex-direction: column;
  }

  .userData__container {
    gap: 1rem;
  }

  .userData__sections {
    gap: 0.5rem;
  }

  .addUser__container .select__container label {
    padding-left: 0.25rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .userData__container {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
`
