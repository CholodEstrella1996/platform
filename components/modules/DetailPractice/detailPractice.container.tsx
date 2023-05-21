import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { Result } from 'services/models/assignments.model'
import assignmentService from 'services/modules/assignments'

import { DetailPracticeComponent } from './detailPractice.component'
import messages from './detailPractice.messages'

type Prop = {
  assignmentId: number
}

const { getAssignmentById } = assignmentService

export const DetailPracticeContainer = ({ assignmentId }: Prop) => {
  const [assignment, setAssignment] = useState<Result>()
  const intl = useIntl()
  const { onError } = useNotification()
  const router = useRouter()
  const historyIndex = router.asPath.indexOf('assignments')

  const fetchAssignment = async () => {
    try {
      const data = await getAssignmentById(assignmentId)
      setAssignment(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetResult error >>: ', error)
      onError(intl.formatMessage(messages.getResult))
      void router.push(`${router.asPath.slice(0, historyIndex)}assignments`)
    }
  }

  useEffect(() => {
    void fetchAssignment()
  }, [])

  if (!assignment) return null
  return (
    <DetailPracticeComponent
      practiceDetail={assignment}
      fetchAssignment={fetchAssignment}
      productUnitId={assignment.productUnitId}
    />
  )
}
