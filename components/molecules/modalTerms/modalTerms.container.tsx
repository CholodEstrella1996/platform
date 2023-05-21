import { useEffect, useState } from 'react'

import { useIntl } from 'react-intl'

import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { RequiredActions } from 'services/models/user.model'
import termsAndConditionsService from 'services/modules/terms-conditions'
import userService from 'services/modules/user'

import { ModalTermsComponent } from './modalTerms.component'
import messages from './modalTerms.messages'

type Props = {
  onClose: () => void | Promise<void>
}

export const ModalTermsContainer = ({ onClose }: Props) => {
  const intl = useIntl()
  const [modalHtml, setModalHtml] = useState<string>()
  const { onError } = useNotification()
  const { user } = useAppContext()

  const getTermsAndConditions = async () => {
    try {
      const data = await termsAndConditionsService.getTermsAndConditions()
      setModalHtml(data.description)
    } catch (error) {
      void onClose()
      // eslint-disable-next-line no-console
      console.error('getTermsAndConditions error >>: ', error)
      onError(intl.formatMessage(messages.content.error))
    }
  }

  useEffect(() => {
    void getTermsAndConditions()
  }, [])

  if (!user) return null

  const requiredActions: RequiredActions = {
    requiredActions: user?.requiredActions.filter((action) => action !== 'terms-and-conditions'),
  }

  const acceptTermsAndConditions = async () => {
    try {
      await userService.userRequiredActions(requiredActions)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('postTermsAndConditions error >>: ', error)
    }
  }

  if (!modalHtml) return null
  return (
    <ModalTermsComponent
      url={modalHtml}
      onAcceptTerms={acceptTermsAndConditions}
      onClose={onClose}
    />
  )
}
