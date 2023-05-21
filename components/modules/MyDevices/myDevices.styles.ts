import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const MyDevicesStyles = css`
  .my-devices,
  .my-devices__activate,
  .my-devices__container,
  .my-devices__content,
  .card-devices__info {
    display: grid;
  }

  .my-devices {
    margin-top: 2rem;
    gap: 2rem;
  }

  .my-devices__activate {
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 2rem;
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .my-devices__activate :global(.container),
  .my-devices__activate :global(.container button) {
    width: 100%;
  }

  .my-devices__container {
    gap: 1rem;
  }

  .my-devices__content {
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
  }

  .card-devices {
    display: flex;
    justify-content: space-between;
    background-color: ${colors.neutrals.white};
    padding: 1.5rem;
    border-radius: 2rem;
    align-items: center;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }
  .card-devices__info {
    gap: 0.5rem;
  }

  .card-devices :global(.action__button) {
    width: 2.75rem;
    height: 2.75rem;
    flex-shrink: 0;
    color: ${colors.semantic.danger};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .my-devices__activate {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .my-devices__activate :global(.container),
    .my-devices__activate :global(.container button) {
      width: fit-content;
    }

    .my-devices__content {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
