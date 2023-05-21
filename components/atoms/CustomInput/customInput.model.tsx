type InputProps = {
  name: string
  placeholder?: string
  label?: string
  className?: string

  required?: boolean
  pattern?: boolean
  isClearable?: boolean
  disabled?: boolean
  multiline?: boolean

  maxLength?: number
  maxNumber?: number
  rows?: number
  cols?: number

  icon?: React.ReactNode

  iconPosition?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'

  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
}

type LabelProps = {
  name: string
  color: string
  label?: string
}

type CloseButtonProps = {
  onClick: () => void
}

type ErrorMessageProps = {
  color: string
}

export type { InputProps, LabelProps, CloseButtonProps, ErrorMessageProps }
