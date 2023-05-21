import css from 'styled-jsx/css'

import { theme } from '../ThemeProvider'

const { colors } = theme
export const SubscriptionTypeStyles = css`
  .subscription-type {
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 100%;
    background-color: ${colors.primary[500]};
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`
