import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const CardStyles = css`
  .card__container {
    display: flex;
    color: ${colors.neutrals[400]};
    background-color: ${colors.neutrals.white};
    padding: 2rem;
    border-radius: 2rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .card__container:hover {
    background-color: ${colors.neutrals[100]};
  }

  .card__title {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .card__container :global(.card__name p) {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .gap-adjustment {
    flex: 1;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .card__container :global(.card__name p) {
      -webkit-line-clamp: 1;
    }
  }
`
