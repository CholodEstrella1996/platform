import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

export const CardLabLocalStyles = css`
  .card {
    display: flex;
    width: 100%;
    height: auto;
    background-color: ${theme.colors.neutrals.white};
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }
  .card:hover {
    background-color: ${theme.colors.neutrals[100]};
  }

  .card__inner {
    width: 100%;
    height: auto;
    background-color: inherit;
    overflow: hidden;
    border-radius: 1rem;
    position: sticky;
  }
  .card__inner__image {
    width: 100%;
    height: fit-content;
    overflow: hidden;
  }
  .card__inner__image :global(.video__player) {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }

  .card__inner__image :global(img),
  .card__info__avatar :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .card__inner__content {
    width: 100%;
    min-height: 6rem;
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .card__info {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .card__info__avatar {
    width: 4rem;
    height: 4rem;
    flex-shrink: 0;
    overflow: hidden;
    border-radius: 100%;
    background-color: var(--avatar-bg-color);
    position: relative;
  }

  .card__info__title {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .info__title {
    color: ${theme.colors.neutrals[500]};
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-family: var(--font-family);
    font-weight: var(--semibold-weight);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .info__subtitle {
    color: var(--overline-color);
    font-size: 0.75rem;
    line-height: 1rem;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card__price {
    width: 100%;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    flex-shrink: 0;
    background-color: ${theme.colors.neutrals[50]};
  }

  @media screen and (min-width: ${theme.mediaQueries.desktop}) {
    .card__inner__image {
      height: 11rem;
    }
    .card__inner__content {
      flex-direction: row;
    }
    .card__price {
      width: auto;
    }
  }
`
