type TreeLabsProps = {
  nodes: TreeNode[]
  checkSelection: CheckSelection
}

type CheckSelection = {
  fields: string[]
  updateChecked: (values: string[]) => void
}

type GenericNode = {
  id?: number
  name?: string
  key?: string
  iconUrl?: string
  type?: ApplicationType
  contents?: GenericNode[]
}

type ApplicationType = {
  id: number
  name: string
}

type TreeNode = GenericNode & {
  value: string
  label: string
  icon?: React.ReactNode
  children?: TreeNode[]
}

export type { TreeLabsProps, GenericNode, TreeNode }
