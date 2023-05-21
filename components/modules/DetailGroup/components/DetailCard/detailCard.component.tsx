import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { useRouter } from 'next/router'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { historyPath } from 'utils/helpers/historyPath'

import { DetailGroupStyles } from '../../detailGroup.styles'

const { colors } = theme

type Props = {
  subtitle?: string
  redirect?: boolean
  quantity?: number
}

export default function DetailCard({ subtitle, redirect = false, quantity }: Props) {
  const router = useRouter()
  const history = historyPath(router.asPath)
  const path = `${history}/learning-units`

  const handleClick = () => void router.push(path)
  return (
    <>
      <div
        role="button"
        onClick={redirect ? handleClick : undefined}
        onKeyDown={redirect ? handleClick : undefined}
        tabIndex={0}
        className={` ${redirect ? 'card__learning card__learning--icon' : 'card__container'}`}>
        <span className="card__description">
          <Typography variant="h1" color={colors.neutrals[500]}>
            {quantity}
          </Typography>
          <Typography variant="p1" color={colors.neutrals[400]}>
            {subtitle}
          </Typography>
        </span>
        {redirect && (
          <KeyboardArrowRightIcon sx={{ color: colors.primary[500], cursor: 'pointer' }} />
        )}
      </div>
      <style jsx>{DetailGroupStyles}</style>
    </>
  )
}
