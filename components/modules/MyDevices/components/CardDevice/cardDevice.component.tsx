import { useState } from 'react'

import { DeleteOutlined } from '@mui/icons-material'
import { CircularProgress, IconButton } from '@mui/material'
import { useIntl } from 'react-intl'

import AlertModal from 'components/atoms/AlertModal'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import messages from '../../myDevices.messages'
import { Devices } from '../../myDevices.model'
import { MyDevicesStyles } from '../../myDevices.styles'

const { colors } = theme
export const CardDeviceComponent = (props: Devices) => {
  const { id, uuid, vendor, onDelete, isDeleting, itemToDelete, index } = props
  const intl = useIntl()

  const [openAlert, setOpenAlert] = useState(false)
  const handleContinue = () => {
    void onDelete(id)
    setOpenAlert(false)
  }
  return (
    <>
      <div className="card-devices">
        <div className="card-devices__info">
          <Typography variant="s2" color={colors.neutrals[500]}>
            {`${intl.formatMessage(messages.myDevices.device)} ${index}`}
          </Typography>
          <Typography variant="c2" color={colors.neutrals[300]}>
            {intl.formatMessage(messages.myDevices.manufacturer)}
            {vendor}
          </Typography>
          <Typography variant="c2" color={colors.neutrals[300]}>
            UUID: {uuid}
          </Typography>
        </div>
        <IconButton
          className="action__button"
          disabled={isDeleting}
          onClick={() => setOpenAlert((prevState) => !prevState)}>
          {isDeleting && itemToDelete === id ? <CircularProgress size={20} /> : <DeleteOutlined />}
        </IconButton>
      </div>
      {openAlert && (
        <AlertModal
          open={openAlert}
          titleText={intl.formatMessage(messages.myDevices.alert.title)}
          subtitleText={intl.formatMessage(messages.myDevices.alert.subtitle, {
            e: `${intl.formatMessage(messages.myDevices.device)} ${index}`,
          })}
          cancelActionText={intl.formatMessage(messages.myDevices.alert.cancelText)}
          onCancel={() => setOpenAlert(false)}
          continueActionText={intl.formatMessage(messages.myDevices.alert.continueText)}
          onContinue={handleContinue}
        />
      )}
      <style jsx>{MyDevicesStyles}</style>
    </>
  )
}
