import { useState } from 'react'

import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import FormModal from 'components/molecules/FormModal'

import messages from './changeSubscription.messages'
import { ChangeSubscriptionComponentProps } from './changeSubscription.model'
import { ChangeSubscriptionStyles } from './changeSubscription.styles'
import SubscriptionModal from './components/SubscriptionModal'

const { colors } = theme
export const ChangeSubscriptionComponent = ({
  subscriptionSelect,
  subscriptions,
  quantity = false,
  showButton,
  onSubmit = () => {},
  currentSubscription,
  isLoading,
  canSelectEmptyInvites,
}: ChangeSubscriptionComponentProps) => {
  const intl = useIntl()
  const [openSubModal, setOpenSubModal] = useState(false)
  const [preventModalClose, setPreventModalClose] = useState(false)

  const handlePreventModalClose = (availableInvites: number) => {
    const shouldClose = availableInvites < 1 && !canSelectEmptyInvites
    setPreventModalClose(shouldClose)
  }
  const modalProps = { subscriptionSelect, subscriptions, handlePreventModalClose }
  return (
    <>
      <div className="card-subscription">
        <div className="subscription__type">
          <div className={`subscription__text__type ${isLoading ? 'subscription__spinner' : ''}`}>
            {!isLoading ? (
              <>
                <Typography variant="p2" color={colors.neutrals[700]} weight="semibold">
                  {`${intl.formatMessage(messages.text.title)} ${currentSubscription?.code ?? ''}`}
                </Typography>
                {quantity && (
                  <Typography variant="c1" color={colors.neutrals[500]}>
                    {`(${currentSubscription?.availableInvites ?? ''} ${intl.formatMessage(
                      messages.text.user,
                    )})`}
                  </Typography>
                )}
              </>
            ) : (
              <Typography variant="p2" color={colors.neutrals[700]} weight="semibold">
                {`${intl.formatMessage(messages.text.title)} ...`}
              </Typography>
            )}
          </div>
          {showButton && (
            <Button
              variant="outlined"
              onClick={() => setOpenSubModal((prevState) => !prevState)}
              size="small"
              className="subscription__button">
              {intl.formatMessage(messages.button)}
            </Button>
          )}
        </div>
      </div>
      <FormModal
        steps={[{ id: 1, element: <SubscriptionModal {...modalProps} /> }]}
        title={intl.formatMessage(messages.modal.title)}
        isOpen={openSubModal}
        onClose={() => setOpenSubModal((prevState) => !prevState)}
        onSubmit={async () => void onSubmit()}
        submitText={intl.formatMessage(messages.modal.button)}
        stepIndicator
        isOnlyModal
        preventModalClose={preventModalClose}
      />
      <style jsx>{ChangeSubscriptionStyles}</style>
    </>
  )
}
