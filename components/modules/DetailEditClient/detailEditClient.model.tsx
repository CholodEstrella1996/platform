import { OptionProps } from 'components/atoms/Select/select.models'
import { ClientResponse, CommonClient } from 'services/models/client.model'

type NavigationProps = {
  id: number
  email: string
  isEditable?: boolean
  isLoggedUser?: boolean
  onDelete: () => void
  onSubmit: () => Promise<void>
  isSaving?: boolean
}

type ClientProps = {
  client: ClientResponse
  onDelete: () => void
  onSubmit: () => Promise<void>
  isEditable?: boolean
  isLoggedUser?: boolean
  isLoading?: boolean
  options?: Options
  clientId?: number
}

type Options = {
  identityType: OptionProps[]
  gender: OptionProps[]
  educationalLevel: OptionProps[]
}

type ClientInputForm = Pick<
  CommonClient,
  'avatarUrl' | 'birthDate' | 'email' | 'firstName' | 'identityNumber' | 'phoneNumber' | 'surname'
> & {
  image: string | File
  educationalLevel: string
  gender: string
  identityType: string
  subscription: number
}

export type { NavigationProps, ClientProps, Options, ClientInputForm }
