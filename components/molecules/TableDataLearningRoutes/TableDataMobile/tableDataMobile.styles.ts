import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

const TableDataMobileStyle = css.global`
  .tableDataMobile-select-all {
    margin-left: 0.75rem;
    color: ${colors.neutrals[400]};
  }
  .tableDataMobile__container {
    background-color: ${colors.neutrals.white};
  }

  .tableDataMobile__loading {
    background-color: ${colors.neutrals.white};
    pointer-events: none;
    display: grid;
    place-content: center;
    opacity: 0.9;
    height: 12rem;
  }

  .tableDataMobile__card {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
  }
  .tableDataMobile__card-data {
    width: 100%;
  }
  .tableDataMobile__icons {
    color: ${colors.primary[500]};
  }

  .tableDataMobile--name {
    color: ${colors.neutrals[400]};
    line-height: 1rem;
  }
  .tableDataMobile-date {
    color: ${colors.neutrals[300]};
  }

  .tableDataMobile__icons-user {
    height: 3.5rem;
    width: 3.5rem;
    color: ${colors.neutrals[50]};
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }
  .tableDataMobile__divider {
    margin: auto;
    width: 90%;
    display: block;
  }

  .tableDataMobile__card :global(.subscription-type) {
    margin: 0;
  }

  .line-clamp {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }
`

export default TableDataMobileStyle
