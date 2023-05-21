import { CSSProperties, useState } from 'react'

import { ErrorOutline, PauseOutlined, PlayArrowRounded } from '@mui/icons-material'
import { CircularProgress } from '@mui/material'

import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { overlayStyles } from './overlay.styles'
import type { State } from '../../video.component'

const { mediaQueries } = theme

type Props = {
  state: State
  onPlay: () => void
  onPause: () => void
}

export const Overlay = (props: Props) => {
  const { state, onPlay, onPause } = props

  const isTablet = useMediaQuery(mediaQueries.tablet)

  const [showOverlay, setShowOverlay] = useState(true)

  const handleClick = (type: 'play' | 'pause' | 'pauseForMobile') => {
    if (type === 'pauseForMobile') {
      return {
        onClick: () => {
          onPause()
          setShowOverlay(true)
        },
      }
    }

    return {
      onClick: () => {
        setShowOverlay(false)

        if (type === 'play') onPlay()
        else onPause()
      },
    }
  }

  const states = {
    loading: (
      <div className="icon">
        <CircularProgress size="2.5rem" className="spinner" />
      </div>
    ),
    error: (
      <div className="icon">
        <ErrorOutline className="error-icon" />
      </div>
    ),
    readyToPlay: (
      <div className="icon" role="button" tabIndex={0} {...(showOverlay && handleClick('play'))}>
        <PlayArrowRounded className="play-icon" />
      </div>
    ),
    played: (
      <div className="icon" role="button" tabIndex={0} {...(showOverlay && handleClick('pause'))}>
        <PauseOutlined className="pause-icon" />
      </div>
    ),
    paused: (
      <div className="icon" role="button" tabIndex={0} {...(showOverlay && handleClick('play'))}>
        <PlayArrowRounded className="play-icon" />
      </div>
    ),
  }

  const buttonClassName = `overlay overlay--${isTablet ? 'desktop' : 'mobile'}`

  const buttonStyles: CSSProperties = { '--opacity': showOverlay ? 1 : 0, all: 'unset' }

  return (
    <button type="button" style={buttonStyles} {...(!showOverlay && handleClick('pauseForMobile'))}>
      <div className={buttonClassName}>{states[state]}</div>

      <style jsx>{overlayStyles}</style>
    </button>
  )
}
