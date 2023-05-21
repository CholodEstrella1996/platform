import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useMediaQuery } from 'hooks/use-media-query'

import LinearAreaChart from './components/LinearAreaChart'
import PercentageChart from './components/PercentageChart'
import ProgressCard from './components/ProgressCard'
import RankingCard from './components/RankingCard'
import { InformationCardProps } from './informationCard.model'
import { InformationCardStyles } from './informationCard.styles'

const { colors, mediaQueries } = theme
export const InformationCardComponent = ({
  title,
  subtitle,
  icon,
  color,
  informationNumber,
  type,
  percentage,
  linearAreaChart,
  isStudentMetrics,
  rankingData,
  progress,
  optionsForSelect,
  isCompletion,
}: InformationCardProps) => {
  const backgroundColor = `${color}25`
  const isTablet = useMediaQuery(mediaQueries.tablet)

  const isLinearAreaChart = type === 'linear' || type === 'area'
  const showBody =
    isLinearAreaChart || type === 'percentage' || type === 'ranking' || type === 'progress'

  return (
    <>
      <div className={`card__container ${type ?? 'card__graph'}`}>
        <div className="card__header">
          <div
            className="card__icon"
            style={{ '--icon-bg-color': backgroundColor, '--icon-color': color }}>
            {icon}
          </div>
          <div className="card__information">
            <Typography variant={isTablet ? 'h6' : 's1'} color={colors.neutrals[500]}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant={isTablet ? 'p1' : 's2'} color={colors.neutrals[300]}>
                {subtitle}
              </Typography>
            )}
            {Boolean(informationNumber) && (
              <Typography variant={isTablet ? 'h4' : 'h5'} color={color} weight="bold">
                {informationNumber}
              </Typography>
            )}
          </div>
        </div>

        {showBody && (
          <div className="card__body">
            {type === 'percentage' && (
              <PercentageChart
                percentage={percentage ?? 0}
                optionsForSelect={optionsForSelect}
                isCompletion={isCompletion}
              />
            )}
            {isLinearAreaChart && linearAreaChart && (
              <LinearAreaChart
                {...linearAreaChart}
                type={type}
                isStudentMetrics={isStudentMetrics}
              />
            )}
            {type === 'ranking' && rankingData && <RankingCard rankings={rankingData} />}
            {type === 'progress' && progress && (
              <ProgressCard progress={progress} optionsForSelect={optionsForSelect} />
            )}
          </div>
        )}
      </div>

      <style jsx>{InformationCardStyles}</style>
    </>
  )
}
