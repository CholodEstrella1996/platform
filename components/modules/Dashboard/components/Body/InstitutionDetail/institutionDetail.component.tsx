import { PersonOutlineOutlined } from '@mui/icons-material'
import { useIntl } from 'react-intl'

import { Avatar } from 'components/atoms/Avatar'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import messages from 'components/modules/Dashboard/dashboard.messages'
import { DashboardStyles } from 'components/modules/Dashboard/dashboard.styles'

import ProgressBar from '../ProgressBar'

type Props = {
  activeMembers: number
  availableInvitations: number
  invitedMembers: number
  totalInvitations: number
}

const { colors } = theme
export const InstitutionDetailComponent = ({
  activeMembers,
  availableInvitations,
  invitedMembers,
  totalInvitations,
}: Props) => {
  const intl = useIntl()

  return (
    <>
      <div className="institutionDetail__container">
        <Typography variant="s1" color={colors.primary[500]}>
          {intl.formatMessage(messages.institutionDetail.header)}
        </Typography>
        <div className="institutionDetail__card">
          <div className="institution__users">
            <Avatar icon={<PersonOutlineOutlined />} color={colors.engineering[100]} size="large" />
            <div className="users__text">
              <Typography variant="h6" color={colors.neutrals[500]}>
                {intl.formatMessage(messages.institutionDetail.users)}
              </Typography>
              <Typography variant="h3" color={colors.engineering[500]}>
                {activeMembers}
              </Typography>
            </div>
          </div>
          {/* TODO revisar esta barra de progreso que esta distinta a figma y si los valores que se estan enviado estan bien */}
          <ProgressBar
            activeMembers={activeMembers}
            totalInvitations={totalInvitations}
            availableInvitations={availableInvitations}
            invitedMembers={invitedMembers}
          />
        </div>
      </div>
      <style jsx>{DashboardStyles}</style>
    </>
  )
}
