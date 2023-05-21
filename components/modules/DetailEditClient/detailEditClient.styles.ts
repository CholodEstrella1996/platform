import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const DetailEditUserLocalStyles = css`
  .navigationAndButtons__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
  }

  .userInfo__container {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
    padding: 1.25rem;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  .user__avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
  }

  .usernameAndAvatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem 0.75rem;
  }

  .user__information,
  .usernames {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .button__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0;
  }

  .button__container :global(.buttonComponent) {
    width: 100%;
    justify-content: center;
  }

  .subscription__modal {
    margin-top: 1rem;
  }
  .subscription__modal :global(.card-subscription) {
    width: 100%;
  }
  .subscription__modal :global(.card-subscription .subscription__type) {
    justify-content: center;
  }

  .avatar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .usernames {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .navigationAndButtons__container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .titleAndButtons__container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .action__buttons {
      display: flex;
    }

    .userInfo__container {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding: 1.5rem;
      margin-bottom: 3rem;
    }

    .user__avatar {
      align-items: center;
    }

    .usernameAndAvatar {
      flex-direction: column;
    }

    .user__avatar--text {
      padding-top: 1.25rem;
      text-align: center;
    }

    .user__information {
      grid-column: span 2 / span 2;
    }

    .subscription__modal {
      width: 90%;
    }
    .subscription__modal :global(.card-subscription .subscription__type) {
      flex-direction: column;
    }
    .subscription__modal :global(.card-subscription .subscription__type .subscription__button) {
      width: 100%;
    }

    .avatar-container {
      width: 12rem;
      height: 12rem;
    }
  }
`

export const DetailEditUserGlobalStyles = css.global`
  .personIcon {
    color: ${colors.neutrals[100]};
    border-color: ${colors.neutrals[100]};
    border-radius: 100%;
  }

  .user__role {
    text-transform: capitalize;
  }

  .id__data {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }
  .input__identityNumber {
    grid-column: auto;
  }
  .extra__data {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  .user__avatar--label {
    padding-left: 1.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .id__data {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
    .input__identityNumber {
      grid-column: span 2 / span 2;
    }
    .extra__data {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 1rem;
    }
  }
`
