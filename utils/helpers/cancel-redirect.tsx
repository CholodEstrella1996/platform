import router from 'next/router'

import { DETAIL_CHILD_PAGE, DETAIL_MEMBER_PAGE, PROFILE_PAGE } from 'constants/platformPages'

export const onCancel = (clientId?: number) => {
  if (!clientId) return void router.push(PROFILE_PAGE)

  const childName = router.query['name-child']
  const memberName = router.query['name-member']
  const href = childName
    ? `${DETAIL_CHILD_PAGE}/${clientId}/${String(childName)}`
    : `${DETAIL_MEMBER_PAGE}/${clientId}/${String(memberName)}`
  return void router.push(href)
}
