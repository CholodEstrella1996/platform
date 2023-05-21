import { LinearProgress } from '@mui/material'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { ProgressCardStyles } from './progressCard.styles'
import messages from '../../informationCard.messages'
import { ProgressCardProps } from '../../informationCard.model'

const { colors } = theme
const MIN_VALUE = 0
export const ProgressCardComponent = ({ progress, areas = [], topics = [] }: ProgressCardProps) => {
  const intl = useIntl()

  const areasSelect = {
    name: 'areaPercentage',
    label: intl.formatMessage(messages.percentage.select.area),
    placeholder: intl.formatMessage(messages.percentage.select.placeholder),
    isClearable: true,
    options: areas,
  }

  const topicsSelect = {
    name: 'topicPercentage',
    label: intl.formatMessage(messages.percentage.select.topic),
    placeholder: intl.formatMessage(messages.percentage.select.placeholder),
    isClearable: true,
    options: topics,
    disabled: !topics.length,
  }

  return (
    <>
      <div className="progress__container">
        <div className="select__filters">
          <Select {...areasSelect} />
          <Select {...topicsSelect} />
        </div>

        {progress?.length ? (
          <div className="progress__detail__container">
            {progress?.map(({ id, name, studentsThatCompletedAssignment, totalStudents }) => (
              <div className="progress__detail" key={id}>
                <div className="name__amount">
                  <Typography variant="s2" color={colors.neutrals[400]}>
                    {name}
                  </Typography>
                  <Typography variant="c1" color={colors.neutrals[300]}>
                    {studentsThatCompletedAssignment}/{totalStudents}
                  </Typography>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={
                    ((studentsThatCompletedAssignment - MIN_VALUE) * 100) /
                    (totalStudents - MIN_VALUE)
                  }
                />
              </div>
            ))}
          </div>
        ) : (
          <Dialog message={intl.formatMessage(messages.emptyInformation)} />
        )}
      </div>
      <style jsx>{ProgressCardStyles}</style>
    </>
  )
}
