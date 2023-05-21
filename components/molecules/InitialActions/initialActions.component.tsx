import { useState } from 'react'

import { useIntl } from 'react-intl'

import CardCookie from 'components/molecules/CardCookie'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { getCookie } from 'utils/helpers/cookie'

import ModalTerms from '../modalTerms'
import OnBoarding from '../OnBoarding'
import SubscriptionExpiredModal from '../SubscriptionExpiredModal/index'
import { messages } from '../SubscriptionExpiredModal/subscriptionExpiredModal.messages'

const InitialActionsComponent = () => {
  const cookiesAccepted = getCookie()
  const { user } = useAppContext()
  const intl = useIntl()

  const termsIsRequired = user?.requiredActions.some((action) => action === 'terms-and-conditions')
  const boardingIsRequired = user?.requiredActions.some((action) => action === 'platform-tour')
  const subscriptionExpiredIsRequired =
    !user?.subscriptions && user?.role?.some((rol) => rol.name !== ROLES.organization.government)

  const [cookies, setCookies] = useState(cookiesAccepted)
  const [terms, setTerms] = useState<boolean>(!termsIsRequired)
  const [onBoarding, setonBoarding] = useState<boolean>(!boardingIsRequired)

  if (!cookies) return <CardCookie onClose={() => setCookies(true)} />
  if (!terms) return <ModalTerms onClose={() => setTerms(true)} />
  if (!onBoarding) return <OnBoarding onClose={() => setonBoarding(true)} acceptedTerms={terms} />
  if (subscriptionExpiredIsRequired)
    return (
      <SubscriptionExpiredModal
        title={intl.formatMessage(messages.noSubscriptions.title)}
        description={intl.formatMessage(messages.noSubscriptions.description)}
      />
    )
  return null
}

export default InitialActionsComponent
