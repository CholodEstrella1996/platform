import { useState } from 'react'

import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import HeaderTitle from 'components/atoms/HeaderTitle'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { UserDevice } from 'services/models/device.model'

import ActivateDevices from './components/ActivateDevices'
import CardDevice from './components/CardDevice'
import messages from './myDevices.messages'
import { DevicesDataProps } from './myDevices.model'
import { MyDevicesStyles } from './myDevices.styles'

const { colors } = theme
export const MyDevicesComponent = ({ userDevices, onDelete, isDeleting }: DevicesDataProps) => {
  const intl = useIntl()
  const { user } = useAppContext()
  const userRole = user?.role ? user?.role[0].name : null
  const [itemToDelete, setItemToDelete] = useState(0)
  const handleDelete = (id: number) => {
    setItemToDelete(id)
    onDelete(id)
  }

  return (
    <>
      <HeaderTitle title={intl.formatMessage(messages.myDevices.title)} />
      <ActivateDevices />
      <div className="my-devices">
        {Boolean(userDevices.length) &&
          userDevices.map((userDevice: UserDevice) => (
            <div className="my-devices__container" key={userDevice.id}>
              {ROLES.family.parent === userRole && (
                <Typography variant="h6" color={colors.neutrals[500]}>
                  {`${userDevice.name ?? intl.formatMessage(messages.myDevices.null.name)} ${
                    userDevice.surname ?? intl.formatMessage(messages.myDevices.null.surname)
                  }`}
                </Typography>
              )}
              {userDevice.installations.length ? (
                <div className="my-devices__content">
                  {userDevice.installations.map((device, index) => (
                    <CardDevice
                      {...device}
                      index={index + 1}
                      key={device.id}
                      itemToDelete={itemToDelete}
                      onDelete={() => void handleDelete(device.id)}
                      isDeleting={isDeleting}
                    />
                  ))}
                </div>
              ) : (
                <Dialog
                  message={intl.formatMessage(messages.myDevices.empty, {
                    user: userDevice.name ?? intl.formatMessage(messages.myDevices.null.dialog),
                  })}
                  showIcon={false}
                />
              )}
            </div>
          ))}
      </div>
      <style jsx>{MyDevicesStyles}</style>
    </>
  )
}
