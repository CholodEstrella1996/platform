import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme

export const DataTableStyles = css`
  // DATA TABLES STYLES
  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root) {
    border: none;
  }

  :global(.MuiDataGrid-main .MuiDataGrid-columnHeaders) {
    background-color: ${colors.neutrals[100]};
    border-radius: 1rem 1rem 0 0;
  }

  :global(.MuiDataGrid-overlay) {
    background-color: ${colors.neutrals.white};
    pointer-events: none;
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 7rem;
    opacity: 0.75;
    z-index: 50;
    position: absolute;
  }

  :global(.MuiDataGrid-columnHeaderTitleContainerContent .MuiDataGrid-columnHeaderTitle) {
    color: ${colors.neutrals[800]};
    font-family: ${typography.name};
    font-weight: ${typography.weight.semibold};
  }
  :global(.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters),
  :global(.MuiTablePagination-toolbar .MuiTablePagination-displayedRows) {
    color: ${colors.neutrals[500]};
    font-family: ${typography.name};
    font-weight: ${typography.weight.semibold};
  }
  :global(.MuiTypography-root.MuiFormControlLabel-label) {
    color: ${colors.neutrals[500]};
    font-family: ${typography.name};
    font-weight: ${typography.weight.regular};
  }

  :global(.MuiTypography-root.MuiFormControlLabel-label.Mui-disabled) {
    color: ${colors.neutrals[100]};
  }

  :global(.MuiButtonBase-root.MuiButton-root.MuiButton-text) {
    color: ${colors.primary[500]};
    font-family: ${typography.name};
    font-weight: ${typography.weight.semibold};
  }

  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-menuIcon) {
    visibility: visible;
    width: auto;
  }

  :global(.MuiDataGrid-panel .MuiDataGrid-panelHeader) {
    display: none;
  }

  :global(.MuiDataGrid-row) {
    color: ${colors.neutrals[700]};
    font-family: ${typography.name};
    font-weight: ${typography.weight.regular};
  }

  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-row:hover) {
    cursor: pointer;
    background-color: ${colors.neutrals[50]};
  }

  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-columnSeparator) {
    visibility: hidden;
  }

  :global(
      .MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-columnHeader:focus-within
    ),
  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-columnHeader:focus),
  :global(.MuiDataGrid-root--densityStandard.MuiDataGrid-root .MuiDataGrid-cell:focus),
  :global(.MuiDataGrid-row .MuiDataGrid-cell:focus) {
    outline: none;
  }

  :global(.MuiDataGrid-iconButtonContainer button > svg),
  :global(.MuiDataGrid-menuIcon button > svg) {
    color: ${colors.neutrals[800]};
  }
  :global(.MuiDataGrid-cellContent) {
    color: ${colors.neutrals[400]};
  }
  :global(.MuiTableCell-root.MuiTablePagination-root) {
    color: ${colors.neutrals[400]};
    border-bottom: 0;
  }
  :global(.MuiPopover-root .MuiPaper-root),
  :global(.MuiPaper-elevation.MuiPaper-root) {
    border-radius: 1rem;
    gap: 1rem;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 12rem 5rem rgba(0, 0, 0, 0.01), 0 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0 3rem 3rem rgba(0, 0, 0, 0.09), 0 0.75rem 1.5rem rgba(0, 0, 0, 0.1),
      0 0 2rem rgba(0, 0, 0, 0.1);
    padding: 0.125rem 0.5rem;
  }

  :global(.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiDataGrid-paper) {
    border: 0;
    border-radius: 0 0 1rem 1rem;
  }
  :global(.hide-header-name .MuiDataGrid-columnHeaderTitle) {
    display: none;
  }

  :global(
      .actions__menu
        .MuiDataGrid-columnHeaderDraggableContainer
        .MuiDataGrid-columnHeaderTitleContainer
    ) {
    flex: 0.65;
  }
  :global(.actions__menu button svg) {
    font-size: 1.5rem;
  }

  :global(.tableDataDesktop__icons--user),
  :global(.tb-desktop-icons-user) {
    color: ${colors.neutrals[100]};
    width: 1.75rem;
    height: 1.75rem;
  }

  :global(.menu__buttons ul) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  :global(.action__buttons) {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 100%;
    border-radius: inherit;
    justify-content: start;
  }
`
