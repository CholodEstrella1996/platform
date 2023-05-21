import Announcement from 'components/modules/Announcement'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  institutionAnnouncement: { view },
} = MY_INSTITUTION_PERMISSIONS

const AnnouncementPage = () => <Announcement />

export default withAuth(AnnouncementPage, view)
