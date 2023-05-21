import css from 'styled-jsx/css'

export const textIconStyles = css`
  .textIcon__container {
    display: flex;
    justify-content: center;
  }
  .buttonIconText {
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  .buttonIconText__small {
    height: 1.5rem;
    border: none;
    background-color: transparent;
  }
  .buttonIconText__medium {
    height: 3rem;
    border: none;
    background-color: transparent;
  }
  .buttonIconText__large {
    height: 6rem;
    border: none;
    background-color: transparent;
  }
  .textIcon__container :global(.text__margin--small) {
    margin: 0.5rem;
  }
  .textIcon__container :global(.text__margin--medium) {
    text-align: initial;
    margin: 0.5rem;
  }
  .textIcon__container :global(.text__margin--large) {
    text-align: initial;
    margin: 1rem;
  }
`
