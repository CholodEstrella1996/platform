import React from 'react'

import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { AddUserStyle } from './addUserModal.styles'
import messages from '../../myInstitution.messages'
import { AddUserForm, AddUserProps } from '../../myInstitution.model'

const { colors } = theme

export const AddUser = ({ id, name, isStudent, groupList }: AddUserProps) => {
  const intl = useIntl()
  const { setValue } = useFormContext<AddUserForm>()

  setValue('memberId', id)
  setValue('roleName', isStudent ? 'organization-student' : 'organization-teacher')

  return (
    <>
      <div className="addUser__container">
        <Typography variant="s1" color={colors.primary[500]}>
          {intl.formatMessage(messages.addUserModal.title)}
        </Typography>
        <div className="userData__container">
          <div className="userData__sections">
            <Typography variant="label" color={colors.neutrals[400]} weight="bold">
              {intl.formatMessage(messages.addUserModal.user)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[400]}>
              {name}
            </Typography>
          </div>
          <div className="userData__sections">
            <Typography variant="label" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.addUserModal.role)}
            </Typography>
            <Typography variant="s2" color={colors.neutrals[400]}>
              {intl.formatMessage(messages.addUserModal.roleName, { isStudent })}
            </Typography>
          </div>
        </div>
        <Select
          name="classroomIds"
          label={intl.formatMessage(messages.addUserModal.label)}
          placeholder={intl.formatMessage(messages.addUserModal.placeholder)}
          options={groupList}
          multiple
          required
        />
      </div>

      <style jsx>{AddUserStyle}</style>
    </>
  )
}
