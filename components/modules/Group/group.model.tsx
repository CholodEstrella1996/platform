import { OptionProps } from 'components/atoms/Select/select.models'
import { Group } from 'services/models/group.model'

type GroupsProps = {
  listGroups: Group[]
  subscriptionList: OptionProps[]
  viewSubscriptions: boolean
}

type DataFilter = {
  subscriptionId?: number
}

export type { GroupsProps, DataFilter }
