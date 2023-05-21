import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import ModalSpinner from 'components/atoms/ModalSpinner'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { useNotification } from 'hooks/notification'
import { useMediaQuery } from 'hooks/use-media-query'
import { Group } from 'services/models/group.model'
import groupService from 'services/modules/group'

import { AddUser } from './addUserModal.component'
import messages from '../../myInstitution.messages'

const { mediaQueries } = theme

const { getGroups } = groupService

type Props = {
  id: number
  name: string
  profile: string
}

const AddUserContainer = ({ id, name, profile }: Props) => {
  const [groupOptions, setGroupOptions] = useState<OptionProps[]>()
  const [isLoading, setIsLoading] = useState(true)
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const { onError } = useNotification()

  const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: isTablet ? '14.5rem' : '18.5rem',
  }

  const getGroupOptions = (data: Group[]) => {
    const options: OptionProps[] = data.map((elem) => ({
      id: elem.id,
      value: elem.id,
      label: elem.name,
    }))
    setGroupOptions(options)
  }

  const fetchGroups = async () => {
    setIsLoading(true)
    try {
      const data = await getGroups({ params: { availableForMemberId: id } })
      getGroupOptions(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('getGroups() --> error\n', error)
      onError(intl.formatMessage(messages.addUserModal.getGroupsError))
    }
    setIsLoading(false)
  }

  useEffect(() => {
    void fetchGroups()
  }, [])

  if (isLoading) return <ModalSpinner style={spinnerStyle} />
  if (!groupOptions) return null
  return <AddUser id={id} name={name} groupList={groupOptions} isStudent={profile === 'student'} />
}

export default AddUserContainer
