import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const TableMobileGlobalStyles = css.global`
  .tableMobile__card {
    display: grid;
    grid-template-columns: 1.75fr 0.25fr;
    align-items: center;
    background-color: ${colors.neutrals.white};
    border-radius: 1rem;
    justify-content: space-between;
  }
  .tableMobile__card .actions__menu__icon {
    display: flex;
    align-self: center;
    justify-content: flex-end;
  }

  .tableMobile__buttons {
    display: flex;
    justify-content: flex-end;
  }

  .tableMobile__card > button {
    all: unset;
    width: 100%;
  }

  .tableMobile__card__data {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
  }

  .tableMobile__data__status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }

  .subscription__status {
    display: flex;
    gap: 0.5rem;
    width: 100%;
  }

  .tableMobile__data__practice p {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }

  .tableMobile__divider {
    margin: auto;
    width: 90%;
  }

  .tableMobile__loading {
    background-color: ${colors.neutrals.white};
    pointer-events: none;
    display: grid;
    place-content: center;
    opacity: 0.9;
    height: 12rem;
  }

  .tableMobile__pagination {
    color: ${colors.neutrals[400]};
  }
`
