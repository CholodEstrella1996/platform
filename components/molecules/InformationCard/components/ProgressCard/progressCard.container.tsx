import { OptionsForSelect } from 'components/modules/Dashboard/dashboard.model'
import { DashboardResponse } from 'services/models/dashboard.model'

import { ProgressCardComponent } from './progressCard.component'

type Prop = {
  progress: DashboardResponse['statisticsMetrics']['progressByApplication']
  optionsForSelect?: OptionsForSelect
}

export const ProgressCardContainer = ({ progress, optionsForSelect }: Prop) => (
  <ProgressCardComponent
    progress={progress}
    topics={optionsForSelect?.topics}
    areas={optionsForSelect?.areas}
  />
)
