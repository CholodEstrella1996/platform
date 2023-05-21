import {
  NewEditFormData,
  NewEditGroupForm,
} from 'components/modules/NewEditGroup/newEditGroup.model'

const formatMember = (type: string, data: NewEditFormData[]) => {
  const members = data.map((member) => ({
    id: member.id,
    roleName: type,
  }))
  return members
}

const formatNewEditGroup = (data: NewEditGroupForm) => ({
  name: data.name,
  description: data.description,
  subscriptionId: data?.currentSubscription ?? data?.subscription.id,
  members: formatMember('organization-student', data.students).concat(
    formatMember('organization-teacher', data.teachersInCharge),
  ),
})

export { formatNewEditGroup }
