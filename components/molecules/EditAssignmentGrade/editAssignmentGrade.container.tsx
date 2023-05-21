import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import resultMessages from 'components/modules/DetailPractice/detailPractice.messages'
import { useNotification } from 'hooks/notification'
import assignmentService from 'services/modules/assignments'

import { EditAssignmentGradeComponent } from './editAssignmentGrade.component'
import messages from './editAssignmentGrade.messages'
import { EditAssignmentGradeProps, GradeData } from './editAssignmentGrade.model'

const { updateGrade, getAssignmentById } = assignmentService

export const EditAssignmentGradeContainer = ({
  productUnitId,
  fetchAssignment,
  isOpen,
  onClose,
  userId,
  score,
  feedback,
  assignmentId,
}: EditAssignmentGradeProps) => {
  const [openModal, setOpenModal] = useState(false)
  const intl = useIntl()
  const methods = useForm<GradeData>({ mode: 'all' })
  const { setValue, handleSubmit, reset } = methods
  const { onSuccess, onError } = useNotification()
  const router = useRouter()
  const isFromDetail = router.query['id-assignment']

  const setFormValues = (teacherScore?: number, teacherFeedback?: string) => {
    const assignmentFeedback = {
      teacherScore: teacherScore ?? score,
      feedback: teacherFeedback ?? feedback,
    }

    Object.entries(assignmentFeedback).forEach(([name, value]) =>
      setValue(name as keyof GradeData, value),
    )
    setOpenModal((prevState) => !prevState)
  }

  const fetchAssignmentDetail = async () => {
    if (assignmentId)
      try {
        const data = await getAssignmentById(assignmentId)
        setFormValues(data.teacherScore, data.feedback)
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('GetResult error >>: ', error)
        onClose()
        onError(intl.formatMessage(resultMessages.getResult))
      }
  }

  const onSubmit: SubmitHandler<GradeData> = async (data) => {
    const body = {
      productUnitId,
      userId,
    }
    try {
      await updateGrade({ ...body, ...data })
      void fetchAssignment()
      reset()
      onSuccess(intl.formatMessage(messages.success))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('sendAnnouncement error: ', error)
      onError(intl.formatMessage(messages.error))
    }
  }

  useEffect(() => {
    if (!isFromDetail) void fetchAssignmentDetail()
    else setFormValues()
  }, [])

  if (!openModal) return null
  return (
    <FormProvider {...methods}>
      <EditAssignmentGradeComponent
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit(onSubmit)}
      />
    </FormProvider>
  )
}
