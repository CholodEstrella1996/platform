import { InformationCardComponent } from './informationCard.component'
import { InformationCardProps } from './informationCard.model'

export const InformationCardContainer = (props: InformationCardProps) => (
  <InformationCardComponent {...props} />
)
