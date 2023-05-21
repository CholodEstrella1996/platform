import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const DetailLaboratoryLocalStyles = css`
  .detail__laboratory {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding-top: 2rem;
  }

  .description__card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .learning__units,
  .complementary__material {
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
  }

  .labs__container {
    display: grid;
    grid-template-columns: auto;
    gap: 3rem;
    width: 100%;
  }
  .labs__content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .materials {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-height: 35rem;
    overflow-y: auto;
  }

  .materials::-webkit-scrollbar-track {
    background-color: transparent;
  }

  .laboratory__content {
    display: grid;
    gap: 2rem;
  }

  .material__card {
    display: grid;
    grid-template-columns: 0.5fr 3fr 0.25fr;
    padding: 1rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .detail__laboratory {
      padding-top: 0;
    }

    .labs__container {
      grid-template-columns: 2fr 1fr;
    }
  }
`

export const DetailLaboratoryGlobalStyles = css.global`
  .detail__laboratory .headerAvatar__card div:nth-child(2),
  .detail__laboratory .headerAvatar__card .buttonComponent__medium {
    width: 100%;
  }

  .complementary__material__icon {
    color: ${colors.primary[500]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .detail__laboratory .headerAvatar__card div:nth-child(2),
    .detail__laboratory .headerAvatar__card .buttonComponent__medium {
      width: unset;
    }
  }
`
