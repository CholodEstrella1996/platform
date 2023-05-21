import { useEffect, useState } from 'react'

import { Add, DownloadOutlined, Remove } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import { useIntl } from 'react-intl'
import { Document, DocumentProps, pdfjs } from 'react-pdf'
import { useWindowSize } from 'usehooks-ts'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ErrorCard from 'components/molecules/ErrorCard'
import { useMediaQuery } from 'hooks/use-media-query'
import { downloadFromLink } from 'utils/helpers/downloadFromLink'

import PdfPage from './components/PdfPage'
import messages from './pdfViewer.messages'
import { pdfViewerStyles } from './pdfViewer.styles'
import { Button } from '../Button'
import Spinner from '../Spinner'

const { colors, mediaQueries } = theme

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export type PdfViewerProps = {
  src: string
  button?: {
    text: string
    icon: React.ReactNode
  }
}

export const PdfViewer = ({ src, button }: PdfViewerProps) => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [scale, setScale] = useState(1)
  const [error, setError] = useState(false)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()

  const { width, height } = useWindowSize()
  const [scaleByWindowsSize, setScaleByWindowsSize] = useState(1)

  const handleLoad: DocumentProps['onLoadSuccess'] = ({ numPages }) => setTotalPages(numPages)

  const zoomIn = () => {
    if (scale < 2.5) setScale((prevState) => prevState + 0.1)
  }

  const zoomOut = () => {
    if (scale > 0.75) setScale((prevState) => prevState - 0.1)
  }

  const handleDownload = (url: string) => {
    void downloadFromLink(url, 'document.pdf', (state: boolean) => setIsDownloading(state))
  }

  useEffect(() => {
    setScaleByWindowsSize(Math.min(width / 800, height / 600))
  }, [width, height])

  if (error) {
    return (
      <ErrorCard
        image="/Image-NotAllowed.svg"
        title={intl.formatMessage(messages.pdfViewer.error.title)}
        description={intl.formatMessage(messages.pdfViewer.error.description)}
      />
    )
  }

  return (
    <div className="pdfViewer">
      <div className="pdfViewer__controls">
        {isTablet && (
          <Typography variant="p1" weight="bold" color={theme.colors.neutrals[500]}>
            {intl.formatMessage(messages.pdfViewer.pagination, {
              page: currentPage,
              pages: totalPages,
            })}
          </Typography>
        )}

        <div className="pdfViewer__controls__tools">
          <div className="pdfViewer__controls__buttons">
            <IconButton onClick={zoomIn}>
              <Add />
            </IconButton>
            <IconButton onClick={zoomOut}>
              <Remove />
            </IconButton>
          </div>

          {button &&
            (isTablet ? (
              <Button
                loading={isDownloading}
                disabled={isDownloading}
                icon={button.icon}
                size="small"
                variant="outlined"
                onClick={() => void handleDownload(src)}>
                {button.text}
              </Button>
            ) : (
              <IconButton onClick={() => void handleDownload(src)} disabled={isDownloading}>
                {isDownloading ? (
                  <CircularProgress size={24} />
                ) : (
                  <DownloadOutlined style={{ color: colors.primary[500] }} />
                )}
              </IconButton>
            ))}
        </div>
      </div>

      <Document
        file={src}
        loading={<Spinner />}
        onLoadError={() => setError(true)}
        onSourceError={() => setError(true)}
        onLoadSuccess={handleLoad}
        className="pdfViewer__document">
        {Array.from(new Array(totalPages), (_, index) => (
          <PdfPage
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale={scaleByWindowsSize * scale}
            onPageChange={setCurrentPage}
          />
        ))}
      </Document>

      <style jsx>{pdfViewerStyles}</style>
    </div>
  )
}
