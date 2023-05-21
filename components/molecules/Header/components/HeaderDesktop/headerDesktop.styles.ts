import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
const HeaderDesktopStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 5.5rem;
    padding: 1.5rem;
    z-index: 3;
    gap: 1rem;
    background: ${colors.neutrals.white};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .navbar__content {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex: 1;
  }

  .navbar__icon {
    width: 5rem;
    height: 2.5rem;
    cursor: pointer;
  }

  .navbar__icon :global(img) {
    cursor: pointer;
  }

  ul.navbar__pages {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    flex: 1;
  }

  li.navbar__pages__item {
    list-style: none;
  }

  li.navbar__pages__item :global(p) {
    white-space: wrap;
  }

  li.navbar__pages__item:hover :global(a span p) {
    color: var(--primary-500-color);
  }

  .navbar__subPages__wrapper {
    list-style: none;
    display: grid;
    position: absolute;
    top: 3rem;
    z-index: 1;
    padding: 0.75rem;
    color: var(--neutrals-400-color);
    gap: 0.5rem;
    margin-top: 0.25rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    min-width: 12rem;
    background-color: var(--neutrals-white-color);
    border-radius: 1rem;
  }

  .navbar__subPages__wrapper li {
    padding: 0.5rem;
  }

  .navbar__subPages__wrapper li:hover {
    background-color: rgba(190, 235, 255, 0.12);
    border-radius: 0.25rem;
    color: var(--primary-500-color);
  }

  .navbar__subPages__wrapper li:hover div p {
    color: var(--primary-500-color);
  }

  .navbar__right {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .navbar__right :global(button) {
    flex-shrink: 0;
  }
  .navbar__right :global(button p) {
    white-space: nowrap;
  }
  .navbar__right__buttons {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    justify-content: center;
  }

  @media screen and (min-width: ${mediaQueries.desktop}) {
    .navbar__content {
      gap: 4rem;
    }

    ul.navbar__pages {
      gap: 2rem;
    }

    li.navbar__pages__item :global(p) {
      white-space: nowrap;
    }
  }
`
export default HeaderDesktopStyles
