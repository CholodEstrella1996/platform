import { DropdownComponent } from './dropdown.component'
import { DropdownProps } from './dropdown.model'

export const DropdownContainer = ({ title, children }: DropdownProps) => (
  <DropdownComponent title={title}>{children}</DropdownComponent>
)
