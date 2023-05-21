import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { Device, UserDevice } from 'services/models/device.model'
import deviceService from 'services/modules/device'

import { MyDevicesComponent } from './myDevices.component'
import messages from './myDevices.messages'

export const MyDevicesContainer = () => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [devices, setDevices] = useState<UserDevice[] | Device[]>([])
  const intl = useIntl()
  const { onError, onSuccess } = useNotification()

  const fetchDevices = async () => {
    try {
      const data = await deviceService.getDevices()
      setDevices(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      onError(intl.formatMessage(messages.myDevices.alert.deviceListError))
    }
  }

  const handleDelete = async (id: number) => {
    try {
      await deviceService.deleteDevice(id)
      onSuccess(intl.formatMessage(messages.myDevices.alert.success))
      void fetchDevices()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)
      onError(intl.formatMessage(messages.myDevices.alert.error))
    }
    setIsDeleting((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchDevices()
  }, [])

  if (!devices) return null
  return (
    <MyDevicesComponent
      userDevices={(devices as UserDevice[]) ?? []}
      onDelete={(id: number) => void handleDelete(id)}
      isDeleting={isDeleting}
    />
  )
}
