import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const NotificactionLocalStyles = css`
  .notification {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 4.5rem;
    right: 0rem;
  }
  .notification__container {
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

  .notification__cards {
    max-height: 25rem;
    overflow-y: auto;
  }

  .notification__cards::-webkit-scrollbar {
    width: 0.5rem;
  }

  .notification__cards::-webkit-scrollbar-track {
    background: ${colors.neutrals[50]};
    border-radius: 6.25rem;
  }

  .notification__cards::-webkit-scrollbar-thumb {
    background: ${colors.neutrals[200]};
    border-radius: 6.25rem;
  }

  .notification__header {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }

  .check__button {
    width: 2rem;
    height: 2rem;
    color: ${colors.neutrals[200]};
  }
  .close__button {
    width: 3rem;
    height: 3rem;
    color: ${colors.neutrals[300]};
  }

  :global(.notification__button) {
    width: 2.75rem;
    height: 2.75rem;
    flex-shrink: 0;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .notification__container {
      width: 25rem;
    }

    .notification__cards {
      max-height: 28rem;
    }
  }

  .notification__container :global(.notice__card) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0.5rem 1rem;
    border-bottom: 1px solid ${theme.colors.neutrals[100]};
  }

  .notification__container :global(.notice__card:nth-last-child(1)) {
    border-bottom: 0;
  }

  .notification__container :global(.notification__header),
  .notification__container :global(.notice__card__header) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
