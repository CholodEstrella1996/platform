import { AwardOutline } from '@easy-eva-icons/react'
import { BarChartOutlined, Moving, PersonOutlined, TimerOutlined } from '@mui/icons-material'

import { theme } from 'components/atoms/ThemeProvider'

import messages from './dashboard.messages'
import { UsageMetrics } from './dashboard.model'

const { colors } = theme

export const DEFAULT_VALUES_STATISTICS = {
  id: 1,
  icon: <BarChartOutlined />,
  color: colors.primary[500],
  type: 'percentage',
}

export const SESSIONS_BY_DAY = {
  id: 1,
  icon: <Moving />,
  color: colors.science[500],
  type: 'linear',
}

export const USAGE_METRICS: UsageMetrics = {
  totalPlatformUsageTime: {
    id: 1,
    title: messages.platformMetrics.totalPlatformUsageTime,
    icon: <TimerOutlined />,
    color: colors.science[500],
  },
  meanAssignmentDeliveryTime: {
    id: 2,
    title: messages.platformMetrics.meanAssignmentDeliveryTime,
    icon: <TimerOutlined />,
    color: colors.science[500],
  },
  totalSimulatorUsageTime: {
    id: 3,
    title: messages.platformMetrics.totalSimulatorUsageTime.title,
    subtitle: messages.platformMetrics.totalSimulatorUsageTime.subtitle,
    icon: <TimerOutlined />,
    color: colors.science[500],
  },
  meanPlatformUsageTime: {
    id: 4,
    title: messages.platformMetrics.meanPlatformUsageTime.title,
    subtitle: messages.platformMetrics.meanPlatformUsageTime.subtitle,
    icon: <TimerOutlined />,
    color: colors.science[500],
  },
  totalLearningSessions: {
    id: 5,
    title: messages.platformMetrics.totalLearningSessions.title,
    subtitle: messages.platformMetrics.totalLearningSessions.subtitle,
    icon: <Moving />,
    color: colors.mathematics[500],
  },
  activeStudents: {
    id: 6,
    title: messages.platformMetrics.activeStudents,
    icon: <PersonOutlined />,
    color: colors.engineering[500],
  },
}

export const STUDENT_METRICS = {
  assignmentsCompletedByDay: {
    id: 1,
    title: messages.studentMetrics.assignmentsCompletedByDay.title,
    subtitle: messages.studentMetrics.assignmentsCompletedByDay.subtitle,
    icon: <Moving />,
    color: colors.mathematics[500],
    type: 'area',
    linearAreaChart: {
      chart: {
        nameSeries: messages.studentMetrics.practices,
      },
    },
  },
  sessionsByDay: {
    id: 2,
    title: messages.studentMetrics.sessionsByDay.title,
    icon: <Moving />,
    color: colors.engineering[500],
    type: 'area',
    linearAreaChart: {
      chart: {
        nameSeries: messages.studentMetrics.access,
      },
    },
  },
}

export const RANKING_METRICS = {
  id: 1,
  icon: <AwardOutline />,
  color: colors.learningAreas.orange,
  type: 'ranking',
}
