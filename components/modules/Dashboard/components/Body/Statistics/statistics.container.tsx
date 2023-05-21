import { useMemo, useState, useEffect } from 'react'

import { useRouter } from 'next/router'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import {
  SESSIONS_BY_DAY,
  DEFAULT_VALUES_STATISTICS,
  RANKING_METRICS,
} from 'components/modules/Dashboard/dashboard.metrics.constants'
import { Filters, OptionsForSelect } from 'components/modules/Dashboard/dashboard.model'
import { DashboardResponse } from 'services/models/dashboard.model'
import applicationService from 'services/modules/applications'
import areaService from 'services/modules/areas'
import topicService from 'services/modules/topic'
import { formatDataToChart, getOptionsWithId } from 'utils/helpers/edit-content'

import { StatisticsComponent } from './statistics.component'
import messages from '../../../dashboard.messages'

const { getAreas } = areaService
const { getTopics } = topicService
const { getMySubscriptionsApplications } = applicationService

const DEFAULT_OPTIONS: OptionsForSelect = {
  areas: [],
  topics: [],
  laboratories: [],
}

type Props = {
  statisticsMetrics: DashboardResponse['statisticsMetrics']
}

export const StatisticsContainer = ({ statisticsMetrics }: Props) => {
  const [area, setArea] = useState<number>()
  const [options, setOptions] = useState<OptionsForSelect>(DEFAULT_OPTIONS)
  const { watch } = useFormContext<Filters>()
  const intl = useIntl()
  const router = useRouter()

  const organizationId = router.query['id-institution']
  const areaPercentage = watch('areaPercentage')
  const areaMeanAssignment = watch('areaMeanAssignment')

  const meanAssignmentScore = useMemo(
    () => ({
      ...DEFAULT_VALUES_STATISTICS,
      title: intl.formatMessage(messages.statistics.meanAssignmentScore),
      percentage: statisticsMetrics.meanAssignmentScore,
    }),
    [statisticsMetrics],
  )

  const progressInPercentage = useMemo(
    () => ({
      ...DEFAULT_VALUES_STATISTICS,
      title: intl.formatMessage(messages.statistics.progressInPercentage),
      percentage: statisticsMetrics.progressInPercentage,
    }),
    [statisticsMetrics],
  )

  const progressByApplication = useMemo(
    () => ({
      ...DEFAULT_VALUES_STATISTICS,
      title: intl.formatMessage(messages.statistics.progressByApplication),
      progress: statisticsMetrics.progressByApplication,
      type: 'progress',
    }),
    [statisticsMetrics],
  )

  const sessionsByDay = useMemo(() => {
    if (!statisticsMetrics.sessionsByDay) return undefined

    return {
      ...SESSIONS_BY_DAY,
      title: intl.formatMessage(messages.statistics.sessionsByDay.title),
      informationNumber:
        statisticsMetrics.todaySessions !== null || statisticsMetrics.todaySessions !== undefined
          ? String(statisticsMetrics.todaySessions)
          : '',
      linearAreaChart: {
        title: intl.formatMessage(messages.statistics.sessionsByDay.linearAreaChart),
        data: statisticsMetrics.todaySessionsByOrganization ?? [],
        chart: {
          nameSeries: intl.formatMessage(messages.statistics.sessionsByDay.nameSeries),
          dataSeries: formatDataToChart(statisticsMetrics.sessionsByDay),
        },
      },
    }
  }, [statisticsMetrics])

  const ranking = useMemo(() => {
    if (!statisticsMetrics.ranking) return undefined

    return {
      ...RANKING_METRICS,
      title: intl.formatMessage(messages.statistics.ranking),
      rankingData: statisticsMetrics.ranking,
    }
  }, [statisticsMetrics])

  const fetchAreas = async () => {
    try {
      const params = { ...(organizationId && { organizationId: Number(organizationId) }) }
      const response = await getAreas(params)
      const areas = getOptionsWithId(response)
      setOptions((prevState) => ({ ...prevState, areas }))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error fetch areas', error)
    }
  }

  const fetchTopics = async () => {
    try {
      const params = {
        areaId: areaPercentage,
        ...(organizationId && { organizationId: Number(organizationId) }),
      }
      const response = await getTopics(params)
      const topics = getOptionsWithId(response)
      setOptions((prevState) => ({ ...prevState, topics }))
      setArea(areaPercentage)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error fetch areas', error)
    }
  }

  const fetchLaboratories = async () => {
    try {
      const params = {
        areaMeanAssignment,
        ...(organizationId && { organizationId: Number(organizationId) }),
      }
      const { content } = await getMySubscriptionsApplications(params)
      const laboratories = getOptionsWithId(content)
      setOptions((prevState) => ({ ...prevState, laboratories }))
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Error fetch areas', error)
    }
  }

  useEffect(() => {
    if (!options.areas.length) void fetchAreas()
    if (!options.topics.length && area !== areaPercentage) void fetchTopics()
    if (!options.laboratories.length) void fetchLaboratories()
  }, [])

  return (
    <StatisticsComponent
      sessionsByDay={sessionsByDay}
      ranking={ranking}
      meanAssignmentScore={meanAssignmentScore}
      progressInPercentage={progressInPercentage}
      progressByApplication={progressByApplication}
      optionsForSelect={options}
    />
  )
}
