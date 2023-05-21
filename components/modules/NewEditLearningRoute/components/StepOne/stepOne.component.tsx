import { InfoOutline } from '@easy-eva-icons/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import messages from '../../newEditLearningRoute.messages'
import { StepOneProps } from '../../newEditLearningRoute.model'
import {
  NewEditLearningRouteGlobalStyles,
  NewEditLearningRouteStyles,
} from '../../newEditLearningRoute.styles'

const { colors } = theme
export const StepOneComponent = ({
  isLoading,
  groupOptions,
  reference,
  subscriptionOptions,
  isEditable,
}: StepOneProps) => {
  const intl = useIntl()
  const router = useRouter()
  const { watch } = useFormContext()
  const subscriptionId = watch('subscription')
  const isDisabled = Boolean(router.query['id-group']) || !subscriptionId || isLoading
  const showNoGroupMessage = Boolean(subscriptionId) && Boolean(!groupOptions.length) && !isLoading

  return (
    <>
      <section className="step__content">
        <Input
          name="name"
          label={intl.formatMessage(messages.steps.stepOne.name)}
          size="medium"
          disabled={isLoading}
          required
        />
        <Select
          name="subscription"
          size="medium"
          label={intl.formatMessage(messages.steps.stepOne.subscription.label)}
          placeholder={intl.formatMessage(messages.steps.stepOne.subscription.placeholder)}
          options={subscriptionOptions}
          required
          disabled={isDisabled || isEditable}
        />
        <Select
          name="group"
          size="medium"
          label={intl.formatMessage(messages.steps.stepOne.group.label)}
          placeholder={intl.formatMessage(messages.steps.stepOne.group.placeholder)}
          options={groupOptions}
          required
          disabled={isDisabled || !groupOptions.length}
          reference={reference}
        />
        {showNoGroupMessage && (
          <div className="no-group-message">
            <InfoOutline fontSize={16} color={colors.semantic.danger} />
            <Typography variant="c1" color={colors.semantic.danger}>
              {intl.formatMessage(messages.steps.stepOne.group.empty)}
              <Link href="/groups" passHref>
                <a className="no-group-message__link">
                  {intl.formatMessage(messages.steps.stepOne.group.link)}
                </a>
              </Link>
            </Typography>
          </div>
        )}
        <Input
          name="description"
          label={intl.formatMessage(messages.steps.stepOne.description)}
          size="medium"
          multiline
          rows={10}
          maxLength={1000}
          disabled={isLoading}
          required
        />
      </section>

      <style jsx>{NewEditLearningRouteStyles}</style>
      <style jsx global>
        {NewEditLearningRouteGlobalStyles}
      </style>
    </>
  )
}
