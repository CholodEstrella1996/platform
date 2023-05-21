import { OptionProps } from 'components/atoms/Select/select.models'

type InputProps = {
  name: string
  label: string
  placeholder: string
  isClearable?: boolean
  options?: OptionProps[]
  iconPosition?: 'left' | 'right'
  size?: 'small' | 'medium' | 'large'
  icon?: React.ReactNode
  visible?: boolean
}

type FilterProps = {
  input?: InputProps
  select?: InputProps
  showSelectInMobile?: boolean
  disabledSubscription?: boolean
  onSearch: () => Promise<void>
}

export type { InputProps, FilterProps }
