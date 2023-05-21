import css from 'styled-jsx/css'

import { theme } from 'components/atoms/ThemeProvider'

const { colors, mediaQueries } = theme

export const pdfViewerStyles = css`
  .pdfViewer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: ${theme.colors.neutrals[100]};
    padding: 0.75rem;
    border-radius: 1.5rem;
    position: relative;
  }

  .pdfViewer__controls {
    margin-bottom: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 40rem;
    padding: 0.5rem 1.5rem;
    border-radius: 1.5rem;
    background-color: ${theme.colors.neutrals[50]};
    gap: 2rem;
  }

  .pdfViewer__controls__tools {
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .pdfViewer__controls__buttons {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .pdfViewer :global(.pdfViewer__document) {
    width: 100%;
    overflow: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    height: 65vh;
  }

  .pdfViewer :global(.pdfViewer__page) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .pdfViewer :global(::-webkit-scrollbar-track),
  .pdfViewer :global(::-webkit-scrollbar-corner) {
    background-color: ${colors.neutrals[100]};
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    .pdfViewer {
      padding: 1.5rem;
    }
    .pdfViewer__controls__tools {
      justify-content: flex-end;
    }
    .pdfViewer__controls {
      margin-bottom: 1.5rem;
    }
  }
`
