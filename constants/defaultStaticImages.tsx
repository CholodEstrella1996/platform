import Brand from 'public/brand.webp'
import cardChildren from 'public/cardChildren.webp'
import cardDashboard from 'public/cardDashboard.webp'
import cardGroup from 'public/cardGroup.webp'
import cardPractice from 'public/cardPractice.webp'
import cardProfile from 'public/cardProfile.webp'
import ClabsIcon from 'public/cloudlabsIcon.webp'
import DemoAccess from 'public/demo-access.webp'
import GenericLabs from 'public/genericLabs.webp'
import Spinner from 'public/loader.svg'
import NotAllowed from 'public/notAllowed.webp'
import Rocket from 'public/rocket.webp'

const DEFAULT_LABS_IMG_PROPS = {
  image: GenericLabs,
  alt: 'Cloudlabs Laboratory',
}
const DEFAULT_BRAND_IMG_PROPS = {
  image: Brand,
  alt: 'Cloudlabs Brand',
}
const DEFAULT_ICON_IMG_PROPS = {
  image: ClabsIcon,
  alt: 'Cloudlabs Icon',
}
const DEFAULT_SPINNER_IMG_PROPS = {
  image: Spinner,
  alt: 'Loading',
}
const DEFAULT_NOT_ALLOWED_IMG_PROPS = {
  image: NotAllowed,
  alt: 'Not Allowed',
}
const DEFAULT_DEMO_ACCESS_IMG_PROPS = {
  image: DemoAccess,
  alt: 'demo-access',
}

const DASHBOARD_HEADER_CARDS_IMG = {
  profile: cardProfile,
  dashboard: cardDashboard,
  group: cardGroup,
  children: cardChildren,
  practice: cardPractice,
}

const SENT_INVITE_MODAL_IMG = {
  image: Rocket,
  alt: 'Invites sent',
}

export {
  DEFAULT_LABS_IMG_PROPS,
  DEFAULT_BRAND_IMG_PROPS,
  DEFAULT_ICON_IMG_PROPS,
  DEFAULT_SPINNER_IMG_PROPS,
  DEFAULT_NOT_ALLOWED_IMG_PROPS,
  DASHBOARD_HEADER_CARDS_IMG,
  DEFAULT_DEMO_ACCESS_IMG_PROPS,
  SENT_INVITE_MODAL_IMG,
}
