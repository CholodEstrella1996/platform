import { RankingCardComponent } from './rankingCard.component'
import { RankingCardProp } from '../../informationCard.model'

export const RankingCardContainer = ({ rankings }: RankingCardProp) => (
  <RankingCardComponent rankings={rankings} />
)
