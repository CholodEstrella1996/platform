import CustomInputComponent from './customInput.component'
import { InputProps } from './customInput.model'

const CustomInputContainer = (props: InputProps) => <CustomInputComponent {...props} />
export default CustomInputContainer
