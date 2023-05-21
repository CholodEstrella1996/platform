import css from 'styled-jsx/css'

const HeaderMobileStyles = css`
  .navbar__container__mobile {
    position: sticky;
    top: 0;
    padding: 0.25rem;
    max-width: 100%;
    z-index: 3;
    background-color: var(--neutrals-white-color);
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .navbar__opened {
    position: relative;
    height: 100vh;
    max-width: 100%;
    z-index: 2;
    background: var(--neutrals-white-color);
  }

  .navbar__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0.75rem;
  }

  .navbar__brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 0.5rem;
  }

  .navbar__icon {
    margin-left: 0.2rem;
    width: 5rem;
    height: 2.5rem;
  }

  .navbar__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 1rem;
  }

  .navbar__pages__item {
    display: flex;
    align-items: center;
    padding: 1rem;
    gap: 1.5rem;
    color: var(--neutrals-300-color);
  }
  .navbar__pages__item:hover {
    color: var(--primary-500-color);
    background-color: rgba(190, 235, 255, 0.12);
    border-radius: 0.25rem;
  }

  .navbar__pages__wrapper {
    display: grid;
    gap: 0rem;
    margin: auto;
    padding: 1rem;
    list-style: none;
    cursor: pointer;
  }

  .navbar__content__right {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    align-items: center;
  }

  .navbar__item__button {
    margin-top: 1rem;
  }
`

export default HeaderMobileStyles
