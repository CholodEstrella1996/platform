import { Close } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { DashboardCards } from 'components/modules/Dashboard/dashboard.model'

type Props = {
  card: DashboardCards
  handleCloseCard: (id: number) => void
  handleAction: (action: string) => Promise<void>
}

const { colors } = theme

export const RenderCard = ({ card, handleCloseCard, handleAction }: Props) => {
  const { id, title, subtitle, image, redirectTo, requiredAction } = card
  const intl = useIntl()
  const router = useRouter()

  const handleRedirect = () => {
    void handleAction(requiredAction)
    void router.push(redirectTo)
  }

  const handleClick = () => {
    handleCloseCard(id)
  }

  return (
    <div className="card__container">
      <button type="button" className="card__detail" onClick={() => handleRedirect()}>
        <div className="card__text">
          <Typography variant="h6" color={colors.primary[500]}>
            {intl.formatMessage(title)}
          </Typography>
          {subtitle && (
            <Typography variant="p2" color={colors.neutrals[400]}>
              {intl.formatMessage(subtitle)}
            </Typography>
          )}
        </div>
        <Image src={image.src} alt={image.src} width={92} height={96} />
      </button>
      <IconButton onClick={() => handleClick()}>
        <Close fontSize="small" />
      </IconButton>
    </div>
  )
}
