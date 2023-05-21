import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { messages } from './cardPorcentLaboratory.messages'
import { CardPorcentLaboratoryProps } from './cardPorcentLaboratory.model'
import { CardPorcentLaboratoryStyles } from './cardPorcentLaboratory.styled'
import { LineChartComponent } from './components/lineChart.component'

export const CardPorcentLaboratoryComponent = ({ content }: CardPorcentLaboratoryProps) => {
  const { title, lineProps } = content
  const intl = useIntl()
  return (
    <>
      <div className="container">
        <div className="container__cardmodal">
          <div className="container__cardmodal__icon">
            <TimerOutlinedIcon />
          </div>
          <div className="container__cardmodal__title">
            <Typography variant="h6" color={theme.colors.neutrals[500]}>
              {title}
            </Typography>
          </div>
        </div>
        {lineProps?.length ? (
          lineProps.map((line) => <LineChartComponent key={line.id} data={line} />)
        ) : (
          <Typography variant="s1">{intl.formatMessage(messages.error)}</Typography>
        )}
      </div>
      <style jsx>{CardPorcentLaboratoryStyles}</style>
    </>
  )
}
