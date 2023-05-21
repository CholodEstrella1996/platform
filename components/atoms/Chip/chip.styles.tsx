import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors, mediaQueries } = theme

export const ChipStyles = css`
  .chip {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    width: var(--width);
    min-width: 1.75rem;
    height: 1.75rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: var(--shrink);
    font-weight: var(--semibold-weight);
  }

  .chip--small,
  .chip--large {
    font-size: 0.75rem;
  }
  .chip--medium {
    font-size: 0.875rem;
  }

  .chip--default {
    background-color: ${colors.neutrals.white};
    color: ${colors.neutrals[500]};
  }
  .chip--invited {
    background-color: ${colors.neutrals[100]};
    color: ${colors.neutrals[500]};
  }

  .chip--active,
  .chip--submitted {
    background-color: ${colors.semantic.success};
    color: ${colors.neutrals.white};
  }

  .chip--pending {
    background-color: ${colors.technology[500]};
    color: ${colors.neutrals.white};
  }

  .chip--cancelled {
    background-color: ${colors.semantic.danger};
    color: ${colors.neutrals.white};
  }

  // TODO: inactive -> color temporal
  .chip--in-cancellation,
  .chip--cancellation,
  .chip--inactive,
  .chip--suspended,
  .chip--retry {
    background-color: ${colors.semantic.warning};
    color: ${colors.neutrals.white};
  }

  .chip--expired {
    background-color: ${colors.neutrals[500]};
    color: ${colors.neutrals.white};
  }

  .chip--unsubmitted {
    background-color: ${colors.neutrals[300]};
    color: ${colors.neutrals.white};
  }
  .chip--primary {
    background-color: ${colors.primary[500]};
    color: ${colors.neutrals.white};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .chip {
      width: var(--width);
    }
    .chip--large {
      font-size: 1.125rem;
    }
  }
`
