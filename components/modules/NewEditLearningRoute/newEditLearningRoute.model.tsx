import { FieldReference, OptionProps, SelectProps } from 'components/atoms/Select/select.models'
import { TreeLabsProps, TreeNode } from 'components/atoms/TreeLabs/treeLabs.model'
import { Status } from 'services/models/client.model'

type NewEditLearningRouteProps = {
  onSubmit: () => Promise<void>
  onEdit: () => Promise<void>
  isEditable: boolean
  title?: string
  groupOptions: OptionProps[]
  subscriptionOptions: OptionProps[]
  labsList: LabList[]
  nodes: TreeNode[]
  addLabs: () => Promise<void>
  isLoading: boolean
  isSaving: boolean
  setLaboratoryInOrder: (labs: LabList[]) => void
  reference: SelectProps['reference']
}

type TableData = {
  id: number
  name: string
  email: string
  status: Status
  avatar?: string | null
}

type StepOneProps = {
  name?: string
  description?: string
  groupOptions: OptionProps[]
  subscriptionOptions: OptionProps[]
  isLoading: boolean
  reference: SelectProps['reference']
  isEditable: boolean
}

type StepTwoProps = {
  laboratoryList: LabList[]
  onEdit: () => Promise<void>
  nodes: TreeNode[]
  addLabs: () => Promise<void>
  isLoading: boolean
  setLaboratoryInOrder: (labs: LabList[]) => void
}

type LabList = {
  id: number
  text: string
}

type FormProps = {
  name: string
  description: string
  fields: string[]
  group: string
  search: string
  subscription: number
}

type TreeWithFilterProps = Pick<TreeLabsProps, 'nodes'> & {
  onSearch: () => Promise<void>
  isLoading: boolean
}

type SelectReference = FieldReference

export type {
  NewEditLearningRouteProps,
  TableData,
  StepOneProps,
  StepTwoProps,
  LabList,
  FormProps,
  TreeWithFilterProps,
  SelectReference,
}
