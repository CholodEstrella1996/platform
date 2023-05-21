import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

import { theme } from 'components/atoms/ThemeProvider'
import { GenericNode, TreeNode } from 'components/atoms/TreeLabs/treeLabs.model'

const { colors } = theme
const iconColor = colors.primary[500]

const icons = {
  check: <CheckBoxIcon sx={{ color: iconColor }} />,
  uncheck: <CheckBoxOutlineBlankIcon sx={{ color: iconColor }} />,
  halfCheck: <IndeterminateCheckBoxIcon sx={{ color: iconColor }} />,
  expandClose: <KeyboardArrowRightIcon sx={{ color: iconColor }} fontSize="small" />,
  expandOpen: <KeyboardArrowDownIcon sx={{ color: iconColor }} fontSize="small" />,
}

const formatResponse = (contents: GenericNode[]): TreeNode[] => {
  const nodes = contents.map((node) => {
    const children = formatResponse(node.contents ?? [])
    return () => ({
      value: String(node.id),
      label: String(node.name),
      ...(node.contents && { children }),
    })
  })

  const formatNodes = nodes.map((getNode) => getNode())

  return formatNodes
}

const flatAndConcat = (node: TreeNode[]): TreeNode[] =>
  node.reduce((flattened: TreeNode[], { children }) => {
    if (!children) return []
    return flattened
      .concat(children)
      .concat(children ? flatAndConcat(children) : [])
      .flat()
  }, [])

export { icons, formatResponse, flatAndConcat }
