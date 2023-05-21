import css from 'styled-jsx/css'

export const SpinnerStyles = css`
  .spinner__container {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: rgba(255, 255, 255, 0.5);
  }
`
