import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const GetAccessStyles = css`
  .getAccess__container {
    margin: 2rem 0;
    padding: 2rem 1.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    background-color: ${colors.primary[100]};
    border-radius: 2rem;
    box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.1);
  }
  .getAccess__description,
  .getAccess__clock {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  .getAccess__description {
    gap: 2rem;
  }
  .getAccess__clock {
    padding: 1rem 2rem;
    border-radius: 2rem;
    background-color: ${colors.neutrals.white};
    height: min-content;
    margin: 0;
    width: 100%;
  }
  .getAccess__clock__time {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    gap: 0.25rem;
  }

  .time__divider {
    padding-top: 0.125rem;
  }

  .getAccess__loading {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2rem;
    background-color: ${colors.neutrals.white};
    height: 6.5rem;
    width: 100%;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .getAccess__container {
      padding: 2rem;
    }
    .getAccess__description,
    .getAccess__clock {
      align-items: stretch;
    }

    .getAccess__clock {
      margin: 0 1rem 0 0;
      width: inherit;
    }
    .getAccess__loading {
      width: 15.2rem;
      margin: 0 1rem 0 0;
    }
  }
`
