import { useIntl } from 'react-intl'

import PercentageGraph from 'components/atoms/PercentageGraph'
import Select from 'components/atoms/Select'

import { PercentageChartStyles } from './percentageChart.styles'
import messages from '../../informationCard.messages'
import { PercentageProps } from '../../informationCard.model'

export const PercentageChartComponent = ({
  percentage,
  areas,
  laboratories,
  isCompletion,
}: PercentageProps) => {
  const intl = useIntl()

  const areasSelect = {
    name: !isCompletion ? 'areaMeanAssignment' : 'areaCompletion',
    label: intl.formatMessage(messages.percentage.select.area),
    placeholder: intl.formatMessage(messages.percentage.select.placeholder),
    isClearable: true,
    options: areas,
    disabled: !areas.length,
  }

  const laboratoriesSelect = {
    name: !isCompletion ? 'applicationMeanAssignment' : 'applicationCompletion',
    label: intl.formatMessage(messages.percentage.select.laboratory),
    placeholder: intl.formatMessage(messages.percentage.select.placeholder),
    isClearable: true,
    options: laboratories,
    disabled: !areas.length,
  }
  return (
    <>
      <div className="percentage__chart">
        <PercentageGraph percentages={{ simulator: percentage }} showDetail={false} />
        <div style={{ flex: 1 }} />
        <div className="select__filters">
          <Select {...areasSelect} />
          <Select {...laboratoriesSelect} />
        </div>
      </div>

      <style jsx>{PercentageChartStyles}</style>
    </>
  )
}
