import { useRouter } from 'next/router'
import { useFormContext, SubmitHandler } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { LearningData } from 'components/modules/LearningRoutes/learningRoutes.model'
import { useNotification } from 'hooks/notification'
import { CopyLearningRequest } from 'services/models/learning.model'
import learningService from 'services/modules/learning-unit'
import { historyPath } from 'utils/helpers/historyPath'

import { MoreMenuComponent } from './moreMenu.component'
import messages from '../tableDataLearningRoutes.messages'

const { copyLearningUnit } = learningService

type Props = {
  selectedRow?: LearningData
  onDeleteRoute: (id: number) => void
}

export const MoreMenuContainer = (props: Props) => {
  const { selectedRow } = props
  const { handleSubmit } = useFormContext<CopyLearningRequest>()
  const { onError, onSuccess } = useNotification()
  const intl = useIntl()
  const router = useRouter()
  const history = historyPath(router.asPath)

  const onCloneSubmit: SubmitHandler<CopyLearningRequest> = async (data) => {
    if (!selectedRow) return
    const { classroomId, name } = data
    const body = { classroomId, name }
    const unitId = selectedRow.id
    try {
      const { id, name: unitName } = await copyLearningUnit(body, unitId)
      void router.push(`${history}/detail-learning-units/${id}/${unitName}`)
      onSuccess(intl.formatMessage(messages.learningRoute.tableData.alert.copySuccess))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('copyLearning Error >> ', error)
      onError(intl.formatMessage(messages.learningRoute.tableData.alert.copyError))
    }
  }
  return <MoreMenuComponent onCloneSubmit={handleSubmit(onCloneSubmit)} {...props} />
}
