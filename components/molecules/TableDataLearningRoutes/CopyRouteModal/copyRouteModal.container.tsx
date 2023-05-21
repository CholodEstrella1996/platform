import { useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import ModalSpinner from 'components/atoms/ModalSpinner'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import messages from 'components/modules/MyInstitution/myInstitution.messages'
import { useNotification } from 'hooks/notification'
import { useMediaQuery } from 'hooks/use-media-query'
import groupService from 'services/modules/group'
import { getOptionsWithId } from 'utils/helpers/edit-content'

import { CopyRouteComponent } from './copyRouteModal.component'

const { getGroups } = groupService
const { mediaQueries } = theme

type Props = {
  idSubscription?: number
  nameSubscription?: string
  idClassroom: number
}

export const CopyRouteModalContainer = ({
  idSubscription,
  nameSubscription,
  idClassroom,
}: Props) => {
  const [groupOptions, setGroupOptions] = useState<OptionProps[]>()
  const [isLoading, setIsLoading] = useState(true)
  const { setValue } = useFormContext()
  const intl = useIntl()
  const { onError } = useNotification()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: isTablet ? '14.5rem' : '18.5rem',
  }

  const fetchGroups = async () => {
    try {
      const groups = await getGroups({ subscriptionId: idSubscription })
      const selectedGroup = groups.find((group) => group.id === idClassroom)?.id ?? ''
      const options = getOptionsWithId(groups)
      setValue('name', `${nameSubscription ?? '-'} (copy)`)
      setValue('classroomId', selectedGroup)
      setGroupOptions(options)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
      onError(intl.formatMessage(messages.addUserModal.getGroupsError))
    }
    setIsLoading((prev) => !prev)
  }

  useEffect(() => {
    void fetchGroups()
  }, [])

  if (isLoading) return <ModalSpinner style={spinnerStyle} />
  if (!groupOptions) return null
  return <CopyRouteComponent groupOptions={groupOptions} />
}
