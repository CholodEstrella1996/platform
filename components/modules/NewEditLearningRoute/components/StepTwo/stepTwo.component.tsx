import React, { useState } from 'react'

import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import DragAndDrop from 'components/molecules/DragAndDrop'
import FormModal from 'components/molecules/FormModal'

import messages from '../../newEditLearningRoute.messages'
import { FormProps, StepTwoProps } from '../../newEditLearningRoute.model'
import {
  NewEditLearningRouteStyles,
  NewEditLearningRouteGlobalStyles,
} from '../../newEditLearningRoute.styles'
import TreeWithFilter from '../TreeWithFilter'

const { colors } = theme

export const StepTwoComponent = ({
  laboratoryList,
  onEdit,
  nodes,
  addLabs,
  isLoading,
  setLaboratoryInOrder,
}: StepTwoProps) => {
  const [openForm, setOpenForm] = useState(false)
  const intl = useIntl()
  const {
    resetField,
    watch,
    formState: { isDirty },
    reset,
  } = useFormContext<FormProps>()

  const searchQuery = watch('search')
  const steps = [
    {
      id: 1,
      element: <TreeWithFilter nodes={nodes} onSearch={onEdit} isLoading={isLoading} />,
    },
  ]

  const handleModal = async (isOpen?: boolean) => {
    if (searchQuery) resetField('search')
    if (isDirty) reset({}, { keepDirtyValues: false, keepValues: true })
    if (isOpen) void onEdit()
    setOpenForm((prevState) => !prevState)
  }

  return (
    <>
      <section className="step__content">
        <div className="step__header">
          <Typography variant="s1" color={colors.primary[500]}>
            {intl.formatMessage(messages.steps.stepTwo.title)}
          </Typography>
          <Button variant="contained" onClick={() => void handleModal(true)}>
            {intl.formatMessage(messages.actionButtons.edit)}
          </Button>
        </div>
        {!laboratoryList.length ? (
          <Dialog message={intl.formatMessage(messages.steps.stepTwo.empty.labs)} />
        ) : (
          <DragAndDrop
            laboratoryList={laboratoryList}
            setLaboratoryInOrder={setLaboratoryInOrder}
          />
        )}
      </section>

      <FormModal
        isOpen={openForm}
        steps={steps}
        title={intl.formatMessage(messages.steps.stepTwo.formModal.title)}
        onClose={() => void handleModal()}
        onSubmit={addLabs}
        submitText={intl.formatMessage(messages.actionButtons.confirm)}
      />
      <style>{NewEditLearningRouteStyles}</style>
      <style jsx global>
        {NewEditLearningRouteGlobalStyles}
      </style>
    </>
  )
}
