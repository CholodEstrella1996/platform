import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Dashboard/dashboard.messages'
import { InformationProps } from 'components/modules/Dashboard/dashboard.model'
import { DashboardStyles } from 'components/modules/Dashboard/dashboard.styles'
import InformationCard from 'components/molecules/InformationCard'

type Prop = {
  isStudentMetrics?: boolean
  metrics?: InformationProps[]
}
const { colors } = theme

export const PlatformStudentMetricsComponent = ({ metrics, isStudentMetrics = false }: Prop) => {
  const intl = useIntl()
  const styles = `${!isStudentMetrics ? '' : 'student__metric'} metrics__information`

  return (
    <>
      <div className="platformMetrics__container">
        <Typography variant="s1" color={colors.primary[500]}>
          {intl.formatMessage(
            !isStudentMetrics ? messages.platformMetrics.title : messages.studentMetrics.title,
          )}
        </Typography>

        <div className={styles}>
          {metrics?.map((metric) => {
            if (!metric.informationNumber) return null
            return (
              <InformationCard {...metric} key={metric.id} isStudentMetrics={isStudentMetrics} />
            )
          })}
        </div>
      </div>

      <style jsx>{DashboardStyles}</style>
    </>
  )
}
