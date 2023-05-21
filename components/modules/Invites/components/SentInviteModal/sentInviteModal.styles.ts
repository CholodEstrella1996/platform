import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const SentInviteModalStyles = css`
  .sent-modal__container,
  .sent-modal__content,
  .sent-modal__text {
    display: flex;
    flex-direction: column;
  }

  :global(.sent-invite__modal) {
    overflow: auto;
  }

  :global(.sent-modal) {
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
  }

  .sent-modal__container {
    width: 100%;
    padding: 1rem 2rem 2rem;
    margin: 0 auto;
    background-color: ${colors.neutrals[50]};
    border-radius: 2rem;
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.01), 0 0.75rem 1.625rem rgba(0, 0, 0, 0.1),
      0 3rem 3rem rgba(0, 0, 0, 0.09), 0 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0 12rem 4.875rem rgba(0, 0, 0, 0.01);
  }

  .sent-modal__container :global(button) {
    color: ${colors.neutrals[200]};
    cursor: pointer;
    align-self: flex-end;
  }

  .sent-modal__content {
    gap: 2rem;
  }

  .sent-modal__text {
    gap: 1rem;
    justify-content: center;
    text-align: center;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .sent-modal__container {
      width: 60vw;
    }

    .sent-modal__content {
      flex-direction: row;
    }

    .sent-modal__text {
      text-align: left;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .sent-modal__container {
      width: 40vw;
    }
  }
`
