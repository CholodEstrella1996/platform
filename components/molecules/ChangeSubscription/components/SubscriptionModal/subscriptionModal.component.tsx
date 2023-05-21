import { useEffect } from 'react'

import { useFormContext, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { SubscriptionModalStyles } from './subscriptionModal.styles'
import messages from '../../changeSubscription.messages'
import { SubscriptionModalProps } from '../../changeSubscription.model'

const { colors } = theme

export const SubscriptionModal = ({
  subscriptionSelect,
  subscriptions,
  handlePreventModalClose,
}: SubscriptionModalProps) => {
  const intl = useIntl()
  const { control } = useFormContext()

  const subscriptionId = useWatch({ control, name: 'subscription' })
  const currentIndex = subscriptionSelect.findIndex(({ value }) => subscriptionId === value)
  const selectedSubscription = currentIndex !== -1 && subscriptions[currentIndex]

  useEffect(() => {
    if (selectedSubscription) handlePreventModalClose(selectedSubscription.availableInvites)
  }, [subscriptionId])

  return (
    <>
      <div className="subscription__modal">
        <Select
          name="subscription"
          label={intl.formatMessage(messages.modal.select)}
          options={subscriptionSelect}
          className="subscription__type"
          required
        />
        <div className="subscription__products">
          <Typography variant="s1" color={colors.primary[500]}>
            {intl.formatMessage(messages.modal.products.title)}
          </Typography>
          {selectedSubscription ? (
            selectedSubscription?.productUnitsByKind.map(
              ({ displayName, name, packages }) =>
                Boolean(packages.length) && (
                  <div key={name}>
                    <Typography
                      variant="label"
                      color={colors.neutrals[300]}
                      className="products__titles">
                      {displayName}
                    </Typography>
                    {packages.map((item) => (
                      <Typography
                        key={item.id}
                        variant="c1"
                        color={colors.neutrals[500]}
                        className="areaLabTopic__name">
                        {item.name}
                      </Typography>
                    ))}
                  </div>
                ),
            )
          ) : (
            <Dialog showIcon={false} message={intl.formatMessage(messages.text.warning)} />
          )}
        </div>
      </div>
      <style jsx>{SubscriptionModalStyles}</style>
    </>
  )
}
