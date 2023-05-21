import React from 'react'

import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ChangeSubscription from 'components/molecules/ChangeSubscription'

import messages from '../../newEditGroup.messages'
import { NewEditGroupGlobalStyles, NewEditGroupLocalStyles } from '../../newEditGroup.styles'

const { colors } = theme
const UNDEFINED_SUBSCRIPTION = undefined

type Props = {
  isEditable: boolean
  groupSubscription: { id: number; code: string }
}

const StepOneComponent = ({ isEditable, groupSubscription }: Props) => {
  const intl = useIntl()
  const userSubscription = isEditable ? groupSubscription : UNDEFINED_SUBSCRIPTION
  return (
    <>
      <section className="stepOne__container">
        <Typography variant="s1" color={colors.neutrals[500]}>
          {intl.formatMessage(messages.steps.stepOne.title)}
        </Typography>
        <ChangeSubscription
          showButton={!isEditable}
          userSubscription={userSubscription}
          canSelectEmptyInvites
        />
        <Input
          name="name"
          label={intl.formatMessage(messages.steps.stepOne.name)}
          size="medium"
          maxLength={50}
          required
        />
        <Input
          name="description"
          label={intl.formatMessage(messages.steps.stepOne.description)}
          size="medium"
          multiline
          rows={10}
          maxLength={1000}
          required
        />
      </section>

      <style jsx>{NewEditGroupLocalStyles}</style>
      <style jsx global>
        {NewEditGroupGlobalStyles}
      </style>
    </>
  )
}
export default StepOneComponent
