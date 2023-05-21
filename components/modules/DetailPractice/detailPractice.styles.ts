import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const DetailPracticeLocalStyles = css`
  .detail__practice__page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1.5rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 1rem;
  }

  .detail__practice__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }

  .name__avatar {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }

  .detail__practice__name :global(.report__button) {
    width: 100%;
  }

  .detail__practice__name :global(.report__button button) {
    width: 100%;
    justify-content: center;
  }

  .detail__practice {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    gap: 1rem;
  }

  .detail__practice__info,
  .information__status,
  .information__detail {
    gap: 1rem;
  }

  .detail__practice__info {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .information__status {
    display: flex;
    flex-direction: column;
  }

  .information__detail {
    display: grid;
    height: 100%;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.neutrals[100]};
  }

  .detail__content,
  .status__data {
    width: 100%;
  }

  .status__data {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid ${colors.neutrals[100]};
  }

  .detail__container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .detail__practice__name {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
    }

    .name__avatar {
      width: auto;
    }

    .detail__practice__name :global(.report__button) {
      width: auto;
    }

    .detail__practice {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
    }

    .information__status,
    .information__detail {
      gap: 1rem;
    }

    .information__status {
      flex-direction: row;
    }
    .status__data {
      display: flex;
      flex-direction: column;
      justify-content: inherit;
      align-items: flex-start;
      padding: 1rem;
    }
  }
`
