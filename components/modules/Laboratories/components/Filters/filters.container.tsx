import { useEffect, useRef, useState } from 'react'

import { FormProvider, useFormContext, useWatch } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { OptionProps } from 'components/atoms/Select/select.models'
import { SelectReference } from 'components/modules/NewEditLearningRoute/newEditLearningRoute.model'
import { SUBSCRIPTION_PERMISSIONS } from 'constants/permissions'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'
import { useNotification } from 'hooks/notification'
import { ApiRequest } from 'services/models/responseBase.model'
import areaService from 'services/modules/areas'
import subscriptionService from 'services/modules/subscriptions'
import topicService from 'services/modules/topic'
import { formatOptions, formatSubscriptionOptions } from 'utils/valuesForm/new-edit-learning-units'

import { FiltersComponent } from './filters.component'
import messages from '../../laboratories.messages'
import { DataFilter } from '../../laboratories.model'

const {
  organization: { student },
} = ROLES
const {
  detail: { view },
} = SUBSCRIPTION_PERMISSIONS
const { getAreas } = areaService
const { getTopics } = topicService
const { getSubscriptions } = subscriptionService

type Prop = {
  fetchLaboratories: (pageNumber?: number) => Promise<void>
}

export const FiltersContainer = ({ fetchLaboratories }: Prop) => {
  const [areaData, setAreaData] = useState<OptionProps[]>()
  const [topicData, setTopicData] = useState<OptionProps[]>()
  const [subscriptions, setSubscriptions] = useState<OptionProps[]>()

  const [subscriptionQuery, setSubscriptionQuery] = useState<number>()
  const [areaQuery, setAreaQuery] = useState<number>()

  const { user, profile, permissions } = useAppContext()
  const isStudent = profile === student

  const subscriptionAuth = permissions[view]

  const topicSelectRef = useRef<SelectReference>(null)
  const areaSelectRef = useRef<SelectReference>(null)

  const methods = useFormContext<DataFilter>()
  const { control, resetField } = methods

  const areaId = useWatch({ control, name: 'area' })
  const topicId = useWatch({ control, name: 'topic' })
  const subscriptionId = useWatch({ control, name: 'subscription' })

  const intl = useIntl()
  const { onError } = useNotification()

  const fetchSubscriptions = async () => {
    try {
      const data = await getSubscriptions()
      const formattedSubscriptions = formatSubscriptionOptions(data)
      setSubscriptions(formattedSubscriptions)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('getSubscription error >> ', error)
    }
  }

  const fetchAreas = async () => {
    const subscriptionParam = isStudent && user ? user.subscriptions?.at(0)?.id : subscriptionId

    topicSelectRef.current?.clearValue()

    try {
      const data = await getAreas({
        subscriptionId: subscriptionParam,
      })
      const formattedAreas = formatOptions(data)
      setAreaData(formattedAreas)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetAreas error >>: ', error)
      onError(intl.formatMessage(messages.notifications.getAreasTopicError, { isArea: true }))
    }
  }

  const fetchTopics = async () => {
    const params: ApiRequest = {
      areaId,
      subscriptionId: isStudent && user ? user.subscriptions?.at(0)?.id : subscriptionId,
    }

    try {
      const data = await getTopics(params)
      const formattedTopics = formatOptions(data)
      setTopicData(formattedTopics)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('GetTopics error >>: ', error)
      onError(intl.formatMessage(messages.notifications.getAreasTopicError, { isArea: false }))
    }
  }

  const laboratorySearch = () => {
    setSubscriptionQuery(subscriptionId)
    setAreaQuery(areaId)
    const delaySearch = setTimeout(() => {
      void fetchLaboratories()
    }, 1000)

    return () => clearTimeout(delaySearch)
  }

  useEffect(() => {
    if (subscriptionAuth && !subscriptions?.length) void fetchSubscriptions()
    if (!areaData || !topicData) {
      void fetchAreas()
      return void fetchTopics()
    }

    if (subscriptionId !== subscriptionQuery) {
      resetField('area')
      resetField('topic')

      areaSelectRef.current?.clearValue()
      topicSelectRef.current?.clearValue()

      void fetchAreas()
      void fetchTopics()
    }

    if (areaId !== areaQuery) {
      resetField('topic')
      topicSelectRef.current?.clearValue()
      void fetchTopics()
    }

    return laboratorySearch()
  }, [subscriptionId, areaId, topicId])

  return (
    <FormProvider {...methods}>
      <FiltersComponent
        listAreas={areaData ?? []}
        listTopic={topicData ?? []}
        listSubscription={subscriptions ?? []}
        areaReference={areaSelectRef}
        topicReference={topicSelectRef}
        hasSubscriptionPermission={subscriptionAuth}
      />
    </FormProvider>
  )
}
