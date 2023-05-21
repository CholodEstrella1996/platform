import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'

import { Typography } from 'components/atoms/Typography'

import { ModalHeaderStyles } from './ModalHeader.styles'

type Props = {
  buttonOutlined?: boolean
  buttonContained?: boolean
  title: string
  color: string
  setModalOpen: (openM: boolean) => void
}

const ModalHeaderComponent = (props: Props) => {
  const { buttonOutlined, buttonContained, title, color, setModalOpen } = props

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {buttonOutlined && buttonContained ? (
        <div className="modalHtml__container__title modalHtml__container__title--center">
          <Typography variant="h5" weight="bold" color={color}>
            {title}
          </Typography>
        </div>
      ) : (
        <div className="modalHtml__container__title modalHtml__container__title--start">
          <Typography variant="h5" weight="bold" color={color}>
            {title}
          </Typography>

          <IconButton
            onClick={() => {
              setModalOpen(false)
            }}>
            <Close fontSize="small" />
          </IconButton>
        </div>
      )}

      <style jsx>{ModalHeaderStyles}</style>
    </>
  )
}

export default ModalHeaderComponent
