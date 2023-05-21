import { useIntl } from 'react-intl'

import Select from 'components/atoms/Select'
import { OptionProps } from 'components/atoms/Select/select.models'

import { FilterStyles } from './filters.style'
import messages from '../../detailInstitution.messages'

type Props = {
  subscriptionList?: OptionProps[]
  dashboardList?: OptionProps[]
}

export const FiltersComponent = ({ subscriptionList, dashboardList }: Props) => {
  const intl = useIntl()

  const subscriptionSelect = {
    name: 'subscriptionId',
    label: intl.formatMessage(messages.filters.labels.subscription),
    placeholder: intl.formatMessage(messages.filters.placeholders.selects),
    isClearable: true,
    size: 'small',
    options: subscriptionList ?? [],
    visible: true,
  }

  const dashboardSelect = {
    name: 'dashboard',
    label: intl.formatMessage(messages.filters.labels.dashboard),
    placeholder: intl.formatMessage(messages.filters.placeholders.selects),
    isClearable: true,
    size: 'small',
    options: dashboardList ?? [],
    visible: true,
  }

  return (
    <>
      <div className="filters__container">
        <Select {...subscriptionSelect} />
        <Select {...dashboardSelect} />
      </div>
      <style jsx>{FilterStyles}</style>
    </>
  )
}
