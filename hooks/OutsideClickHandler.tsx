import { useEffect, useRef } from 'react'

export const useOutsideClickHandler = (outsideClick: { (): void; (): void }) => {
  const innerBorderRef = useRef<HTMLDivElement>(null)
  const onClick = (event: MouseEvent) => {
    if (event)
      if (
        innerBorderRef.current &&
        !innerBorderRef.current?.contains(event.target as Node | null)
      ) {
        outsideClick()
      }
  }
  useEffect(() => {
    document.addEventListener('click', onClick, true)
    return () => {
      document.removeEventListener('click', onClick, true)
    }
  })

  return { innerBorderRef }
}
