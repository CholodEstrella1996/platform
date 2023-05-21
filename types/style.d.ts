/* eslint-disable react/no-typos */
/// <reference types="styled-jsx" />
import 'react'

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}
