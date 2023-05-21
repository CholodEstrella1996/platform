import { useSnackbar, VariantType } from 'notistack'

export const useNotification = () => {
  const { enqueueSnackbar } = useSnackbar()

  const onNotify = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant })
  }

  const onSuccess = (message: string) => {
    onNotify(message, 'success')
  }

  const onError = (message: string) => {
    onNotify(message, 'error')
  }

  const onWarning = (message: string) => {
    onNotify(message, 'warning')
  }

  const onDefault = (message: string) => {
    onNotify(message, 'default')
  }

  return {
    onNotify,
    onSuccess,
    onError,
    onWarning,
    onDefault,
  }
}
