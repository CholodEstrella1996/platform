import { MouseEvent, useEffect, useRef, useState } from 'react'

import {
  Fullscreen,
  FullscreenExit,
  PauseOutlined,
  PlayArrowRounded,
  VolumeOff,
  VolumeUp,
} from '@mui/icons-material'
import { IconButton, Slider } from '@mui/material'

import { theme } from 'components/atoms/ThemeProvider'

import { controlsStyles } from './controls.styles'
import type { State } from '../../video.component'

const { colors } = theme

const sliderStyles = {
  flex: 1,
  '& .MuiSlider-thumb': {
    color: colors.primary[500],
    width: 10,
    height: 10,
    boxShadow: 'none',
    transition: 'all 0.2s ease-in-out',
    '&:hover, &:focus, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
    '&:active': {
      width: 15,
      height: 15,
      boxShadow: 'none',
    },
  },
  '& .MuiSlider-rail': {
    backgroundColor: colors.neutrals[100],
    height: '0.2rem',
    opacity: 1,
  },
  '& .MuiSlider-track': {
    backgroundColor: colors.primary[300],
    height: '0.2rem',
  },

  '&:not(:hover) .MuiSlider-thumb': {
    width: 0,
    height: 0,
  },
}

type Props = {
  state: State
  value: number
  duration: number
  muted?: boolean
  fullscreen?: boolean
  onSliderChange: (value: number) => void
  onMuteClick: () => void
  onFullscreenClick: () => void
  onPlay: () => void
  onPause: () => void
}

export const Controls = (props: Props) => {
  const {
    state,
    value,
    duration,
    muted,
    fullscreen,
    onSliderChange,
    onMuteClick,
    onFullscreenClick,
    onPlay,
    onPause,
  } = props

  const isPlaying = state !== 'played' && state !== 'paused'

  const [showControls, setShowControls] = useState(true)

  const timeout = useRef<NodeJS.Timeout | null>(null)

  const handleShowControls = () => {
    setShowControls(true)

    if (timeout.current) clearTimeout(timeout.current)
    timeout.current = setTimeout(() => {
      setShowControls(false)
    }, 3000)
  }

  const handleEvent = (event: MouseEvent<HTMLButtonElement>, eventHandler: () => void) => {
    if (!showControls) return
    event.stopPropagation()

    eventHandler()
  }

  const handleSliderChange = (event: Event, newValue: number | number[]): void => {
    if (!showControls) return
    event.stopPropagation()
    onSliderChange(Number(newValue))
  }

  const handleContainerClick = () => {
    if (state === 'paused') onPlay()
    else onPause()

    handleShowControls()
  }

  useEffect(() => {
    if (isPlaying) return
    handleShowControls()
  }, [state])

  if (isPlaying) return null
  return (
    <button
      type="button"
      className="controls-container"
      style={{ '--opacity': showControls ? 1 : 0 }}
      onClick={handleContainerClick}
      onMouseMove={handleShowControls}
      onTouchMove={handleShowControls}>
      <button type="button" className="controls" onClick={(e) => e.stopPropagation()}>
        <IconButton
          onClick={(e) => handleEvent(e, state === 'paused' ? onPlay : onPause)}
          className="main-button">
          {state === 'paused' ? <PlayArrowRounded /> : <PauseOutlined />}
        </IconButton>

        <Slider
          size="small"
          sx={sliderStyles}
          value={value}
          onChange={handleSliderChange}
          max={duration}
          min={0}
          componentsProps={{ thumb: { style: { boxShadow: 'none' } } }}
        />

        <div className="buttons">
          <IconButton
            className="controls__button"
            onClick={(e) => handleEvent(e, onMuteClick)}
            size="small">
            {muted ? <VolumeOff /> : <VolumeUp />}
          </IconButton>

          <IconButton
            className="controls__button"
            onClick={(e) => handleEvent(e, onFullscreenClick)}
            size="small">
            {fullscreen ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </div>
      </button>

      <style jsx>{controlsStyles}</style>
    </button>
  )
}
