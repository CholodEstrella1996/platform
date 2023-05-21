import { LinearAreaChartComponent } from './linearAreaChart.component'
import { LinearAreaProps } from '../../informationCard.model'

export const LinearAreaChartContainer = (prop: LinearAreaProps) => (
  <LinearAreaChartComponent {...prop} />
)
