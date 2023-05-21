import React, { ChangeEvent, useEffect, useState } from 'react'

import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { useNotification } from 'hooks/notification'

import FileList from './components/FileList'
import { messages } from './inputFile.messages'
import { InputFileProps } from './inputFile.model'
import { InputFileStyles, InputFileGlobalStyles } from './inputFile.styles'

const convertToMegabyte = 1000000

const InputFileComponent = (props: InputFileProps) => {
  const {
    name,
    accept,
    size = 'small',
    avatarUrl,
    isEditable,
    isRequired = false,
    fileSize,
  } = props
  const buttonStyle = `inputFile__button--${size}`
  const { colors } = theme
  const { onError } = useNotification()
  const intl = useIntl()
  const [selectedFile, setSelectedFile] = useState<{ name?: string; iconUrl?: string } | null>(null)
  const {
    setValue,
    formState: { errors },
    register,
  } = useFormContext()

  const uploadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const targetFiles = event.currentTarget?.files
    if (!targetFiles || !targetFiles[0]?.size) return
    if (fileSize && targetFiles[0]?.size > fileSize * convertToMegabyte) {
      onError(intl.formatMessage(messages.error.size, { size: fileSize }))
      return
    }
    const iconUrl = URL.createObjectURL(targetFiles[0])
    const fileToUpload = targetFiles[0]
    setSelectedFile({ name: fileToUpload.name, iconUrl })
    setValue(name, fileToUpload)
    setValue('image', iconUrl)
  }

  useEffect(() => {
    if (avatarUrl) {
      setSelectedFile({ name: avatarUrl, iconUrl: avatarUrl })
      setValue(name, undefined)
    }
  }, [avatarUrl])

  return (
    <>
      <div
        className="inputFile__container"
        style={{ '--text-color': !isEditable ? colors.neutrals[200] : colors.neutrals[800] }}>
        <FileList
          file={selectedFile}
          removeFile={setSelectedFile}
          isEditable={isEditable}
          setValue={setValue}
        />
        <div className="inputFile__button">
          {!selectedFile?.name && (
            <>
              <label htmlFor={name}>
                <Typography
                  component="span"
                  variant={size === 'large' ? 'h6' : 's2'}
                  weight={size === 'large' ? 'bold' : 'semibold'}
                  className={buttonStyle}>
                  {intl.formatMessage(messages.buttonText)}
                </Typography>
              </label>
              <input
                id={name}
                type="file"
                {...register(name, { required: isRequired })}
                onChange={(event) => {
                  void uploadFile(event)
                }}
                accept={accept}
              />
            </>
          )}

          {errors?.[name] && !selectedFile && (
            <Typography
              color={colors.semantic.danger}
              variant="c1"
              className="inputFile__button--errors">
              {intl.formatMessage(messages.error.text)}
            </Typography>
          )}
        </div>
      </div>
      <style jsx>{InputFileStyles}</style>
      <style jsx global>
        {InputFileGlobalStyles}
      </style>
    </>
  )
}

export default InputFileComponent
