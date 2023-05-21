import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const NoticeDetailLocalStyles = css`
  .notice__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1.5rem;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
  }

  .notice__subject,
  .notice__addressee {
    display: flex;
    gap: 0.5rem;
    align-items: baseline;
  }
  .notice__message {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .notice__message :global(.message__detail) {
    max-height: 9.75rem;
    overflow: auto;
  }
`
