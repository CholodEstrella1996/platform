import { Box, CircularProgress } from '@mui/material'

type Prop = {
  isTablet: boolean
}

const ModalSpinner = ({ isTablet }: Prop) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: isTablet ? '14.5rem' : '18.5rem',
    }}>
    <CircularProgress />
  </Box>
)
export default ModalSpinner
