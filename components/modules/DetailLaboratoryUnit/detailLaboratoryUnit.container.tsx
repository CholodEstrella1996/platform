import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { LaboratoryById } from 'services/models/applications.model'
import applicationService from 'services/modules/applications'

import { DetailLaboratoryUnitComponent } from './detailLaboratoryUnit.component'
import messages from './detailLaboratoryUnit.messages'

type Prop = {
  idLearningUnit: number
  organizationId?: number
}

export const DetailLaboratoryUnitContainer = ({ idLearningUnit, organizationId }: Prop) => {
  const [laboratoryData, setLaboratoryData] = useState<LaboratoryById>()
  const intl = useIntl()
  const { onError } = useNotification()
  const router = useRouter()
  const historyIndex = router.asPath.indexOf('learning-units')

  const getLaboratoryUnitDetail = async () => {
    try {
      const dataLaboratory = await applicationService.getApplicationById(idLearningUnit, {
        organizationId,
      })
      setLaboratoryData(dataLaboratory)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('error getLaboratory: ', error)
      onError(intl.formatMessage(messages.onLoadError))
      const routerPath =
        historyIndex === -1
          ? `/laboratories`
          : `${router.asPath.slice(0, historyIndex)}learning-units`
      void router.push(routerPath)
    }
  }

  useEffect(() => {
    void getLaboratoryUnitDetail()
  }, [])

  if (!laboratoryData) return null
  return <DetailLaboratoryUnitComponent detailLabsUnit={laboratoryData} />
}
