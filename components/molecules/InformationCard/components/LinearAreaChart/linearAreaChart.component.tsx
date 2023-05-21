import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import ChartBar from 'components/molecules/ChartBar'

import { LinearAreaChartStyles } from './linearAreaChart.styles'
import messages from '../../informationCard.messages'
import { LinearAreaProps } from '../../informationCard.model'

const { colors } = theme
const Section = ({ isStudentMetrics }: { isStudentMetrics?: boolean }) => {
  const intl = useIntl()
  if (isStudentMetrics) return null
  return <Dialog message={intl.formatMessage(messages.emptyInformation)} />
}

export const LinearAreaChartComponent = ({
  type,
  title,
  data = [],
  chart,
  isStudentMetrics,
}: LinearAreaProps) => {
  const linearAreaChartData = {
    nameSeries: chart.nameSeries,
    dataSeriesProp: chart.dataSeries as number[],
  }
  const chartType = type === 'linear' ? 'line' : 'area'
  const styles = `${type === 'linear' ? 'linear__chart' : 'area__chart'} linearArea__chart`

  return (
    <>
      <div className={styles}>
        <ChartBar
          {...linearAreaChartData}
          positionProp="center"
          offsetYProp={7}
          colorsBar={500}
          chartType={chartType}
        />

        {data.length ? (
          <div className="linearArea__information">
            <Typography variant="s1" color={colors.neutrals[400]}>
              {title}
            </Typography>
            <div className="linearArea__data__detail">
              {data.map(({ name, sessions, id }) => (
                <div className="linearArea__detail" key={id}>
                  <Typography variant="p2" color={colors.neutrals[400]} weight="semibold">
                    {name}
                  </Typography>
                  <Typography variant="p2" color={colors.neutrals[400]} weight="bold">
                    {sessions}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <Section isStudentMetrics={isStudentMetrics} />
        )}
      </div>
      <style jsx>{LinearAreaChartStyles}</style>
    </>
  )
}
