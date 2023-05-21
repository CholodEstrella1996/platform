import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const ModalHtmlStyles = css`
  .modalHtml {
    background-color: 0 0 1rem rgba(0, 0, 0, 0.1);
    justify-content: center;
    align-items: center;
    outline: none;
  }
  .modalHtml__container {
    position: absolute;
    width: calc(100vw - 1rem);
    height: calc(100% - 1rem);
    overflow: hidden;
    background-color: ${colors.neutrals[50]};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 2rem;
    padding: 1rem;
    gap: 2rem;
  }

  .modalHtml__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    height: 100%;
  }

  .modalHtml__iframe {
    width: 100%;
    height: 100%;
  }

  .modalHtml__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 1rem 0;
  }

  .modalHtml__buttons :global(div),
  .modalHtml__buttons :global(button) {
    width: 100%;
  }

  .modalHtml__buttons :global(div:first-child) {
    order: 2;
  }
  .modalHtml__buttons :global(div:last-child) {
    order: 1;
  }
  .modalHtml__react-quill {
    overflow: auto;
    overflow-x: hidden;
    height: 100%;
  }

  .modalHtml__react-quill :global(.quill) {
    height: 100%;
  }

  .modalIframe {
    border: 0;
    width: 92%;
    height: 97%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .modalHtml__container {
      padding: 2rem;
    }
    .modalHtml__content {
      gap: 1rem;
    }

    .modalHtml__buttons {
      flex-direction: row;
      justify-content: space-between;
    }
    .modalHtml__buttons :global(div),
    .modalHtml__buttons :global(button) {
      width: fit-content;
    }

    .modalHtml__buttons :global(div:first-child) {
      order: 1;
    }
    .modalHtml__buttons :global(div:last-child) {
      order: 2;
    }
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .modalHtml__container {
      max-width: 56rem;
      max-height: 31.5rem;
    }
  }
`
export const ModalHtmlGlobalStyles = css.global`
  .ql-editor {
    padding: 1rem;
    background: white;
    border-radius: 2rem;
    border: solid 0rem;
  }

  .initial-background {
    padding: 0 1rem;
  }
  .initial-background .ql-editor {
    background: initial;
  }
  .ql-toolbar.ql-snow {
    display: none;
  }
  .ql-container.ql-snow {
    border: none;
  }
`
