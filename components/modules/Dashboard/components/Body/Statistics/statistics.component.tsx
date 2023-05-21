import { Grid } from '@mui/material'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Dashboard/dashboard.messages'
import { StatisticsProps } from 'components/modules/Dashboard/dashboard.model'
import InformationCard from 'components/molecules/InformationCard'

import { StatisticsStyles } from './statistics.styles'

const { colors } = theme
export const StatisticsComponent = ({
  sessionsByDay,
  ranking,
  progressByApplication,
  meanAssignmentScore,
  progressInPercentage,
  optionsForSelect,
}: StatisticsProps) => {
  const intl = useIntl()

  return (
    <>
      <div className="statistics__container">
        <Typography variant="s1" color={colors.primary[500]}>
          {intl.formatMessage(messages.statistics.title)}
        </Typography>

        <Grid container spacing={4} direction="row" alignItems="stretch">
          {sessionsByDay && (
            <Grid item xs={12} lg={4}>
              <InformationCard {...sessionsByDay} />
            </Grid>
          )}

          {meanAssignmentScore?.percentage !== undefined && (
            <Grid item xs={12} lg={4}>
              <InformationCard {...meanAssignmentScore} optionsForSelect={optionsForSelect} />
            </Grid>
          )}

          {progressInPercentage?.percentage !== undefined && (
            <Grid item xs={12} lg={4}>
              <InformationCard
                {...progressInPercentage}
                optionsForSelect={optionsForSelect}
                isCompletion
              />
            </Grid>
          )}

          {ranking && (
            <Grid item xs={12} lg={4}>
              <InformationCard {...ranking} />
            </Grid>
          )}

          {progressByApplication?.progress && (
            <Grid item xs={12} md={8}>
              <InformationCard {...progressByApplication} optionsForSelect={optionsForSelect} />
            </Grid>
          )}
        </Grid>
      </div>
      <style jsx>{StatisticsStyles}</style>
    </>
  )
}
