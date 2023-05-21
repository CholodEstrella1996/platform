import { useIntl } from 'react-intl'

import Select from 'components/atoms/Select'
import { OptionProps, SelectProps } from 'components/atoms/Select/select.models'

import messages from '../../laboratories.messages'

type Props = {
  listAreas: OptionProps[]
  listTopic: OptionProps[]
  listSubscription: OptionProps[]
  topicReference: SelectProps['reference']
  areaReference: SelectProps['reference']
  hasSubscriptionPermission: boolean
}

export const FiltersComponent = ({
  listAreas,
  listSubscription,
  listTopic,
  topicReference,
  areaReference,
  hasSubscriptionPermission,
}: Props) => {
  const intl = useIntl()

  const isSubscriptionEmpty = !listSubscription.length
  const canSeeSubscription = hasSubscriptionPermission && !isSubscriptionEmpty

  const selectArea = {
    name: 'area',
    label: intl.formatMessage(messages.filters.labels.selectArea),
    placeholder: intl.formatMessage(messages.filters.placeholder),
    isClearable: true,
    size: 'small',
    options: listAreas,
    fullWidth: true,
    reference: areaReference,
  }

  const selectTopic = {
    name: 'topic',
    label: intl.formatMessage(messages.filters.labels.selectTopic),
    placeholder: intl.formatMessage(messages.filters.placeholder),
    isClearable: true,
    size: 'small',
    options: listTopic,
    fullWidth: true,
    reference: topicReference,
  }

  const selectSubscription = {
    name: 'subscription',
    label: intl.formatMessage(messages.filters.labels.selectSubscription),
    placeholder: intl.formatMessage(messages.filters.placeholder),
    isClearable: true,
    size: 'small',
    fullWidth: true,
    options: listSubscription,
  }

  return (
    <>
      {canSeeSubscription && <Select className="filter__select" {...selectSubscription} />}
      <Select className="filter__select" {...selectArea} />
      <Select className="filter__select" {...selectTopic} />
    </>
  )
}
