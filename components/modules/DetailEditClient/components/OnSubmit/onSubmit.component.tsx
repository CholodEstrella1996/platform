import { SaveOutline } from '@easy-eva-icons/react'
import { CircularProgress } from '@mui/material'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { onCancel } from 'utils/helpers/cancel-redirect'

import messages from '../../detailEditClient.messages'
import { ClientProps } from '../../detailEditClient.model'
import { DetailEditUserLocalStyles } from '../../detailEditClient.styles'

type Props = Pick<ClientProps, 'onSubmit' | 'isLoading' | 'clientId'>

export const OnSubmitForm = ({ onSubmit, isLoading, clientId }: Props) => {
  const intl = useIntl()
  const icon = isLoading ? (
    <CircularProgress thickness={4} size={20} />
  ) : (
    <SaveOutline fontSize={24} />
  )

  return (
    <>
      <div className="button__container">
        <Button
          disabled={isLoading}
          loading={isLoading}
          variant="contained"
          size="medium"
          icon={icon}
          iconPosition="left"
          onClick={() => void onSubmit()}>
          {intl.formatMessage(messages.navigation.button.save)}
        </Button>
        <Button variant="outlined" size="medium" onClick={() => onCancel(clientId)}>
          {intl.formatMessage(messages.navigation.button.cancel)}
        </Button>
      </div>
      <style jsx>{DetailEditUserLocalStyles}</style>
    </>
  )
}
