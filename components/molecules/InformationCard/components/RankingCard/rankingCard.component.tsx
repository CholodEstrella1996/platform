import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import Dialog from 'components/atoms/Dialog'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DEFAULT_ICON_IMG_PROPS } from 'constants/defaultStaticImages'

import { RankingCardStyles } from './rankingCard.styles'
import messages from '../../informationCard.messages'
import { RankingCardProp } from '../../informationCard.model'

const { colors } = theme

export const RankingCardComponent = ({ rankings = [] }: RankingCardProp) => {
  const intl = useIntl()

  return (
    <>
      <div className="rankings__container">
        {rankings.length ? (
          rankings.map(({ avatarUrl, fullName, score, id }, index) => (
            <div className="card__container" key={id}>
              <Avatar image={avatarUrl ?? DEFAULT_ICON_IMG_PROPS.image} size="medium" />
              <div className="ranker__information">
                <div className="name__points">
                  <Typography variant="s2" color={colors.neutrals[400]}>
                    {fullName}
                  </Typography>
                  <Typography variant="c2" color={colors.neutrals[200]}>
                    {intl.formatMessage(messages.ranking, { score })}
                  </Typography>
                </div>
                <Typography variant="s2" color={colors.neutrals[600]}>
                  #{index + 1}
                </Typography>
              </div>
            </div>
          ))
        ) : (
          <Dialog message={intl.formatMessage(messages.emptyInformation)} />
        )}
      </div>
      <style jsx>{RankingCardStyles}</style>
    </>
  )
}
