import css from 'styled-jsx/css'

export const videoStyles = css`
  .main-container {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    display: flex;
    isolation: isolate;
  }

  .video {
    object-fit: contain;
    opacity: var(--opacity);
    width: 100%;
    aspect-ratio: 16 / 9;
    transition: all 0.5s ease-in-out;
  }

  .fullscreen {
    position: fixed;
    justify-content: center;
    top: 0;
    left: 0;
    border-radius: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 3;
    overflow: hidden;
  }

  .fullscreen .controls-container {
    position: absolute;
  }
`
