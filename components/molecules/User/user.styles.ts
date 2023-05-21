import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const UserLocalStyles = css`
  .user-detail {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 4.5rem;
    right: 0rem;
  }
  .user-detail__container {
    display: flex;
    flex-direction: column;
    width: calc(100vw - 1.25rem);
    padding: 1rem 1rem 1.5rem 1.5rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0px 12rem 5rem rgba(0, 0, 0, 0.01), 0px 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0px 3rem 3rem rgba(0, 0, 0, 0.09), 0px 0.75rem 1.5rem rgba(0, 0, 0, 0.1),
      0px 0px 2rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 2rem;
  }

  .avatar-and-close {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .user-info :global(.user-name) {
    padding: 1rem 0 0.25rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .user-detail__container {
      width: 25rem;
    }
  }
`

export const UserGlobalStyles = css.global`
  .MuiIconButton-root.avatar__button {
    width: 2.75rem;
    height: 2.75rem;
    padding: 0;
    margin: 0;
  }
  .MuiIconButton-root.avatar__button div {
    width: 2rem;
    height: 2rem;
  }
  .MuiIconButton-root.avatar__button div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    margin: 0;
  }
  .close__button {
    width: 2.75rem;
    height: 2.75rem;
    color: ${colors.neutrals[300]};
  }

  .menu__buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .action__buttons {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: inherit;
    justify-content: start;
  }
`
