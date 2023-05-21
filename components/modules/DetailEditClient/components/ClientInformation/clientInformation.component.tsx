import { PersonOutline, PhoneOutline, EmailOutline, PersonDoneOutline } from '@easy-eva-icons/react'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import DatePicker from 'components/atoms/DatePicker'
import { InputFile } from 'components/atoms/InputFile'
import Select from 'components/atoms/Select/'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import messages from '../../detailEditClient.messages'
import { ClientProps } from '../../detailEditClient.model'
import { DetailEditUserLocalStyles } from '../../detailEditClient.styles'

type Props = Pick<ClientProps, 'isEditable' | 'isLoading' | 'options'> & {
  avatarUrl?: string | File
}

const { colors } = theme

export const ClientInformation = ({ isEditable, isLoading, options, avatarUrl }: Props) => {
  const intl = useIntl()
  return (
    <>
      <div className="user__information">
        <div className="usernames">
          <Input
            name="firstName"
            label={intl.formatMessage(messages.inputData.firstName.label)}
            placeholder={intl.formatMessage(messages.inputData.firstName.placeholder)}
            size="medium"
            icon={<PersonOutline fontSize={20} />}
            iconPosition="left"
            disabled={!isEditable || isLoading}
            required
            pattern
            maxLength={50}
          />
          <Input
            name="surname"
            label={intl.formatMessage(messages.inputData.lastName.label)}
            placeholder={intl.formatMessage(messages.inputData.lastName.placeholder)}
            size="medium"
            icon={<PersonOutline fontSize={20} />}
            iconPosition="left"
            disabled={!isEditable || isLoading}
            required
            pattern
            maxLength={50}
          />
        </div>

        <Input
          name="phoneNumber"
          label={intl.formatMessage(messages.inputData.phone.label)}
          placeholder={intl.formatMessage(messages.inputData.phone.placeholder)}
          size="medium"
          icon={<PhoneOutline fontSize={20} />}
          iconPosition="left"
          disabled={!isEditable || isLoading}
          type="number"
          maxLength={25}
          required
        />
        <Input
          name="email"
          label={intl.formatMessage(messages.inputData.email.label)}
          placeholder={intl.formatMessage(messages.inputData.email.placeholder)}
          size="medium"
          icon={<EmailOutline fontSize={20} />}
          iconPosition="left"
          required
          disabled
        />
        <div className="id__data">
          <Select
            isSearchable={false}
            name="identityType"
            size="medium"
            options={options?.identityType ?? []}
            disabled={!isEditable || isLoading}
            label={intl.formatMessage(messages.inputData.idType.label)}
            placeholder={intl.formatMessage(messages.inputData.idType.placeholder)}
          />
          <Input
            maxLength={25}
            className="input__identityNumber"
            name="identityNumber"
            label={intl.formatMessage(messages.inputData.idNum.label)}
            size="medium"
            icon={<PersonDoneOutline fontSize={20} />}
            iconPosition="left"
            disabled={!isEditable || isLoading}
            type="text"
          />
        </div>
        <div className="extra__data">
          <DatePicker
            name="birthDate"
            label={intl.formatMessage(messages.inputData.date.label)}
            placeholder={intl.formatMessage(messages.inputData.date.placeholder)}
            disabled={!isEditable || isLoading}
            maxDate
          />
          <Select
            isSearchable={false}
            name="gender"
            size="medium"
            options={options?.gender ?? []}
            disabled={!isEditable || isLoading}
            label={intl.formatMessage(messages.inputData.gender.label)}
            placeholder={intl.formatMessage(messages.inputData.gender.placeholder)}
          />
          <Select
            isSearchable={false}
            name="educationalLevel"
            size="medium"
            options={options?.educationalLevel ?? []}
            disabled={!isEditable || isLoading}
            label={intl.formatMessage(messages.inputData.educationLevel.label)}
            placeholder={intl.formatMessage(messages.inputData.educationLevel.placeholder)}
          />
        </div>
        {(avatarUrl || isEditable) && (
          <>
            <Typography
              variant="label"
              weight="bold"
              color={!isEditable || isLoading ? colors.neutrals[200] : colors.neutrals[400]}
              className="user__avatar--label">
              {intl.formatMessage(messages.inputData.profilePic.label)}
            </Typography>
            <InputFile
              fileSize={3}
              size="medium"
              avatarUrl={(avatarUrl as string) ?? ''}
              isEditable={isEditable && !isLoading}
              name="avatarUrl"
              accept="image/png, image/jpeg, image/jpg"
            />
          </>
        )}
      </div>
      <style jsx>{DetailEditUserLocalStyles}</style>
    </>
  )
}
