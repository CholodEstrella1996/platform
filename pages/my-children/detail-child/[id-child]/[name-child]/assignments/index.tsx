import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'

import Assignments from 'components/modules/Assignments'
import { MY_INSTITUTION_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import memberService from 'services/modules/member'
import { withAuth } from 'utils/helpers/evaluatePermissions'

const {
  member: { assignments },
} = MY_INSTITUTION_PERMISSIONS

const { getMemberById } = memberService

const AssignmentChildPage = () => {
  const { user } = useAppContext()
  const [memberId, setMemberId] = useState<string>()
  const router = useRouter()

  const id = router.query['id-child']

  const fetchMemberById = async () => {
    if (!user) return
    try {
      const response = await getMemberById(Number(user.organization?.id), Number(id))
      setMemberId(response.user.id)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error getMemberById in Assignments >>>', error)
    }
  }

  useEffect(() => {
    void fetchMemberById()
  }, [])

  if (!memberId) return null
  return <Assignments memberId={memberId} />
}

export default withAuth(AssignmentChildPage, assignments.view)
