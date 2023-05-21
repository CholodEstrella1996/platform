import type { NextPage } from 'next'

import AnnouncementContainer from 'components/modules/Announcement'
import { GROUP_PERMISSIONS } from 'constants/permissions'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  groupAnnouncement: { view },
} = GROUP_PERMISSIONS

const AnnouncementPage: NextPage = () => <AnnouncementContainer />

export default withAuth(AnnouncementPage, view)
