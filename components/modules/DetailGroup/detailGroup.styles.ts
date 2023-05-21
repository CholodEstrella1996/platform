import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const DetailGroupStyles = css`
  .detail__content {
    display: grid;
    grid-template-columns: auto;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .detail__cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .card__container,
  .card__learning {
    display: flex;
    gap: 1rem;
    border-radius: 1rem;
    padding: 1rem;
    flex: 1;
    flex-shrink: 0;
    background-color: ${colors.neutrals.white};
  }

  .card__container {
    flex-direction: column;
  }

  .card__learning {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 1.5rem;
  }
  .card__description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .card__learning:hover {
    background-color: ${colors.neutrals[100]};
    cursor: pointer;
  }
  .card__learning--icon {
    align-items: center;
  }

  .detail__list {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0 0;
  }

  .list__content {
    overflow: auto;
    max-height: 26rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .user__card {
    border-radius: 1rem;
    background-color: ${colors.neutrals.white};
    padding: 1rem;
    gap: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 5.75rem;
  }
  .user__info {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }

  .header__content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
  .header__content > :global(.subscription-type) {
    margin-top: 0.25rem;
  }

  .user__name :global(span),
  .user__email :global(span) {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .detail__content {
      grid-template-columns: 1fr 1fr;
    }
    .detail__cards {
      flex-direction: row;
    }
    .detail__list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`
