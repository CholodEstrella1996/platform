import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { ModalHeaderWithoutTitleStyles } from './ModalHeaderWithoutTitle.styles'

type Props = {
  setModalOpen: (openM: boolean) => void
}

const ModalHeaderWithoutTitleComponent = (props: Props) => {
  const { setModalOpen } = props

  return (
    <>
      <div className="closeButtonAbsolute">
        <IconButton onClick={() => setModalOpen(false)}>
          <Close fontSize="small" />
        </IconButton>
      </div>

      <style jsx>{ModalHeaderWithoutTitleStyles}</style>
    </>
  )
}

export default ModalHeaderWithoutTitleComponent
