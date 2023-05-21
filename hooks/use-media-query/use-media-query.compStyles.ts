import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme
export const UseMediaQueryStyles = css`
  /* General styles */
  .use-media-query__container {
    padding: 1rem;
  }

  /* Mobile styles */

  @media screen and (min-width: ${mediaQueries.mobile}) {
    .use-media-query__container {
      background-color: ${colors.primary[500]};
    }
  }

  /* Tablet styles */
  @media screen and (min-width: ${mediaQueries.tablet}) {
    .use-media-query__container {
      background-color: ${colors.mathematics[500]};
    }
  }

  /* Desktop styles */
  @media screen and (min-width: ${mediaQueries.desktop}) {
    .use-media-query__container {
      background-color: ${colors.science[500]};
    }
  }
`
