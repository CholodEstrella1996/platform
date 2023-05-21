import css from 'styled-jsx/css'

export const RankingCardStyles = css`
  .rankings__container,
  .name__points {
    display: flex;
    flex-direction: column;
  }

  .rankings__container {
    justify-content: space-between;
    padding: 0 0.5rem;
    max-height: 22rem;
    overflow-y: auto;
    gap: 1.5rem;
  }

  .card__container {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .ranker__information {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .name__points {
    width: 60%;
  }
`
