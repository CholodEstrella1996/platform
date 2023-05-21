import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const NewAnnouncementStyles = css.global`
  .newAnnouncement__data {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    margin: 1rem 0;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
  }

  .message__input .input__formControl {
    flex-direction: column;
  }

  .message__input .input__formControl textarea {
    width: inherit;
  }

  .message__input textarea::-webkit-scrollbar {
    width: 0.5rem;
  }

  .message__input textarea::-webkit-scrollbar-track {
    background: ${colors.neutrals[50]};
    border-radius: 6.25rem;
  }

  .message__input textarea::-webkit-scrollbar-thumb {
    background: ${colors.neutrals[200]};
    border-radius: 6.25rem;
  }

  .caption__message {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }
`
