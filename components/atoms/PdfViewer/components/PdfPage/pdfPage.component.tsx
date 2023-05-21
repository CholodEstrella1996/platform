import { useEffect, useRef } from 'react'

import { Page } from 'react-pdf'
import { useIntersectionObserver } from 'usehooks-ts'

import Spinner from 'components/atoms/Spinner'
import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

const { mediaQueries } = theme

type Props = {
  pageNumber: number
  scale: number
  onPageChange: (pageNumber: number) => void
}

export const PdfPage = ({ pageNumber, scale, onPageChange }: Props) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const ref = useRef<HTMLDivElement | null>(null)
  const observer = useIntersectionObserver(ref, { threshold: 0.25 })

  useEffect(() => {
    if (!isTablet) return
    if (observer?.isIntersecting) onPageChange(pageNumber)
  }, [isTablet, observer?.isIntersecting])

  return (
    <Page
      pageNumber={pageNumber}
      loading={<Spinner />}
      renderAnnotationLayer={false}
      renderTextLayer={false}
      scale={scale}
      className="pdfViewer__page"
      inputRef={ref}
    />
  )
}
