import { ChangeEvent, KeyboardEvent } from 'react'

import { RefCallBack } from 'react-hook-form'

import { NO_SPECIAL_CHARACTERS_REGEX } from 'constants/regex'

import { InputProps } from '../customInput.model'
import { InputLocalStyles } from '../customInput.styles'

type Props = {
  innerRef: RefCallBack
  onChange: (...event: unknown[]) => void
  value: string | number | readonly string[]
}

export const Input = (props: InputProps & Props) => {
  const {
    multiline = false,
    name,
    className,
    cols,
    rows,
    placeholder,
    disabled,
    maxLength,
    maxNumber,
    type,
    innerRef,
    onChange,
    value,
    pattern,
  } = props

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (pattern) return onChange(event.target.value.replace(NO_SPECIAL_CHARACTERS_REGEX, ''))
    return onChange(maxLength ? event.target.value.slice(0, maxLength) : event.target.value)
  }

  const handleRangeNumber = (event: KeyboardEvent<HTMLInputElement>) => {
    const currentValue = Number(event.target.value)
    if (maxNumber && (currentValue > maxNumber || currentValue < 1)) return onChange('')
    return onChange(currentValue)
  }

  return (
    <>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          ref={innerRef}
          onChange={(event) => handleChange(event)}
          value={value}
          className={className}
          cols={cols}
          rows={rows}
          placeholder={placeholder}
          disabled={disabled}
          maxLength={maxLength}
        />
      ) : (
        <input
          id={name}
          name={name}
          ref={innerRef}
          onChange={(event) => handleChange(event)}
          value={value}
          placeholder={placeholder}
          type={type}
          disabled={disabled}
          className={className}
          maxLength={maxLength}
          max={maxNumber}
          {...(maxNumber && {
            onKeyUp: (event: KeyboardEvent<HTMLInputElement>) => handleRangeNumber(event),
          })}
        />
      )}

      <style jsx>{InputLocalStyles}</style>
    </>
  )
}
