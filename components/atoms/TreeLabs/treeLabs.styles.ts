import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, typography } = theme
export const TreeLabsGlobalStyles = css.global`
  .react-checkbox-tree {
    display: flex;
    flex-direction: row-reverse;
    font-size: 0.75rem;
    font-family: ${typography.name};
    font-weight: ${typography.weight.semibold};
    color: ${colors.neutrals[400]};
  }
  .react-checkbox-tree > ol {
    flex: 1 1 auto;
  }
  .react-checkbox-tree ol {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
  }
  .react-checkbox-tree ol ol {
    padding-left: 2rem;
  }
  .react-checkbox-tree button {
    order: 2;
    padding-left: 0.375rem;
  }
  .react-checkbox-tree button:disabled {
    cursor: not-allowed;
  }
  .react-checkbox-tree .rct-bare-label {
    cursor: default;
  }
  .react-checkbox-tree label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .react-checkbox-tree:not(.rct-native-display) input {
    display: none;
  }
  .react-checkbox-tree.rct-native-display input {
    margin: 0 0.25rem;
  }

  .rct-disabled > .rct-text > label {
    opacity: 0.75;
    cursor: not-allowed;
  }
  .rct-disabled > .rct-text > label:hover {
    background: transparent;
  }
  .rct-disabled > .rct-text > label:active {
    background: transparent;
  }

  .rct-text {
    display: flex;
    width: fit-content;
    align-items: center;
    padding: 1rem;
    border-radius: 1rem;
  }
  .rct-text:hover {
    background-color: ${colors.neutrals[50]};
  }

  .rct-text label {
    display: flex;
    gap: 0.75rem;
  }

  .rct-options {
    flex: 0 0 auto;
    margin-left: 0.5rem;
    text-align: right;
  }

  .rct-option {
    opacity: 0.75;
    border: 0;
    background: none;
    cursor: pointer;
    padding: 0 0.25rem;
    font-size: 1rem;
  }
  .rct-option:hover {
    opacity: 1;
  }
  .rct-option + .rct-option {
    margin-left: 0.25rem;
  }

  .rct-checkbox {
    display: flex;
  }
  .rct-collapse *,
  .rct-checkbox *,
  .rct-node-icon * {
    margin: 0;
  }

  .rct-node-icon {
    order: 2;
  }
  .rct-collapse {
    align-self: stretch;
    border: 0;
    background: none;
    line-height: normal;
    color: inherit;
    font-size: 0.75rem;
  }
  .rct-collapse.rct-collapse-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  .rct-native-display .rct-checkbox {
    display: none;
  }

  .rct-node-clickable {
    cursor: pointer;
  }
  .rct-title {
    padding: 0 0.25rem;
  }
`
