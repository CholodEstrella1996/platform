import {
  Biotech,
  Business,
  Dashboard,
  GroupAdd,
  LocationCity,
  PeopleAltOutlined,
  RouteOutlined,
  ScienceOutlined,
} from '@mui/icons-material'

import {
  INSTITUTIONS_PERMISSIONS,
  MY_INSTITUTION_PERMISSIONS,
  GROUP_PERMISSIONS,
  LEARNING_UNIT_PERMISSIONS,
  MY_CHILDREN_PERMISSIONS,
  LABORATORIES_PERMISSIONS,
  EXPLORE_LABS_PERMISSIONS,
  DASHBOARD_PERMISSIONS,
} from './permissions'
import { LANDING_PAGE_URL, STORE_PAGE_URL } from './urls.constants'
import messages from '../components/molecules/Header/header.messages'
import { Page } from '../components/molecules/Header/header.models'

const PAGES: Page[] = [
  {
    id: 1,
    name: messages.menu.dashboard,
    url: '/dashboard',
    icon: Dashboard,
    permission: DASHBOARD_PERMISSIONS.view,
  },
  {
    id: 2,
    name: messages.menu.institutions,
    url: '/institutions',
    icon: LocationCity,
    permission: INSTITUTIONS_PERMISSIONS.view,
  },
  {
    id: 3,
    name: messages.menu.myInstitution,
    url: '/my-institution',
    icon: Business,
    permission: MY_INSTITUTION_PERMISSIONS.view,
  },
  {
    id: 4,
    name: messages.menu.myChildren,
    url: '/my-children',
    icon: PeopleAltOutlined,
    permission: MY_CHILDREN_PERMISSIONS.view,
  },
  {
    id: 5,
    name: messages.menu.groups,
    url: '/groups',
    icon: GroupAdd,
    permission: GROUP_PERMISSIONS.view,
  },
  {
    id: 6,
    name: messages.menu.learningRoutes,
    url: '/learning-units',
    icon: RouteOutlined,
    permission: LEARNING_UNIT_PERMISSIONS.view,
  },
  {
    id: 7,
    name: messages.menu.laboratories,
    url: '/laboratories',
    icon: Biotech,
    permission: LABORATORIES_PERMISSIONS.view,
  },
  {
    id: 8,
    name: messages.menu.explore,
    url: `${STORE_PAGE_URL}/explore-labs`,
    icon: ScienceOutlined,
    permission: EXPLORE_LABS_PERMISSIONS.view,
  },
]

const NOT_ALLOWED_PAGE = '/not-allowed'
const PROFILE_PAGE = '/profile'
const EDIT_MEMBER_PAGE = '/my-institution/edit-member'
const EDIT_CHILD_PAGE = '/my-children/edit-child'
const DETAIL_MEMBER_PAGE = '/my-institution/detail-member'
const DETAIL_CHILD_PAGE = '/my-children/detail-child'

const LANDING_SUPPORT = `${LANDING_PAGE_URL}/support`

export {
  PAGES,
  NOT_ALLOWED_PAGE,
  PROFILE_PAGE,
  EDIT_MEMBER_PAGE,
  EDIT_CHILD_PAGE,
  DETAIL_MEMBER_PAGE,
  DETAIL_CHILD_PAGE,
  LANDING_SUPPORT,
}
