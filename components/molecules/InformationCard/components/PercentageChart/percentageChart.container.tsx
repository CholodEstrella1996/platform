import { OptionsForSelect } from 'components/modules/Dashboard/dashboard.model'

import { PercentageChartComponent } from './percentageChart.component'

type Prop = {
  percentage: number
  optionsForSelect?: OptionsForSelect
  isCompletion?: boolean
}

export const PercentageChartContainer = ({
  percentage,
  optionsForSelect,
  isCompletion = false,
}: Prop) => {
  const { areas = [], laboratories = [] } = optionsForSelect ?? {}

  return (
    <PercentageChartComponent
      percentage={percentage}
      areas={areas}
      laboratories={laboratories}
      isCompletion={isCompletion}
    />
  )
}
