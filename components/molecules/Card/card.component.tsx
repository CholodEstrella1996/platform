import { BusinessRounded, Groups } from '@mui/icons-material'

import Chip from 'components/atoms/Chip'
import SubscriptionType from 'components/atoms/SubscriptionType'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { CardProps } from './card.model'
import { CardStyles } from './card.styles'

const { colors } = theme

const CardComponent = ({ name, type, educationKind, sector, isFromGroups = true }: CardProps) => (
  <>
    <div className="card__container">
      <div className="card__title">
        {isFromGroups ? <Groups /> : <BusinessRounded />}
        <div className="card__text">
          <Typography variant="s1" color={colors.neutrals[400]} className="card__name">
            {name}
          </Typography>
          {sector && (
            <Typography variant="c1" color={colors.neutrals[300]}>
              {sector}
            </Typography>
          )}
        </div>
      </div>
      <div className="gap-adjustment" />
      {type && <SubscriptionType type={type} />}
      {educationKind && <Chip status="primary" title={educationKind} />}
    </div>
    <style jsx>{CardStyles}</style>
  </>
)

export default CardComponent
