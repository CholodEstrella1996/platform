import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors } = theme

export const BreadcrumbsLocalStyles = css.global`
  .breadcrumbs__content {
    padding-top: 1rem;
  }
  .navigation__link {
    cursor: pointer;
  }
  .navigation__link:hover > span > p.isColor,
  .link--icon:hover {
    color: ${colors.primary[500]};
  }
  .link--icon {
    color: ${colors.neutrals[300]};
  }

  .navigation__link--lastUrl {
    cursor: default;
  }
`
