import Image from 'next/image'
import { useIntl } from 'react-intl'

import { Typography } from 'components/atoms/Typography'

import { messages } from '../customInput.messages'
import { LabelProps, CloseButtonProps, ErrorMessageProps } from '../customInput.model'
import { InputLocalStyles } from '../customInput.styles'

export const Label = ({ name, color, label }: LabelProps) => (
  <>
    <label htmlFor={name}>
      <Typography variant="label" color={color} className="label--style">
        {label}
      </Typography>
    </label>
    <style jsx>{InputLocalStyles}</style>
  </>
)

export const CloseButton = ({ onClick }: CloseButtonProps) => (
  <>
    <button type="button" className="clear__icon" onClick={onClick}>
      <Image src="/CloseIcon.svg" alt="close" width="16px" height="16px" layout="responsive" />
    </button>
    <style jsx>{InputLocalStyles}</style>
  </>
)

export const ErrorMessage = ({ color }: ErrorMessageProps) => {
  const intl = useIntl()
  return (
    <>
      <div className="caption--style">
        <Typography variant="c1" color={color}>
          {intl.formatMessage(messages.validations.required.error)}
        </Typography>
      </div>
      <style jsx>{InputLocalStyles}</style>
    </>
  )
}
