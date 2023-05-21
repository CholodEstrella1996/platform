import React from 'react'

import { AlertCircleOutline } from '@easy-eva-icons/react'
import { Controller, useFormContext } from 'react-hook-form'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { Label, CloseButton, ErrorMessage } from './components/auxiliaries.component'
import { Input } from './components/input.component'
import { InputProps } from './customInput.model'
import { InputLocalStyles } from './customInput.styles'
import { getInputStyles, getBorderStyle } from './getInputStyles'

const { colors } = theme

const CustomInputComponent = (props: InputProps) => {
  const {
    name,
    placeholder = '',
    label,
    className,
    required = false,
    pattern = false,
    isClearable = false,
    disabled = false,
    multiline = false,
    maxLength,
    maxNumber,
    rows,
    cols,
    icon,
    iconPosition = 'left',
    size = 'medium',
    type = 'text',
  } = props

  const inputClassName = `input__control input--${size} ${multiline ? `textArea-resize` : ''}`
  const iconClassName = `icon__container icon--${size} icon--${iconPosition} icon--warningHide`
  const warningClassName = `icon--warning icon--right icon--${size}`
  const counterClassName = `counter__container counter--${size}`

  const widthAndPadding = icon ? iconPosition : 'right'
  const labelColor = disabled ? colors.neutrals[200] : colors.neutrals[400]
  const styles = getInputStyles(multiline, isClearable, widthAndPadding, disabled, colors)

  const { resetField, watch, control } = useFormContext()
  const currentLength: string = watch(name) ?? ''

  return (
    <div style={styles} className={className}>
      <div className="input__container">
        {!!label && <Label name={name} color={labelColor} label={label} />}
        <Controller
          name={name}
          rules={{ required }}
          control={control}
          defaultValue=""
          render={({ field: { onChange, ref, value }, fieldState: { error } }) => (
            <>
              <div className="input__formControl" style={getBorderStyle(colors, error)}>
                {!!icon && iconPosition === 'left' && <div className={iconClassName}>{icon}</div>}

                <Input
                  className={inputClassName}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  maxNumber={maxNumber}
                  type={type}
                  disabled={disabled}
                  multiline={multiline}
                  cols={cols}
                  rows={rows}
                  pattern={pattern}
                  onChange={onChange}
                  innerRef={ref}
                  value={value}
                  name={name}
                />

                {!!maxLength && (
                  <div className={multiline ? 'textArea__count' : counterClassName}>
                    <Typography variant="c1">
                      {currentLength.length}/{maxLength}
                    </Typography>
                  </div>
                )}
                {!!icon && iconPosition === 'right' && <div className={iconClassName}>{icon}</div>}
                {isClearable && !!currentLength.length && (
                  <CloseButton onClick={() => resetField(name)} />
                )}
                {iconPosition === 'left' && error && (
                  <div className={`input__errorIcon ${warningClassName}`}>
                    <AlertCircleOutline fontSize="20" />
                  </div>
                )}
              </div>
              {error && <ErrorMessage color={colors.semantic.danger} />}
            </>
          )}
        />
      </div>
      <style jsx>{InputLocalStyles}</style>
    </div>
  )
}

export default CustomInputComponent
