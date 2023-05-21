import { WarningAmberRounded } from '@mui/icons-material'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { DialogStyles } from './dialog.style'

type DialogProps = {
  message: string
  showIcon?: boolean
  fullWidth?: boolean
}

const { colors } = theme

export const DialogComponent = (props: DialogProps) => {
  const { message, showIcon = true, fullWidth = true } = props
  return (
    <>
      <div
        className="dialog"
        style={{
          '--width': fullWidth ? '100%' : 'fit-content',
          '--paddingInline': showIcon ? '1rem' : '1.5rem',
        }}>
        <div className="dialog__content">
          {showIcon && <WarningAmberRounded className="dialog__icon" />}
          <Typography color={colors.semantic.warning} variant="p1" className="dialog__message">
            {message}
          </Typography>
        </div>
      </div>
      <style jsx>{DialogStyles}</style>
    </>
  )
}
