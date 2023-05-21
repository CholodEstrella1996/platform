import { Box, SxProps } from '@mui/material'

import Spinner from 'components/atoms/Spinner'

type Prop = {
  style: SxProps
}

const ModalSpinner = ({ style }: Prop) => (
  <Box sx={style}>
    <Spinner />
  </Box>
)
export default ModalSpinner
