import { useMediaQuery as useMediaQueryFromLibrary } from '@mui/material'

export const useMediaQuery = (selectedMediaQuery: string) => {
  const matches = useMediaQueryFromLibrary(`(min-width: ${selectedMediaQuery})`)
  return matches
}
