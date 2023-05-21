import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme
export const InputFileStyles = css`
  .inputFile__container {
    width: 100%;
    height: auto;
  }
  .inputFile__button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
  }

  .inputFile__button label {
    display: flex;
    align-items: center;
    border: 0.125rem solid ${colors.primary[500]};
    border-radius: 6.25rem;
    color: ${colors.primary[500]};
    background: transparent;
    cursor: pointer;
  }
  .inputFile__button label:hover {
    border-color: ${colors.primary[800]};
    color: ${colors.primary[800]};
  }
  .inputFile__button input {
    display: none;
  }
  .inputFile__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .inputFile__content--files {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .inputFile__content--title {
    margin-left: 2.35rem;
  }
`

export const InputFileGlobalStyles = css.global`
  .inputFile__content--icon {
    display: flex;
    height: 1.5rem;
    color: ${colors.semantic.danger};
    cursor: pointer;
  }

  .inputFile__button--errors {
    padding: 0.5rem;
    margin-left: 0.5rem;
  }

  .inputFile__button--small {
    display: flex;
    align-items: center;
    height: 1.5rem;
    padding: 0rem 1rem;
  }

  .inputFile__button--medium {
    display: flex;
    align-items: center;
    padding: 0.375rem 1.5rem;
  }
  .inputFile__button--large {
    display: flex;
    align-items: center;
    height: 2.5rem;
    padding: 0.625rem 1.875rem;
  }
  .inputFile__content--files button > div:first-child {
    display: var(--display);
  }

  .inputFile__content__name {
    display: flex;
    flex-direction: row;
  }

  .buttonIconText.buttonIconText__small {
    cursor: unset;
  }
  .buttonIconText.buttonIconText__small:nth-child(1) p {
    color: var(--text-color);
  }

  .text__margin--small > p {
    text-align: left;
    width: fit-content;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
  }
`
