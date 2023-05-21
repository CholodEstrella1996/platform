import { useRef } from 'react'

import { GridColumnVisibilityModel } from '@mui/x-data-grid'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import {
  ASSIGNMENT_COLUMNS,
  ARE_STATIC_FILTERS,
  AVAILABLE_FLOWS,
  CASES,
  AssignmentRoles,
} from 'constants/assignments'
import { ASSIGNMENTS_PERMISSIONS } from 'constants/permissions'
import { useAppContext } from 'context/appContext'
import { Filter } from 'services/models/assignments.model'
import { formatForAssignmentOptions } from 'utils/helpers/edit-content'

import messages from './assignments.messages'
import { SelectReference } from './assignments.model'

const { labels, placeholders } = messages.resultsTable.filters
const { update, deleteRestore } = ASSIGNMENTS_PERMISSIONS

export const useAssignment = (filters: Filter[] = []) => {
  const intl = useIntl()
  const router = useRouter()
  const subscriptionRef = useRef<SelectReference>(null)
  const userRef = useRef<SelectReference>(null)
  const classroomRef = useRef<SelectReference>(null)
  const areaRef = useRef<SelectReference>(null)
  const applicationRef = useRef<SelectReference>(null)
  const statusRef = useRef<SelectReference>(null)
  const dynamicRefs = {
    subscription: subscriptionRef,
    user: userRef,
    classroom: classroomRef,
  }
  const staticRefs = {
    area: areaRef,
    application: applicationRef,
    status: statusRef,
  }
  const { profile, permissions } = useAppContext()
  const profileAsKey = profile as AssignmentRoles

  const userFlow = AVAILABLE_FLOWS.find((item) => router.pathname.includes(item))
  if (!userFlow) return null

  const userFilters = userFlow ? CASES[userFlow][profileAsKey] : ''
  const columns = ASSIGNMENT_COLUMNS[userFlow][profileAsKey]
  const [updateAssignmentAuth, deleteRestoreAssignmentAuth] = [
    permissions[update],
    permissions[deleteRestore],
  ]
  const canSeeActionsColumn = updateAssignmentAuth || deleteRestoreAssignmentAuth

  const columnVisibilityModel: GridColumnVisibilityModel = {
    ...columns,
    ...(canSeeActionsColumn && { actions: true }),
  }

  const dynamicFilters =
    filters
      ?.filter(({ name }) => userFilters?.includes(name as never))
      .map(({ name, id, content }) => {
        const msnName = name as keyof typeof messages.resultsTable.filters.labels
        return {
          id,
          name,
          label: intl.formatMessage(labels[msnName]),
          placeholder: intl.formatMessage(placeholders.selects, {
            name,
          }),
          options: formatForAssignmentOptions(content),
          reference: dynamicRefs[name as keyof typeof dynamicRefs],
        }
      }) ?? []

  const staticFilters =
    filters
      ?.filter(({ name }) => ARE_STATIC_FILTERS?.includes(name as never))
      .map(({ name, id, content }) => {
        const msnName = name as keyof typeof messages.resultsTable.filters.labels
        const isStatus = name === 'status'
        return {
          id,
          name,
          label: intl.formatMessage(labels[msnName]),
          placeholder: intl.formatMessage(placeholders.selects, {
            name,
          }),
          options: formatForAssignmentOptions(content, isStatus),
          reference: staticRefs[name as keyof typeof staticRefs],
        }
      })
      .sort((prevItem, nextItem) => prevItem.id - nextItem.id) ?? []

  return {
    dynamicFilters,
    dynamicRefs,
    staticRefs,
    staticFilters,
    columnVisibilityModel,
    assignmentPermissions: {
      updateAssignmentAuth,
      deleteRestoreAssignmentAuth,
    },
  }
}
