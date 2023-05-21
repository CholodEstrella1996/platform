import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { AssignmentsResponse } from 'services/models/assignments.model'
import { ApiRequest } from 'services/models/responseBase.model'
import assignmentService from 'services/modules/assignments'
import { formatStudentNameByStatus } from 'utils/helpers/edit-content'
import { revertDate } from 'utils/helpers/revertDate'

import { AssignmentsComponent } from './assignments.component'
import messages from './assignments.messages'
import { Actions, DataFilter } from './assignments.model'

const {
  family: { child },
  organization: { student: orgStudent },
  independent: { student: indStudent, teacher: indTeacher },
} = ROLES
const profileRoles = [orgStudent, indStudent, indTeacher, child]
const RETRY_STATUS = 'retry'

type Props = {
  memberId?: string
  organizationId?: number
}
const { getAssignments, restoreDeleteAssignment, downloadAssignments } = assignmentService

export const AssignmentsContainer = ({ memberId, organizationId }: Props) => {
  const intl = useIntl()
  const router = useRouter()
  const { user: loggedUser, profile } = useAppContext()
  const { onError, onSuccess } = useNotification()
  const [isLoading, setIsLoading] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
  const [assignments, setAssignments] = useState<AssignmentsResponse>()
  const [numberPage, setNumberPage] = useState(0)

  const methods = useForm<DataFilter>({ mode: 'all' })
  const { control } = methods
  const idGroup = router.query['id-group'] ? Number(router.query['id-group']) : undefined
  const childOrStudentId = profileRoles.includes(profile) && !idGroup && loggedUser?.id

  const { subscription, classroom, area, application, status, date, user } = useWatch({
    control,
  })

  const requestDateFrom = date?.[0]
  const requestDateTo = date?.[1]
  const fetchAssignments = async (pageNumber = 0) => {
    setIsLoading((prevState) => !prevState)
    setNumberPage(pageNumber)

    const params: ApiRequest = {
      userId: memberId ?? (childOrStudentId || user),
      pageNumber,
      pageSize: 10,
      subscriptionId: subscription,
      areaIds: area,
      applicationIds: application,
      status,
      startDate: revertDate(requestDateFrom),
      endDate: revertDate(requestDateTo),
      classroomId: idGroup ?? classroom,
      organizationId,
    }

    try {
      const response = await getAssignments(params)
      const updatedAssignments = formatStudentNameByStatus(response.content, intl)
      setAssignments({ ...response, content: updatedAssignments })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetResults error >>: ', error)
      onError(intl.formatMessage(messages.resultsTable.notifications.getGrades))
    }
    setIsLoading((prevState) => !prevState)
  }

  const onPageChange = (pageNumber: number) => void fetchAssignments(pageNumber)

  const handleAssignments = async (id: number, userId: string, action: Actions) => {
    const isRestore = action === RETRY_STATUS
    const body = {
      status: action,
      productUnitId: id,
      userId,
    }
    try {
      await restoreDeleteAssignment(body)
      void fetchAssignments(numberPage)
      onSuccess(
        intl.formatMessage(
          isRestore ? messages.resultsTable.restore.success : messages.resultsTable.delete.success,
        ),
      )
    } catch (error) {
      onError(
        intl.formatMessage(
          isRestore ? messages.resultsTable.restore.error : messages.resultsTable.delete.error,
        ),
      )
      // eslint-disable-next-line no-console
      console.error('DeleteRestoreError >>: ', error)
    }
  }

  const handleDownload = async () => {
    setIsDownloading((prevState) => !prevState)
    try {
      const params: ApiRequest = {
        userId: memberId ?? (childOrStudentId || user),
        subscriptionId: subscription,
        areaIds: area,
        applicationIds: application,
        status,
        startDate: revertDate(requestDateFrom),
        endDate: revertDate(requestDateTo),
        classroomId: idGroup ?? classroom,
        organizationId,
      }
      await downloadAssignments(params)
      onSuccess(intl.formatMessage(messages.resultsTable.download.success))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('downloadAssignmentList() --> error\n', error)
      onError(intl.formatMessage(messages.resultsTable.download.error))
    }
    setIsDownloading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchAssignments()
  }, [subscription, classroom, area, application, status, date, user])

  if (!assignments) return null
  return (
    <FormProvider {...methods}>
      <AssignmentsComponent
        assignments={assignments}
        isLoading={isLoading}
        handleAssignments={handleAssignments}
        fetchAssignments={fetchAssignments}
        isDownloading={isDownloading}
        handleDownload={handleDownload}
        onPageChange={onPageChange}
      />
    </FormProvider>
  )
}
