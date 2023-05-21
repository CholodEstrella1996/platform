import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { AddUserForm } from 'components/modules/MyInstitution/myInstitution.model'
import { useNotification } from 'hooks/notification'
import groupService from 'services/modules/group'

import { TableDataMyInstitutionComponent } from './tableDataMyInstitution.component'
import messages from './tableDataMyInstitution.messages'
import { TableDataMyInstitutionProp } from './tableDataMyInstitution.model'

export const TableDataMyInstitution = (props: TableDataMyInstitutionProp) => {
  const methods = useForm<AddUserForm>({ mode: 'all' })
  const { handleSubmit, resetField } = methods
  const intl = useIntl()
  const { onSuccess, onError } = useNotification()

  const onSubmit: SubmitHandler<AddUserForm> = async (data) => {
    try {
      await groupService.addUserToGroup(data)
      onSuccess(intl.formatMessage(messages.myInstitution.tableData.modal.notification.success))
      resetField('classroomIds')
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('add user error: ', error)
      onError(intl.formatMessage(messages.myInstitution.tableData.modal.notification.error))
    }
  }

  return (
    <FormProvider {...methods}>
      <TableDataMyInstitutionComponent {...props} onSubmit={handleSubmit(onSubmit)} />
    </FormProvider>
  )
}
