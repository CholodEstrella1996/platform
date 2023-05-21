import { FieldError } from 'react-hook-form'

import { Theme } from 'components/atoms/ThemeProvider'

const getInputStyles = (
  multiline: boolean,
  isClearable: boolean,
  widthAndPadding: string,
  disabled: boolean,
  colors: Theme['colors'],
) => ({
  '--form-control-border-radius': multiline ? '2rem' : '6rem',
  '--form-control-align-items': multiline ? 'flex-end' : 'center',
  '--input-default-width-and-padding':
    widthAndPadding === 'right' || isClearable ? '1.5rem' : '2.5rem',
  '--input-large-width-and-padding': widthAndPadding === 'right' ? '1.5rem' : '3.5rem',
  '--counter-text-color': disabled ? colors.neutrals[200] : colors.neutrals[300],
  '--icon-color': disabled ? colors.neutrals[200] : colors.primary[500],
  '--label-and-caption-padding': '1.5rem',
  '--input-hover': !disabled ? colors.primary[500] : colors.neutrals[300],
  '--input-cursor-hover': !disabled ? 'unset' : 'not-allowed',
  '--input-color': !disabled ? colors.neutrals[700] : colors.neutrals[200],
})

const getBorderStyle = (colors: Theme['colors'], error?: FieldError) => ({
  '--form-control-border-color': error ? colors.semantic.danger : colors.neutrals[300],
})

export { getInputStyles, getBorderStyle }
