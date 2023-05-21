import { useState } from 'react'

import { AlertCircleOutline, CalendarOutline } from '@easy-eva-icons/react'
import { enUS, es, pt, tr } from 'date-fns/locale'
import DatePicker, { registerLocale } from 'react-datepicker'
import { Controller, useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAppContext } from 'context/appContext'

import { DateRangePickerProps } from './datePickerRange.model'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerRangeStyles } from './datePickerRange.style'
import messages from '../DatePicker/datePicker.messages'

const dateFormat = {
  en: 'MM/dd/yyyy',
  tr: 'MM/dd/yyyy',
  es: 'dd/MM/yyyy',
  pt: 'dd/MM/yyyy',
}
const { colors } = theme
const localesText = {
  en: enUS,
  es,
  pt,
  tr,
}
type RangeDate = [Date | null, Date | null]
export const DatePickerRangeComponent = (props: DateRangePickerProps) => {
  const {
    className = '',
    disabled = false,
    label = '',
    name,
    placeholder = 'DD/MM/YYYY',
    readOnly = false,
    required = false,
    maxDate,
  } = props

  const [dateRange, setDateRange] = useState<RangeDate>([null, null])
  const [startDate, endDate] = dateRange

  const { control } = useFormContext()
  const intl = useIntl()
  const { language } = useAppContext()
  const currentDate = maxDate ? new Date() : undefined

  const localeLanguage = localesText[language]
  registerLocale(language, localesText[language])

  const style = {
    '--cursor-hover': disabled ? 'not-allowed' : 'unset',
  }

  return (
    <>
      <div className={`dateRangePicker__container ${className}`} style={style}>
        <label htmlFor="select" className="select__label">
          <Typography
            variant="label"
            color={disabled ? colors.neutrals[200] : colors.neutrals[400]}>
            {label.toUpperCase()}
          </Typography>
        </label>
        <Controller
          render={({ field: { onChange, ref }, fieldState: { error } }) => (
            <div className="range__picker">
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={(update: RangeDate) => {
                  setDateRange(update)
                  onChange(update)
                }}
                isClearable
                disabled={disabled}
                ref={ref}
                readOnly={readOnly}
                title={label}
                placeholderText={placeholder}
                maxDate={currentDate}
                locale={localeLanguage.code}
                dateFormat={dateFormat[language]}
              />

              <CalendarOutline
                fontSize={20}
                className={`dateRangePicker__icon ${
                  disabled ? 'dateRangePicker__icon--disabled' : ''
                }`}
              />

              {error && (
                <>
                  <span className="warning__icon">
                    <AlertCircleOutline fontSize={20} />
                  </span>
                  <span className="warning__msg">
                    <Typography variant="c1" color={colors.semantic.danger}>
                      {intl.formatMessage(messages.error.empty)}
                    </Typography>
                  </span>
                </>
              )}
            </div>
          )}
          name={name}
          rules={{ required }}
          control={control}
        />
      </div>
      <style jsx>{DatePickerRangeStyles}</style>
    </>
  )
}
