import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const DialogStyles = css`
  .dialog,
  .dialog__content {
    width: 100%;
  }
  .dialog {
    background-color: ${colors.neutrals.white};
    border-radius: 2rem;
    overflow: hidden;
    margin: 1rem 0;
  }
  .dialog__content {
    min-height: 5.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    background-color: ${colors.semantic.warning}25;
    padding: 1rem var(--paddingInline);
  }

  .dialog__content :global(.dialog__icon) {
    width: 3.5rem;
    height: 3.5rem;
    color: ${colors.semantic.warning};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .dialog,
    .dialog__content {
      width: var(--width);
    }
  }
`
