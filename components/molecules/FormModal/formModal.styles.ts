import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const FormModalLocalStyles = css`
  .step-form__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .step-form__close {
    color: ${colors.primary[500]};
    cursor: pointer;
  }

  .step-form__buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    gap: 0.5rem;
  }

  .step-form__buttons :global(.container),
  .step-form__buttons :global(button) {
    width: 100%;
  }

  .step-form__buttons :global(div:first-child) {
    order: 2;
  }
  .step-form__buttons :global(div:last-child) {
    order: 1;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .step-form__buttons {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
      margin-top: auto;
    }

    .step-form__buttons :global(.container),
    .step-form__buttons :global(button) {
      width: fit-content;
    }

    .step-form__buttons :global(div:first-child) {
      order: 1;
    }
    .step-form__buttons :global(div:last-child) {
      order: 2;
    }
  }
`

export const FormModalGlobalStyles = css.global`
  .form-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    outline: 0;
  }

  .form-modal__dialog {
    position: relative;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    width: 100%;
  }
  .form-modal__container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0.5rem;
    padding: 1rem;
    background-color: ${colors.neutrals[50]};
    border-radius: 1rem;
    outline: none;
    box-shadow: 0px 12rem 5rem rgba(0, 0, 0, 0.01), 0px 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0px 3rem 3rem rgba(0, 0, 0, 0.09), 0px 0.75rem 1.5rem rgba(0, 0, 0, 0.1),
      0px 0px 2rem rgba(0, 0, 0, 0.1);
  }

  .form-modal__container > div {
    display: grid;
    grid-template-columns: 1fr;
  }

  .form-modal__container > div::-webkit-scrollbar {
    width: 0.5rem;
  }

  .form-modal__container > div::-webkit-scrollbar-track {
    background: ${colors.neutrals[50]};
    border-radius: 6.25rem;
  }

  .form-modal__container > div::-webkit-scrollbar-thumb {
    background: ${colors.neutrals[200]};
    border-radius: 6.25rem;
  }

  @media screen and (max-width: ${mediaQueries.tablet}) {
    .form-modal__container--fullScreen {
      min-height: 100vh;
      width: 100vw;
      border-radius: 0;
      margin: 0;
    }
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .form-modal {
      align-items: center;
    }
    .form-modal__container {
      width: 80vw;
      min-height: fit-content;
      padding: 2rem;
    }
  }
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .form-modal__container {
      width: 55vw;
    }
  }
`
