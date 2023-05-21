import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { ROLES } from 'constants/roles'
import { useAppContext } from 'context/appContext'

import messages from './percentageGraph.messages'
import { PercentageGraphProps } from './percentageGraph.model'
import { PercentageGraphLocalStyles } from './percentageGraph.styles'

const {
  independent,
  family: { parent, child },
} = ROLES
const { colors } = theme

export const PercentageGraphComponent = ({
  percentages,
  showDetail = true,
}: PercentageGraphProps) => {
  const intl = useIntl()
  const { profile } = useAppContext()

  const { simulator, professor } = percentages
  const percentageValue = professor && professor !== -1 ? (simulator + professor) / 2 : simulator
  const hasFeedback = professor !== -1
  const showButton = profile !== independent.teacher && profile !== independent.student

  const isFamilyRole = profile === parent || profile === child

  const percentageNumber = (value: number, feedback: boolean, graph?: boolean) => (
    <div className="percentage">
      <Typography variant={graph ? 'h1' : 'h6'} color={theme.colors.neutrals[500]}>
        {feedback ? value : '-'}
      </Typography>
      <Typography
        variant="h6"
        color={theme.colors.neutrals[300]}
        className={graph ? 'percentage__hundred' : ''}>
        {feedback ? '/100' : '/-'}
      </Typography>
    </div>
  )

  const svgComponent = () => (
    <svg height="0" width="0">
      <linearGradient id="gradientChart2">
        <stop offset="0%" stopColor={colors.primary[700]} />
        <stop offset="100%" stopColor={colors.primary[400]} />
      </linearGradient>
    </svg>
  )

  return (
    <>
      <div className="percentage__graph">
        {svgComponent()}

        <CircularProgressbarWithChildren
          value={percentageValue}
          strokeWidth={10}
          className="circular__progress"
          styles={{
            path: {
              stroke: 'url(#gradientChart2)',
              strokeLinecap: 'round',
              transformOrigin: 'center center',
              transition: 'stroke-dashoffset 0.5s ease 0s',
            },
            trail: {
              stroke: colors.neutrals[100],
              transformOrigin: 'center center',
            },
          }}>
          {showDetail && percentageNumber(percentageValue, true, true)}
          <Typography
            variant={showDetail ? 'c1' : 's1'}
            color={showDetail ? colors.neutrals[300] : colors.primary[500]}
            className={showDetail ? '' : 'capitalize'}>
            {intl.formatMessage(messages.average)}
          </Typography>
          {!showDetail && (
            <Typography variant="s1" color={colors.neutrals[900]}>
              {percentages.simulator}%
            </Typography>
          )}
        </CircularProgressbarWithChildren>

        {showDetail && (
          <div className="percentage__details">
            <div className=" simulator__professor">
              <Typography
                variant="p2"
                color={theme.colors.neutrals[300]}
                weight="bold"
                className="bottom__padding">
                {intl.formatMessage(messages.percentageDetail.simulator)}
              </Typography>
              {percentageNumber(simulator, true)}
            </div>
            {professor && showButton && (
              <div className=" simulator__professor">
                <Typography
                  variant="p2"
                  color={theme.colors.neutrals[300]}
                  weight="bold"
                  className="bottom__padding">
                  {intl.formatMessage(messages.percentageDetail.feedback, { isFamilyRole })}
                </Typography>
                {percentageNumber(professor, hasFeedback)}
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{PercentageGraphLocalStyles}</style>
    </>
  )
}
