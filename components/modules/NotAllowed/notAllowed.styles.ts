import css from 'styled-jsx/css'

export const NotAllowedLocaleStyles = css`
  .notAllowed__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .notAllowed__container__image {
    width: 100%;
    min-height: 10rem;
  }
  .notAllowed__container__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .notAllowed__container {
      flex-direction: row;
    }
  }
`
