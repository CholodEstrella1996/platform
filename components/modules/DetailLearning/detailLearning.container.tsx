/* eslint-disable no-console */
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { useNotification } from 'hooks/notification'
import { LearningByIdResponse } from 'services/models/learning.model'
import learningService from 'services/modules/learning-unit'

import { DetailLearningComponent } from './detailLearning.component'
import messages from './detailLearning.messages'

type Prop = {
  idLearning: number
}

export const DetailLearningContainer = ({ idLearning }: Prop) => {
  const [learningData, setLearningData] = useState<LearningByIdResponse>()
  const intl = useIntl()
  const { onError } = useNotification()
  const router = useRouter()
  const historyIndex = router.asPath.indexOf('learning-units')

  const getLearningById = async () => {
    try {
      const data = await learningService.getLearningUnitsById(idLearning)
      setLearningData(data)
    } catch (error) {
      console.error('error :>> ', error)
      onError(intl.formatMessage(messages.onLoadError))
      void router.push(`${router.asPath.slice(0, historyIndex)}learning-units`)
    }
  }

  useEffect(() => {
    void getLearningById()
  }, [])

  if (!learningData) return null
  return <DetailLearningComponent learningData={learningData} />
}
