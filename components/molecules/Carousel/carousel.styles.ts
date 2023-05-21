import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const CarouselLocalStyles = css`
  /* General */
  .carousel__container {
    display: grid;
    width: 100%;
    position: relative;
  }

  .carousel__container :global(.swiper) {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0 auto;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.08));
  }

  .carousel__container :global(.swiper-wrapper) {
    margin: 0 0 3rem 0;
  }

  .carousel__container :global(.swiper-slide) {
    height: auto;
    border-radius: 1rem;
    overflow: hidden;
  }

  .carousel__container :global(img) {
    width: 100%;
    height: 100%;
    object-position: center;
    object-fit: cover;
    border-radius: 1rem;
  }

  /* Arrow buttons */
  .carousel__container:hover :global(.prev-button),
  .carousel__container:hover :global(.next-button) {
    opacity: 1;
  }

  .prev-button,
  .next-button {
    all: unset;
    position: absolute;
    display: grid;
    place-items: center;
    color: ${colors.neutrals[700]};
    cursor: pointer;

    transition: opacity 0.2s;
    opacity: 0;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    background-color: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
    top: calc(50% - 3rem);
    z-index: 1;
  }

  .prev-button:hover,
  .next-button:hover {
    background-color: ${colors.neutrals[100]};
  }

  .prev-button:disabled,
  .next-button:disabled {
    display: none;
  }

  .prev-button {
    left: -1.5rem;
  }

  .next-button {
    right: -1.5rem;
  }
`
