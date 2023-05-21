import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography, gradients, mediaQueries } = theme
export const NewEditGroupLocalStyles = css`
  .newEditGroup__container > span:first-child {
    padding-bottom: 0.5rem;
  }

  .stepOne__container {
    gap: 1rem;
  }

  .actionButtons {
    display: flex;
    justify-content: space-between;
    padding-top: 2rem;
  }
`

export const NewEditGroupGlobalStyles = css.global`
  .stepOne__container > span {
    padding-bottom: 0.5rem;
  }
  .stepOne__container,
  .tableSteps__container {
    display: flex;
    flex-direction: column;
    padding: 1rem;
    margin-top: 1rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
    border-radius: 2rem;
    gap: 1rem;
  }

  .tableSteps--header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .searchFilter__container {
    display: flex;
    align-items: initial;
    gap: 0.75rem;
    margin: 2rem 0;
    padding: 1rem;
    background: ${colors.neutrals[50]};
    border-radius: 1rem;
  }

  .tabPanel__card__filter {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem;
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
  }
  .tabPanel__card__filter :global(.input__filter .input__formControl) {
    padding-block: 0.66rem;
  }

  .step__label > span:nth-child(2) span {
    font-family: ${typography.name};
    color: ${colors.neutrals[400]};
    font-weight: ${typography.weight.semibold};
  }

  .step__label > span:first-child svg {
    font-size: 2rem;
  }

  .input {
    flex: 1;
    font-size: 1rem;
    font-weight: 500;
  }

  .table__filter {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .searchIcon {
    margin-top: 1.5rem;
    background: ${gradients.primary1};
    color: ${colors.neutrals.white};
  }
  .searchIcon:hover {
    background: ${gradients.primary2};
  }

  .tableSteps--header > span:first-child {
    text-transform: capitalize;
  }

  .nextButton {
    display: flex;
    justify-content: flex-end;
  }

  .tableSteps__container .tableMobile__spinner .spinner__container {
    position: inherit;
  }
  .tableSteps__container
    .tableDataDesktop-table
    .tableDataDesktop__container
    .MuiDataGrid-main
    .MuiDataGrid-overlay {
    padding: 1rem;
    align-items: flex-start;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .tabPanel__card__filter {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
`
