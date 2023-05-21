import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

import { theme } from 'components/atoms/ThemeProvider'

import { LineProps } from '../cardPorcentLaboratory.model'
import { CardPorcentLaboratoryStyles } from '../cardPorcentLaboratory.styled'

type LineProgresProps = {
  data: LineProps
}
export const LineChartComponent = ({ data }: LineProgresProps) => {
  const { lineTitle, linePosition, lineProgress } = data
  const { colors } = theme
  const BorderLinearProgress = styled(LinearProgress)(() => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: colors.primary[200],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: colors.primary[500],
    },
  }))
  return (
    <>
      <div className="lineChar__container">
        <div className="lineChar__container__titles">
          <div className="lineChar__container__titles__title"> {lineTitle} </div>
          <div className="lineChar__container__titles__position">{linePosition}</div>
        </div>
        <div className="lineChar__container__chart">
          <BorderLinearProgress variant="determinate" value={lineProgress} />
        </div>
      </div>
      <style jsx>{CardPorcentLaboratoryStyles}</style>
    </>
  )
}
