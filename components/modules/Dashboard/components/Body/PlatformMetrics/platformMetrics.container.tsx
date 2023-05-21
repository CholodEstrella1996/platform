import { useMemo } from 'react'

import { useIntl } from 'react-intl'

import {
  USAGE_METRICS,
  STUDENT_METRICS,
} from 'components/modules/Dashboard/dashboard.metrics.constants'
import { DashboardResponse } from 'services/models/dashboard.model'
import { convertRemainTime } from 'utils/helpers/convertRemainTime'
import { formatStudentToChart } from 'utils/helpers/edit-content'

import { PlatformStudentMetricsComponent } from './platformMetrics.component'

const withoutFormat = ['totalLearningSessions', 'activeStudents']
const assignmentsCompletedByDay = ['assignmentsCompletedByDay']
const filterKeys = ['assignmentsCompletedByDay', 'sessionsByDay']

type Prop = {
  studentMetrics?: DashboardResponse['studentMetrics']
  usageMetrics?: DashboardResponse['usageMetrics']
}

export const PlatformMetricsContainer = ({ studentMetrics, usageMetrics }: Prop) => {
  const intl = useIntl()
  const editedUsageMetrics =
    Object.entries(usageMetrics ?? {})
      .filter((metric) => metric[1] !== null && metric[1] !== undefined)
      .map(([key, value]) => {
        const informationValue = withoutFormat.includes(key)
          ? String(value)
          : convertRemainTime(String(value))
        const metric = USAGE_METRICS[key as keyof typeof USAGE_METRICS]
        return {
          ...metric,
          informationNumber:
            informationValue !== null || informationValue !== undefined ? informationValue : '',
          title: intl.formatMessage(metric.title),
          subtitle: metric.subtitle ? intl.formatMessage(metric.subtitle) : '',
        }
      }) ?? []

  const editedStudentMetrics = useMemo(() => {
    if (!studentMetrics) return undefined
    return (
      Object.entries(studentMetrics ?? {})
        .filter((metric) => filterKeys.includes(metric[0]))
        .map(([key]) => {
          const informationValue = assignmentsCompletedByDay.includes(key)
            ? studentMetrics?.completedAssignments
            : studentMetrics?.todaySessions
          const metric = STUDENT_METRICS[key as keyof typeof STUDENT_METRICS]
          const { subtitle } = metric as typeof STUDENT_METRICS.assignmentsCompletedByDay
          return {
            ...metric,
            informationNumber:
              informationValue !== null || informationValue !== undefined
                ? String(informationValue)
                : '',
            title: intl.formatMessage(metric.title),
            ...(subtitle && { subtitle: intl.formatMessage(subtitle) }),
            linearAreaChart: {
              chart: {
                nameSeries: intl.formatMessage(metric.linearAreaChart.chart.nameSeries),
                dataSeries: assignmentsCompletedByDay.includes(key)
                  ? formatStudentToChart(studentMetrics, 'assignmentsCompletedByDay')
                  : formatStudentToChart(studentMetrics, 'sessionsByDay'),
              },
            },
          }
        }) ?? []
    )
  }, [studentMetrics])
  const metrics = !studentMetrics ? editedUsageMetrics : editedStudentMetrics
  return (
    <PlatformStudentMetricsComponent metrics={metrics} isStudentMetrics={Boolean(studentMetrics)} />
  )
}
