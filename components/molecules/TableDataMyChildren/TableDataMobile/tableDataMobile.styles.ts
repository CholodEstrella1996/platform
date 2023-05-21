import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

export const TableDataMobileGlobalStyles = css.global`
  .tableDataMobile-select-all {
    margin-left: 0.75rem;
    color: ${theme.colors.neutrals[400]};
  }

  .tableDataMobile__container {
    background-color: ${theme.colors.neutrals.white};
  }
  .tableDataMobile__loading {
    background-color: ${theme.colors.neutrals.white};
    pointer-events: none;
    display: grid;
    place-content: center;
    opacity: 0.9;
    height: 12rem;
  }

  .tableDataMobile__card {
    padding: 0.75rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    cursor: pointer;
  }

  .tableDataMobile__card > button {
    all: unset;
    width: 100%;
  }
  .tableDataMobile__card-data {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
  }
  .tableDataMobile__icons {
    flex-shrink: 0;
    align-items: center;
    color: ${theme.colors.primary[500]};
  }
  .tableDataMobile__avatar {
    width: 2rem;
    height: 2rem;
  }
  .tableDataMobile__avatar__img {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
  }
  .tableDataMobile-btn {
    padding-right: 0.5rem;
    cursor: pointer;
  }

  .tableDataMobile-btn__option {
    all: unset;
    padding: 0.5rem;
    border-radius: 100%;
  }
  .tableDataMobile--name {
    color: ${theme.colors.neutrals[400]};
    line-height: 1rem;
  }
  .tableDataMobile--mail {
    color: ${theme.colors.neutrals[300]};
  }

  .tableDataMobile__icons-user {
    height: 3.5rem;
    width: 3.5rem;
    color: ${theme.colors.neutrals[50]};
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }
  .tableDataMobile__divider {
    margin: auto;
    width: 90%;
    display: block;
  }

  .tableDataMobile__status__subs {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .menu__buttons ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .action__buttons {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: inherit;
    justify-content: start;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }
`
