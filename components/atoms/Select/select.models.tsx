import { MutableRefObject } from 'react'

import { GroupBase } from 'react-select'
import SelectType from 'react-select/dist/declarations/src/Select'

type FieldReference = SelectType<OptionProps, boolean, GroupBase<OptionProps>> | null

type OptionProps = {
  id: number
  value: string | number
  label: string
}

type SelectProps = {
  name: string
  label: string
  size?: string
  placeholder?: string
  disabled?: boolean
  isClearable?: boolean
  multiple?: boolean
  required?: boolean
  className?: string
  options: OptionProps[]
  isSearchable?: boolean
  fullWidth?: boolean
  reference?: MutableRefObject<FieldReference>
  isVisible?: boolean
}

export type { OptionProps, SelectProps, FieldReference }
