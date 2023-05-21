import { IntlShape } from 'react-intl'

import messages from 'components/modules/Assignments/assignments.messages'
import { StatusDescription } from 'services/models/area.model'
import { Assignment, Filter } from 'services/models/assignments.model'
import { Status } from 'services/models/client.model'
import { DashboardResponse } from 'services/models/dashboard.model'
import { MemberResponse, Member } from 'services/models/member.model'

const MEMBER_STATUS = 'invited'
const {
  resultsTable: { defaultStudentName },
} = messages

type DataSeries = {
  day: string
  sessions?: number
  completedAssignments?: number
}[]

const formatName = (
  status: string,
  firstName: string,
  surname: string,
  invitedMsg?: string,
  registeredMsg?: string,
) =>
  `${
    status === MEMBER_STATUS && invitedMsg
      ? invitedMsg
      : `${!firstName && registeredMsg ? registeredMsg : `${firstName || ''} ${surname || ''} `}`
  }`

const formatData = (
  data: MemberResponse,
  emailMsg: string,
  invitedMsg?: string,
  registeredMsg?: string,
) => {
  const newData = data.content.map(
    ({ id, email, firstName, surname, status, avatarUrl, subscription }: Member) => ({
      id,
      name: formatName(status.name, firstName, surname, invitedMsg, registeredMsg),
      email: email || emailMsg,
      status,
      avatarUrl,
      subscription,
    }),
  )
  return newData
}

const getOptionsWithId = (list: StatusDescription[]) => {
  const optionsResult = list.map(({ id, name }) => ({
    id,
    value: id,
    label: name || '',
  }))
  return optionsResult
}

const optionsForSelect = (options: Status[]) => {
  const isNullOptions = options.some((option) => !option)
  if (isNullOptions) return []
  const editedOptions = options.flat().map(({ id, name, displayName }) => ({
    id,
    value: name,
    label: displayName ?? name,
  }))

  return editedOptions
}

const formatForAssignmentOptions = (content: Filter['content'] = [], sendName = false) =>
  content.map(({ id, displayName, name }) => ({
    id,
    value: sendName ? name : id,
    label: displayName,
  })) ?? []

const formatMemberOptions = (data: Member[]) =>
  data.map(({ id, userId, firstName }) => ({
    id,
    value: userId,
    label: firstName ?? '-',
  })) ?? []

const formatStudentNameByStatus = (assignments: Assignment[], intl: IntlShape) => {
  const formatStudentName =
    assignments?.map((assignment) => {
      const studentName =
        assignment.studentName !== 'null null'
          ? assignment?.studentName
          : intl.formatMessage(defaultStudentName)
      return {
        ...assignment,
        studentName,
      }
    }) ?? []
  return formatStudentName
}

const formatDataToChart = (
  sessionsByDay: DashboardResponse['statisticsMetrics']['sessionsByDay'],
) =>
  sessionsByDay?.map(({ day, sessions }) => ({
    x: day,
    y: sessions,
  })) ?? []

const formatStudentToChart = (
  information: DashboardResponse['studentMetrics'],
  type: 'sessionsByDay' | 'assignmentsCompletedByDay',
) => {
  const dataSeries: DataSeries =
    type === 'sessionsByDay'
      ? information?.sessionsByDay ?? []
      : information?.assignmentsCompletedByDay ?? []
  return (
    dataSeries?.map(({ day, sessions, completedAssignments }) => ({
      x: day,
      y: type === 'sessionsByDay' ? sessions : completedAssignments,
    })) ?? []
  )
}

const isUrl = (str = '') => {
  const pattern = new RegExp(
    '^([a-zA-Z]+:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', // fragment locator
    'i',
  )

  return pattern.test(str) || str.startsWith('http://localhost/')
}

export {
  formatName,
  formatData,
  getOptionsWithId,
  optionsForSelect,
  formatForAssignmentOptions,
  formatMemberOptions,
  formatStudentNameByStatus,
  formatDataToChart,
  formatStudentToChart,
  isUrl,
}
