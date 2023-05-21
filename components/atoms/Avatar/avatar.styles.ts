import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const avatarStyles = css`
  .avatar {
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border: none;
    aspect-ratio: 1;
    flex-shrink: 0;
  }

  .avatar--small {
    width: 1.5rem;
    height: 1.5rem;
  }
  .avatar--medium {
    width: 3rem;
    height: 3rem;
  }
  .avatar--large {
    width: 6rem;
    height: 6rem;
  }

  .avatar--fill {
    width: 100%;
  }

  .avatar__text {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  .avatar__icon {
    fill: ${colors.neutrals.white};
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .avatar ::global(.avatar__image) {
    object-fit: cover;
  }
`
