import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const DashboardStyles = css`
  .dashboard__container,
  .header__welcome,
  .header__container,
  .header__filters,
  .header__welcome-filters,
  .recentAccess__container,
  .recentAccess__history,
  .recentAccess__card,
  .institutionDetail__container,
  .users__text,
  .platformMetrics__container {
    display: flex;
    flex-direction: column;
  }
  .dashboard__information,
  .graphic__charts,
  .metrics__information {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: flex-start;
  }

  .institutionDetail__card {
    display: grid;
    grid-template-columns: 1fr;
  }
  .header__welcome {
    gap: 0.5rem;
    margin-top: 2rem;
    width: 100%;
  }

  .header__container {
    gap: 2rem;
  }
  .header__welcome-filters {
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .header__actions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
  .header__actions :global(.header__button button) {
    width: 100%;
  }
  .header__filters {
    gap: 1rem;
  }
  .header__filters :global(.select__container .cl-select--small__menu) {
    z-index: 2;
  }

  .header__container :global(.carousel__container .card__container) {
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 7rem;
    padding: 0.5rem 1.5rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    box-shadow: none;
  }
  .header__container :global(.carousel__container .card__container:hover) {
    background-color: ${colors.neutrals[100]};
  }
  .header__container :global(.carousel__container .card__container .card__detail) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  .header__container :global(.carousel__container .card__container .card__detail .card__text) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .header__container :global(.carousel__container .swiper-slide) {
    overflow: inherit;
  }
  .header__container :global(.carousel__container .card__container button) {
    color: ${colors.primary[500]};
  }

  .dashboard__information {
    margin-bottom: 2rem;
  }

  .graphic__charts,
  .dashboard__information,
  .metrics__information {
    gap: 2rem;
    align-items: center;
  }

  .recentAccess__history {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .recentAccess__container,
  .institutionDetail__container,
  .platformMetrics__container {
    margin: 2rem 0;
  }

  .recentAccess__container,
  .recentAccess__card,
  .institutionDetail__container,
  .platformMetrics__container {
    gap: 1rem;
  }
  .recentAccess__card,
  .institutionDetail__card {
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
  }

  .recentAccess__card {
    padding: 1rem;
  }
  .institutionDetail__card {
    padding: 2rem;
  }
  .history__card {
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
  }

  .history__card:hover {
    background-color: ${colors.neutrals[50]};
    cursor: pointer;
  }
  .institutionDetail__card {
    gap: 2rem;
  }
  .institution__users {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .institution__users :global(.avatar) {
    width: 5rem;
    height: 5rem;
    border-radius: 1.5rem;
  }
  .institution__users :global(.avatar .avatar__icon) {
    color: ${colors.engineering[500]};
  }
  .institution__users :global(.avatar .avatar__icon svg) {
    font-size: 3.5rem;
  }

  .student__metric {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .recentAccess__card {
      padding: 2rem;
    }
    .institutionDetail__card {
      grid-template-columns: 1fr 2fr;
    }
    .dashboard__information,
    .graphic__charts,
    .metrics__information {
      grid-template-columns: repeat(3, 1fr);
      align-items: stretch;
    }

    .student__metric {
      grid-template-columns: repeat(2, 1.5fr);
    }

    .header__filters,
    .header__welcome-filters {
      flex-direction: row;
    }
    .header__welcome-filters {
      align-items: flex-end;
      gap: 1rem;
    }
    .header__welcome {
      margin-top: 3rem;
    }
    .header__welcome,
    .header__actions {
      width: auto;
    }
    .header__actions {
      flex-direction: row;
      align-items: flex-end;
    }

    .header__container :global(.carousel__container .swiper .swiper-pagination-horizontal) {
      bottom: 0;
    }

    .header__container :global(.carousel__container .card__container) {
      box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    .recentAccess__history {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
