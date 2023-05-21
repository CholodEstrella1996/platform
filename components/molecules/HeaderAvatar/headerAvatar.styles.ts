import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { mediaQueries } = theme

export const HeaderAvatarLocalStyles = css`
  .headerAvatar__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    gap: 1rem;
    width: 100%;
  }

  .headerAvatar__avatar__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;
  }

  .headerAvatar__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin-bottom: 1rem;
    gap: 0.25rem;
    max-width: 100%;
  }

  .headerAvatar__avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 6rem;
    height: 6rem;
  }

  .headerAvatar__avatar :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .headerAvatar__price {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .headerAvatar__card {
      flex-direction: row;
      justify-content: space-between;
      gap: 2rem;
    }

    .headerAvatar__avatar__title {
      flex-direction: row;
      text-align: left;
      gap: 2rem;
    }

    .headerAvatar__avatar {
      width: 10rem;
      height: 10rem;
    }

    .headerAvatar__info {
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 0;
    }
  }
`

export const HeaderAvatarGlobalStyles = css.global`
  .header__image {
    border-radius: 100%;
  }
`
