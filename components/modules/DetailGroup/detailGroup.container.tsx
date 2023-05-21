/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import groupService from 'services/modules/group'

import { DetailGroupComponent } from './detailGroup.component'
import messages from './detailGroup.messages'
import { Group } from './detailGroup.model'

type Props = {
  idGroup: number
}
export const DetailGroupContainer = ({ idGroup }: Props) => {
  const [detailGroup, setDetailGroup] = useState<Group>()
  const { onError, onSuccess } = useNotification()
  const intl = useIntl()
  const router = useRouter()

  const deleteGroup = async (groupId: number) => {
    try {
      await groupService.deleteGroup(groupId)
      onSuccess(intl.formatMessage(messages.delete.success))
      void router.push('/groups')
    } catch {
      onError(intl.formatMessage(messages.delete.error))
    }
  }

  const fetchGroupById = async () => {
    try {
      const data = await groupService.getGroupById(idGroup)
      setDetailGroup(data)
    } catch (error) {
      console.error('fetchGroupById // ', error)
      onError(intl.formatMessage(messages.detailGroup.api.error))
      void router.push('/groups')
    }
  }

  const deleteUser = async (memberId: number) => {
    try {
      await groupService.deleteUser(idGroup, memberId)
      onSuccess(intl.formatMessage(messages.delete.user.success))
      void fetchGroupById()
    } catch (error) {
      onError(intl.formatMessage(messages.delete.user.error))
      console.log({ deleteUserError: error, id: memberId })
    }
  }

  useEffect(() => {
    void fetchGroupById()
  }, [])
  if (!detailGroup) return null

  return (
    <DetailGroupComponent
      idGroup={idGroup}
      onDelete={(id: number) => void deleteGroup(id)}
      detailGroup={detailGroup}
      onDeleteUser={(id) => void deleteUser(id)}
    />
  )
}
