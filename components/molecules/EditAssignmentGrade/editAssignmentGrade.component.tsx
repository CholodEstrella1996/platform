import { useEffect } from 'react'

import { useFormContext, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import FormModal from 'components/molecules/FormModal'
import { useNotification } from 'hooks/notification'

import messages from './editAssignmentGrade.messages'
import { EditGradeComponentProps, GradeData } from './editAssignmentGrade.model'
import { EditAssignmentGradeStyles } from './editAssignmentGrade.styles'

export const EditAssignmentGradeComponent = ({
  isOpen,
  onSubmit,
  onClose,
}: EditGradeComponentProps) => {
  const intl = useIntl()
  const { control, reset } = useFormContext<GradeData>()
  const { onWarning } = useNotification()

  const handleCloseForm = () => {
    reset()
    onClose()
  }

  const teacherScore = useWatch({ control, name: 'teacherScore' })

  const editGrade = (
    <div className="edit-grade__content">
      <Input
        type="number"
        name="teacherScore"
        label={intl.formatMessage(messages.input.label)}
        required
        placeholder={intl.formatMessage(messages.input.placeholder)}
        maxNumber={100}
      />
      <Input
        name="feedback"
        label={intl.formatMessage(messages.textarea.label)}
        placeholder={intl.formatMessage(messages.textarea.placeholder)}
        multiline
        maxLength={200}
        rows={5}
      />
    </div>
  )

  useEffect(() => {
    if (teacherScore && (teacherScore < 1 || teacherScore > 100))
      onWarning(intl.formatMessage(messages.input.gradeNumber))
  }, [teacherScore])

  return (
    <>
      <FormModal
        isOpen={isOpen}
        steps={[
          {
            id: 1,
            element: editGrade,
          },
        ]}
        title={intl.formatMessage(messages.title)}
        onClose={() => handleCloseForm()}
        onSubmit={() => onSubmit()}
        submitText={intl.formatMessage(messages.submit)}
      />
      <style jsx>{EditAssignmentGradeStyles}</style>
    </>
  )
}
