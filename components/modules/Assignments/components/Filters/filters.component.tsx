import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { Button } from 'components/atoms/Button'
import DatePickerRange from 'components/atoms/DatePickerRange'
import Dropdown from 'components/atoms/Dropdown'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'
import { AssignmentsResponse } from 'services/models/assignments.model'

import { messages as messagesFilter } from './filters.messages'
import { FilterStyles } from './filters.style'
import { useAssignment } from '../../assignments.hook'
import messages from '../../assignments.messages'
import { DataFilter } from '../../assignments.model'

const { mediaQueries } = theme
type Props = {
  filters: AssignmentsResponse['filters']
  isLoading: boolean
}

export const FiltersComponent = ({ filters, isLoading }: Props) => {
  const intl = useIntl()
  const { reset } = useFormContext<DataFilter>()
  const currentFilters = useAssignment(filters)
  const isTablet = useMediaQuery(mediaQueries.tablet)

  const { dynamicFilters, staticFilters } = { ...currentFilters }

  const onClearFilters = () => {
    dynamicFilters?.forEach((filter) => filter.reference.current?.clearValue())
    staticFilters?.forEach((filter) => filter.reference.current?.clearValue())
    reset()
  }
  return (
    <>
      <Dropdown title={intl.formatMessage(messagesFilter.filters.title)}>
        <div className="filters__container">
          {Boolean(dynamicFilters?.length || staticFilters?.length) && (
            <>
              <div className="top__filters">
                {dynamicFilters?.map((item) => (
                  <Select key={item.id} {...item} fullWidth />
                ))}
              </div>
              <div className="bottom__filters">
                {staticFilters?.map((item) => (
                  <Select key={item.id} {...item} />
                ))}
                {isTablet && (
                  <DatePickerRange
                    name="date"
                    label={intl.formatMessage(messages.resultsTable.filters.labels.date)}
                    placeholder={intl.formatMessage(
                      messages.resultsTable.filters.placeholders.date,
                    )}
                    maxDate
                  />
                )}
              </div>
            </>
          )}

          <div className="clear__filter">
            <Button
              loading={isLoading}
              disabled={isLoading}
              variant="contained"
              size="medium"
              className={!isTablet ? 'clear__button' : ''}
              onClick={onClearFilters}>
              {intl.formatMessage(messagesFilter.filters.button)}
            </Button>
          </div>
        </div>
      </Dropdown>
      <style jsx>{FilterStyles}</style>
    </>
  )
}
