import { ChipProps } from './chip.model'
import { ChipStyles } from './chip.styles'

export const ChipComponent = ({
  title,
  status = 'default',
  fullWidth,
  size = 'small',
}: ChipProps) => (
  <>
    <div
      style={{
        '--width': fullWidth ? '100%' : 'fit-content',
        '--shrink': fullWidth ? '1' : '0',
      }}
      className={`chip chip--${status} chip--${size}`}>
      {title}
    </div>
    <style jsx>{ChipStyles}</style>
  </>
)
