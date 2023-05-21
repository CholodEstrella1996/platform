import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const InvitesStyles = css`
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2.25rem 0 2rem;
  }

  .invite {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2rem;
  }
  .invite__card {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    flex: 1;
    background: ${colors.neutrals.white};
    border-radius: 1rem;
  }

  .message__card__title {
    padding-bottom: 1rem;
  }

  .invite__card__body {
    display: flex;
    flex-direction: column;
  }

  .body__gap {
    gap: 1rem;
  }

  .highlight {
    background: ${colors.neutrals[50]};
    padding: 1rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .mailsCounter {
    margin-top: -2.5rem;
    z-index: 3;
    width: 100%;
    text-align: right;
    padding: 0 1rem;
  }

  .tag {
    border-radius: 0.5rem;
  }

  .invite__card__body :global(.input__filter) {
    padding-bottom: 1rem;
  }

  .invite__container :global(.buttonFooter) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 2rem 0;
    width: 100%;
  }

  .invite__container :global(.buttonFooter button) {
    width: 100%;
    justify-content: center;
  }

  .invite__card__body :global(.react-multi-email) {
    border: 2px solid ${colors.neutrals[300]};
    border-radius: 2rem;
    min-height: 19rem;
    overflow: hidden;
    padding: 0.5rem;
  }
  .invite__card__body :global(.react-multi-email:hover) {
    border-color: ${colors.primary[500]};
  }
  .invite__card__body :global(.react-multi-email:focus, .react-multi-email.focused) {
    border-color: ${colors.neutrals[300]};
  }
  .invite__card__body :global(.react-multi-email.empty > span[data-placeholder]) {
    margin: 0.5rem;
  }
  .invite__card__body :global(.react-multi-email input) {
    margin: 0.5em;
    color: ${colors.neutrals[800]};
    font-size: 0.75rem;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
  }
  .invite__card__body :global(.react-multi-email [data-tag]) {
    color: hsl(0, 0%, 20%);
    font-size: 0.75rem;
    font-family: var(--font-family);
    font-weight: var(--regular-weight);
    background-color: hsl(0, 0%, 90%);
    word-break: break-all;
  }
  .invite__card__body :global(.react-multi-email [data-tag] span) {
    color: ${colors.neutrals[800]};
    font-size: 1rem;
    font-weight: var(--semibold-weight);
  }
  .invite__card__body :global(.react-multi-email [data-tag] span:hover) {
    color: ${theme.colors.semantic.danger};
  }

  .highlight :global(.input__formControl > textarea::-webkit-scrollbar) {
    width: 0.5rem;
  }
  .highlight :global(.input__formControl > textarea::-webkit-scrollbar-track) {
    background: ${colors.neutrals[50]};
    border-radius: 6.25rem;
  }
  .highlight :global(.input__formControl > textarea::-webkit-scrollbar-thumb) {
    background: ${colors.neutrals[200]};
    border-radius: 6.25rem;
  }

  .highlight :global(.input__formControl .textArea__count) {
    width: 100%;
  }
  .highlight :global(.input__formControl .textArea__count span) {
    width: 90%;
    text-align: right;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .title {
      justify-content: space-between;
    }
    .invite {
      flex-direction: row;
    }

    .invite__container :global(.buttonFooter button) {
      width: auto;
    }
  }
`
