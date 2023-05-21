import messages from 'components/modules/Dashboard/dashboard.messages'
import { DASHBOARD_HEADER_CARDS_IMG } from 'constants/defaultStaticImages'

export const cardsContent = [
  {
    id: 1,
    title: messages.cards.profile.title,
    subtitle: messages.cards.profile.subtitle,
    image: DASHBOARD_HEADER_CARDS_IMG.profile,
    requiredAction: 'update-profile',
    redirectTo: '/profile/edit',
  },
  {
    id: 2,
    title: messages.cards.dashboard,
    image: DASHBOARD_HEADER_CARDS_IMG.dashboard,
    requiredAction: 'visit-institution-dashboard',
    redirectTo: '/institutions',
  },
  {
    id: 3,
    title: messages.cards.group.title,
    subtitle: messages.cards.group.subtitle,
    image: DASHBOARD_HEADER_CARDS_IMG.group,
    requiredAction: 'create-group',
    redirectTo: '/groups/new',
  },
  {
    id: 4,
    title: messages.cards.children.title,
    subtitle: messages.cards.children.subtitle,
    image: DASHBOARD_HEADER_CARDS_IMG.children,
    requiredAction: 'invite-children',
    redirectTo: '/my-children/invitation/children',
  },
  {
    id: 5,
    title: messages.cards.practice,
    image: DASHBOARD_HEADER_CARDS_IMG.practice,
    requiredAction: 'complete-first-assignment',
    redirectTo: '/laboratories',
  },
]
