import { messages } from './breadcrumbs.messages'

const CRUMBS = {
  groups: messages.breadcrumbs.groups,
  member: messages.breadcrumbs.member,
  'my-institution': messages.breadcrumbs.institution,
  institutions: messages.breadcrumbs.institutions,
  laboratories: messages.breadcrumbs.laboratories,
  assignments: messages.breadcrumbs.assignments,
  subscriptions: messages.breadcrumbs.subscriptions,
  'my-children': messages.breadcrumbs.children,
  'learning-units': messages.breadcrumbs.learning,
  'director-invitation': messages.breadcrumbs.invitation.director,
  'student-invitation': messages.breadcrumbs.invitation.student,
  'teacher-invitation': messages.breadcrumbs.invitation.teacher,
  'children-invitation': messages.breadcrumbs.invitation.children,
  'institution-users': messages.breadcrumbs.members,
}

const notRedirect = ['detail', 'edit', 'member']
const urlKeycloak = '#state'

export { CRUMBS, notRedirect, urlKeycloak }
