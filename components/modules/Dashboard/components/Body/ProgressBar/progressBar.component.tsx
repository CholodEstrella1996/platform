import { LinearProgress } from '@mui/material'
import { useIntl } from 'react-intl'

import Chip from 'components/atoms/Chip'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Dashboard/dashboard.messages'
import { useMediaQuery } from 'hooks/use-media-query'

import { ProgressBarStyles } from './progressBar.styles'

type Props = {
  activeMembers: number
  availableInvitations: number
  invitedMembers: number
  totalInvitations: number
}

const { colors, mediaQueries } = theme

export const ProgressBarComponent = ({
  activeMembers,
  availableInvitations,
  invitedMembers,
  totalInvitations,
}: Props) => {
  const intl = useIntl()
  const isTablet = useMediaQuery(mediaQueries.tablet)

  return (
    <>
      <section className="progressBar__container">
        <div className="progressBar__labels">
          <div className={`labels ${isTablet ? '' : 'labels--center'}`}>
            <Typography variant={isTablet ? 'label' : 'c2'} color={colors.neutrals[300]}>
              {intl.formatMessage(messages.institutionDetail.progressBar.registered)}
            </Typography>
            <Chip title={`${activeMembers}`} status="primary" />
          </div>

          <div className="labels labels--center">
            <Typography variant={isTablet ? 'label' : 'c2'} color={colors.neutrals[300]}>
              {intl.formatMessage(messages.institutionDetail.progressBar.invited)}
            </Typography>
            <Chip title={`${invitedMembers}`} status="unsubmitted" />
          </div>
          <div className={`labels ${isTablet ? 'labels--right' : 'labels--center'}`}>
            <Typography variant={isTablet ? 'label' : 'c2'} color={colors.neutrals[300]}>
              {intl.formatMessage(messages.institutionDetail.progressBar.available)}
            </Typography>
            <Chip title={`${availableInvitations}`} status="invited" />
          </div>
          <div className={`labels ${isTablet ? 'labels--right' : 'labels--center'}`}>
            <Typography variant={isTablet ? 'label' : 'c2'} color={colors.neutrals[300]}>
              {intl.formatMessage(messages.institutionDetail.progressBar.total)}
            </Typography>
            <Chip title={`${totalInvitations}`} status="invited" />
          </div>
        </div>

        {isTablet && (
          <LinearProgress
            variant="buffer"
            valueBuffer={Math.trunc(((invitedMembers + activeMembers) * 100) / totalInvitations)}
            value={Math.trunc((activeMembers * 100) / totalInvitations)}
          />
        )}
      </section>
      <style jsx>{ProgressBarStyles}</style>
    </>
  )
}
