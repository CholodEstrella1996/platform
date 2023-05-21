import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

const TableDataMobileStyle = css.global`
  .tableCheckbox__mobile {
    padding: 0.75rem 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 0.5rem;
    cursor: pointer;
    width: 100%;
    flex: 1;
  }
  .tableCheckbox__mobile__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex: 1;
  }

  .tableCheckbox__mobile > button {
    all: unset;
    width: 100%;
  }
  .tableCheckbox__mobile__detail {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
    width: 100%;
  }

  .mobile__detail__name {
    color: ${colors.neutrals[400]};
    line-height: 1rem;
  }
  .mobile__detail__email {
    color: ${colors.neutrals[300]};
  }

  .tableCheckbox__mobile__avatar {
    height: 2.5rem;
    width: 2.5rem;
    color: ${colors.neutrals[100]};
    display: flex;
    justify-content: center;
    flex-shrink: 0;
  }

  .tableCheckbox__member,
  .tableCheckbox__mobile__status__subs {
    display: flex;
  }
  .tableCheckbox__mobile__status__subs {
    gap: 0.5rem;
    align-items: center;
  }

  .tableCheckbox__member {
    flex-direction: column;
    gap: 0.5rem;
  }

  .tableCheckbox__mobile :global(.line-clamp) {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }

  .tableCheckbox__divider {
    margin: auto;
    width: 90%;
    display: block;
  }

  .action__buttons {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: inherit;
    justify-content: start;
  }

  .footer__table {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export default TableDataMobileStyle
