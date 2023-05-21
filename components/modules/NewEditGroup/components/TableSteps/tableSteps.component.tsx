import React from 'react'

import { Search } from '@easy-eva-icons/react'
import { useIntl } from 'react-intl'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'
import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'
import { InputProps } from 'components/molecules/Filter/filter.model'
import { useMediaQuery } from 'hooks/use-media-query'
import { Status } from 'services/models/client.model'
import { MemberResponse } from 'services/models/member.model'
import { formatData, optionsForSelect } from 'utils/helpers/edit-content'

import messages from '../../newEditGroup.messages'
import { NewEditGroupGlobalStyles, NewEditGroupLocalStyles } from '../../newEditGroup.styles'
import CheckboxTable from '../CheckboxTable'

type TableDataProps = {
  data: MemberResponse
  listStatus: Status[]
  stepNumber: number
  stepProfile: string
  onPageChange: (role: string, page: number) => void
  isLoading: boolean
  subscriptionOptions?: OptionProps[]
  disabledSubscription?: boolean
}

const { colors, mediaQueries } = theme

const TableStepsComponent = ({
  data,
  listStatus,
  stepNumber,
  stepProfile,
  onPageChange,
  isLoading,
  subscriptionOptions,
  disabledSubscription,
}: TableDataProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const intl = useIntl()
  const msg = {
    notEmail: intl.formatMessage(messages.emailNotAvailable),
    registeredUser: intl.formatMessage(messages.registeredUser),
    guestUser: intl.formatMessage(messages.guestUser),
  }

  const searchInput: InputProps = {
    name: 'search',
    label: intl.formatMessage(messages.filters.search.label),
    placeholder: intl.formatMessage(messages.filters.search.label, { isTablet }),
    iconPosition: 'left',
    size: 'small',
    icon: <Search />,
    visible: true,
    isClearable: true,
  }

  const subscriptionSelect = {
    name: 'subscriptionFilter',
    label: intl.formatMessage(messages.filters.selects.label, { isStatus: false }),
    placeholder: intl.formatMessage(messages.filters.selects.placeholder, { isStatus: false }),
    isClearable: true,
    size: 'small',
    iconPosition: 'left',
    options: subscriptionOptions ?? [],
    visible: true,
    disabled: disabledSubscription,
  }

  const stateSelect = {
    name: 'state',
    label: intl.formatMessage(messages.filters.selects.label, { isStatus: true }),
    placeholder: intl.formatMessage(messages.filters.selects.label, { isStatus: true }),
    isClearable: true,
    size: 'small',
    options: optionsForSelect(listStatus),
    visible: true,
  }

  const rows = formatData(data, msg.notEmail, msg.guestUser, msg.registeredUser)

  return (
    <>
      <section className="tableSteps__container">
        <div className="tableSteps--header">
          <Typography variant="h5" weight="bold" color={colors.primary[500]}>
            {stepProfile}
          </Typography>
          {isTablet && (
            <Typography variant="s1" color={colors.neutrals[400]}>
              {data.content.length === 1
                ? intl.formatMessage(messages.steps.loaded, {
                    quantity: data.totalElements,
                    p: stepProfile,
                  })
                : intl.formatMessage(messages.steps.loaded, {
                    quantity: data.totalElements,
                    p: stepProfile,
                  })}
            </Typography>
          )}
        </div>
        <div className="tabPanel__card__filter">
          <Input {...searchInput} className="input__filter" />
          <Select {...subscriptionSelect} />
          <Select {...stateSelect} />
        </div>

        <CheckboxTable
          rows={rows}
          pageSize={10}
          totalElements={data.totalElements}
          stepNumber={stepNumber}
          onPageChange={onPageChange}
          isLoading={isLoading}
        />
      </section>

      <style>{NewEditGroupLocalStyles}</style>
      <style jsx global>
        {NewEditGroupGlobalStyles}
      </style>
    </>
  )
}
export default TableStepsComponent
