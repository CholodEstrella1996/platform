import { AlertCircleOutline } from '@easy-eva-icons/react'
import EventIcon from '@mui/icons-material/Event'
import { InputAdornment } from '@mui/material'
import TextField from '@mui/material/TextField'
import { LocalizationProvider, esES, ptBR, enUS, trTR } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker'
import { Controller, useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useAppContext } from 'context/appContext'
import { useMediaQuery } from 'hooks/use-media-query'

import messages from './datePicker.messages'
import { DatePickerProps } from './datePicker.model'
import { DatePickerGlobalStyles, DatePickerStyles } from './datePicker.style'

import 'dayjs/locale/es'
import 'dayjs/locale/en'
import 'dayjs/locale/pt'
import 'dayjs/locale/tr'

const localesText = {
  en: enUS,
  es: esES,
  pt: ptBR,
  tr: trTR,
}

const DatePickerComponent = (props: DatePickerProps) => {
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
  const { mediaQueries, colors } = theme
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const { control } = useFormContext()
  const intl = useIntl()

  const { language } = useAppContext()
  const currentDate = maxDate && new Date()

  const style = {
    '--cursor-hover': disabled ? 'not-allowed' : 'unset',
  }

  return (
    <>
      <div className={`datePicker__container ${className}`} style={style}>
        <label htmlFor="select" className="select__label">
          <Typography
            variant="label"
            color={!disabled ? colors.neutrals[400] : colors.neutrals[200]}>
            {label.toUpperCase()}
          </Typography>
        </label>
        <Controller
          render={({ field: { onChange, ref, value = null }, fieldState: { error } }) => (
            <>
              <LocalizationProvider
                adapterLocale={language}
                localeText={
                  localesText[language].components.MuiLocalizationProvider.defaultProps.localeText
                }
                dateAdapter={AdapterDayjs}>
                {isTablet ? (
                  <DesktopDatePicker
                    className={`datePicker ${error ? 'datePicker--error' : ''}`}
                    maxDate={currentDate}
                    ref={ref}
                    disabled={disabled}
                    value={value}
                    readOnly={readOnly}
                    inputFormat="DD/MM/YYYY"
                    onChange={onChange}
                    InputAdornmentProps={{ position: 'start' }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          placeholder,
                        }}
                      />
                    )}
                  />
                ) : (
                  <MobileDatePicker
                    className={`datePicker ${error ? 'datePicker--error' : ''}`}
                    maxDate={currentDate}
                    ref={ref}
                    inputFormat="DD/MM/YYYY"
                    disabled={disabled}
                    value={value}
                    readOnly={readOnly}
                    onChange={onChange}
                    toolbarTitle={label}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EventIcon
                            className={`datePicker__mobile__icon ${
                              disabled ? 'datePicker__mobile__icon--disabled' : ''
                            }`}
                          />
                        </InputAdornment>
                      ),
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        inputProps={{
                          ...params.inputProps,
                          placeholder,
                        }}
                      />
                    )}
                  />
                )}
              </LocalizationProvider>
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
            </>
          )}
          name={name}
          rules={{ required }}
          control={control}
        />
      </div>
      <style jsx>{DatePickerStyles}</style>
      <style jsx global>
        {DatePickerGlobalStyles}
      </style>
    </>
  )
}

export default DatePickerComponent
