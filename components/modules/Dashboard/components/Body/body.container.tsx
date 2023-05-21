import { useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Spinner from 'components/atoms/Spinner'
import { useNotification } from 'hooks/notification'
import { DashboardResponse } from 'services/models/dashboard.model'
import dashboardService from 'services/modules/dashboard'

import { BodyComponent } from './body.component'
import messages from '../../dashboard.messages'
import { Filters } from '../../dashboard.model'

const { getDashboardMetrics } = dashboardService

export const BodyContainer = () => {
  const { watch } = useFormContext<Filters>()
  const [isLoading, setIsLoading] = useState(false)
  const [metrics, setMetrics] = useState<DashboardResponse>()
  const intl = useIntl()
  const router = useRouter()
  const { onError } = useNotification()

  const organizationId = router.query['id-institution']

  const userId = watch('userId')
  const applicationMeanAssignment = watch('applicationMeanAssignment')
  const areaMeanAssignment = watch('areaMeanAssignment')
  const applicationPercentage = watch('applicationPercentage')
  const areaPercentage = watch('areaPercentage')
  const topicPercentage = watch('topicPercentage')
  const areaCompletion = watch('areaCompletion')
  const applicationCompletion = watch('applicationCompletion')
  const subscriptionId = watch('subscriptionId')

  const params = {
    organizationId: organizationId ? Number(organizationId) : undefined,
    userId,
    applicationMeanAssignment,
    areaMeanAssignment,
    applicationPercentage,
    areaPercentage,
    topicPercentage,
    areaCompletion,
    applicationCompletion,
    subscriptionId,
  }

  const fetchDashboardMetrics = async () => {
    setIsLoading((prevState) => !prevState)
    try {
      const response = await getDashboardMetrics(params)
      if (
        response?.recentlyAccessedApplications &&
        response?.recentlyAccessedApplications?.length > 3
      )
        response.recentlyAccessedApplications?.slice(0, 3)
      setMetrics(response)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('fetchMetrics Error >>', error)
      onError(intl.formatMessage(messages.error))
    }
    setIsLoading((prevState) => !prevState)
  }

  useEffect(() => {
    void fetchDashboardMetrics()
  }, [
    userId,
    applicationMeanAssignment,
    areaMeanAssignment,
    applicationPercentage,
    areaPercentage,
    topicPercentage,
    areaCompletion,
    applicationCompletion,
    subscriptionId,
  ])

  if (isLoading) return <Spinner />
  if (!metrics) return null
  return <BodyComponent metrics={metrics} />
}
