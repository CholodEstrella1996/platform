import { OptionProps } from 'components/atoms/Select/select.models'
import { ClientInputForm } from 'components/modules/DetailEditClient/detailEditClient.model'
import { Client, ClientResponse } from 'services/models/client.model'

const clientDetail = (client: Client) => ({
  firstName: client.user.firstName,
  surname: client.user.surname,
  phoneNumber: client.user.phoneNumber,
  identityType: client.user.identityType?.name,
  identityNumber: client.user.identityNumber,
  email: client.user.email,
  avatarUrl: client.user.avatarUrl,
  birthDate: client.user.birthDate,
  gender: client.user.gender?.name,
  educationalLevel: client.user.educationalLevel?.name,
  subscription: client.subscriptions?.at(0)?.id ?? '',
})
const clientRequest = (
  successClient: ClientInputForm,
  client?: ClientResponse['user'],
  gender?: OptionProps,
  educationalLevel?: OptionProps,
) => {
  const formData = new FormData()
  const updateMember = {
    ...client,
    ...(!client?.isCustomer && { isCustomer: 0 }),
    organizationId: client?.organizationId ?? client?.organization?.id,
    avatarUrl: successClient.avatarUrl,
    birthDate: successClient.birthDate,
    educationalLevelId: educationalLevel?.id,
    email: successClient.email,
    firstName: successClient.firstName,
    genderId: gender?.id,
    identityNumber: successClient.identityNumber,
    identityType: successClient.identityType,
    phoneNumber: successClient.phoneNumber,
    surname: successClient.surname,
    subscriptionId: successClient.subscription,
  }
  if (successClient.avatarUrl) {
    formData.append('avatar', successClient.avatarUrl as File)
  }
  formData.append('data', new Blob([JSON.stringify(updateMember)], { type: 'application/json' }))

  return formData
}

export { clientDetail, clientRequest }
