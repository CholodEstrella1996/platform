/* eslint-disable jsx-a11y/media-has-caption */
import { startTransition, useRef, useState } from 'react'

import HoverVideoPlayer from 'react-hover-video-player'

import { Controls } from './components/Controls'
import { Overlay } from './components/Overlay'
import { videoStyles } from './video.styles'

export type State = 'loading' | 'error' | 'readyToPlay' | 'played' | 'paused'

export type VideoProps = {
  src: string
  type?: 'default' | 'withControls' | 'preview'
  withoutBorderRadius?: boolean
}

/**
 * The Video component displays a video with various customization options.
 *
 * @property {string} src - The source of the video. Can be a local file or a URL.
 * @property {string} type - The type of the video. Can be 'default', 'withControls' or 'preview'.
 * - 'default' - The video will be displayed without controls and only have a play/pause button overlay.
 * - 'withControls' - The video will be displayed with controls.
 * - 'preview' - The video will be displayed as a preview when hovering over it.
 * @property {boolean} withoutBorderRadius - If true, the video will not have rounded corners.
 *
 * @example
 * <Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="default" />
 * <Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="withControls" />
 * <Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="preview" />
 * <Video src="https://www.w3schools.com/html/mov_bbb.mp4" type="default" withoutBorderRadius />
 */
export const Video = (props: VideoProps) => {
  const { src, type = 'default', withoutBorderRadius } = props

  const [state, setState] = useState<State>('loading')

  const [muted, setMuted] = useState(false)
  const [fullscreen, setFullscreen] = useState(false)

  const [currentTime, setCurrentTime] = useState(0)

  const ref = useRef<HTMLVideoElement>(null)

  const handleError = () => setState('error')

  const handleLoadedData = () => setState('readyToPlay')

  const handleSliderChange = (value: number): void => {
    if (!ref.current) return
    setCurrentTime(value)
    ref.current.currentTime = value
  }

  const handleMuteClick = () => setMuted((prevState) => !prevState)

  const handleFullscreenClick = () => setFullscreen((prevState) => !prevState)

  const handleTimeUpdate = () => {
    startTransition(() => {
      if (!ref.current) return
      setCurrentTime(ref.current.currentTime)
    })
  }

  const handlePlay = () => {
    if (!ref.current) return
    if (state === 'readyToPlay') ref.current.currentTime = 0

    void ref.current.play()
    setState('played')
  }

  const handlePause = () => {
    if (!ref.current) return
    void ref.current.pause()
    setState('paused')
  }

  const withControls = type === 'withControls'
  const isPlaying = state === 'played' || state === 'paused'

  const getOverlay = () => {
    const component = <Overlay state={state} onPlay={handlePlay} onPause={handlePause} />

    if (!withControls) return component
    if (isPlaying) return null

    return component
  }

  const containerClassName = `main-container ${fullscreen ? 'fullscreen' : ''}`
  const containerStyles = {
    '--opacity': state === 'loading' ? 0 : 1,
    '--border-radius': withoutBorderRadius ? '0' : '1rem',
  }

  if (type === 'preview') {
    return (
      <div style={containerStyles} className={containerClassName}>
        <HoverVideoPlayer
          videoSrc={src}
          restartOnPaused
          playbackRangeStart={5}
          playbackRangeEnd={15}
        />

        <style jsx>{videoStyles}</style>
      </div>
    )
  }

  return (
    <div style={containerStyles} className={containerClassName}>
      <video
        ref={ref}
        preload="metadata"
        disablePictureInPicture
        disableRemotePlayback
        className="video"
        onLoadedData={handleLoadedData}
        onPlay={handlePlay}
        onPause={handlePause}
        onError={handleError}
        onTimeUpdate={handleTimeUpdate}
        src={`${src}#t=10`}
        muted={muted}
        loop
      />
      {withControls && (
        <Controls
          state={state}
          value={currentTime}
          duration={ref.current?.duration || 0}
          muted={muted}
          fullscreen={fullscreen}
          onSliderChange={handleSliderChange}
          onMuteClick={handleMuteClick}
          onFullscreenClick={handleFullscreenClick}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      )}

      {getOverlay()}
      <style jsx>{videoStyles}</style>
    </div>
  )
}
