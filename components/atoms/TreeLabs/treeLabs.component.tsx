import { useState } from 'react'

import CheckboxTree from 'react-checkbox-tree'

import { icons } from 'utils/helpers/treeLabs'

import { TreeLabsProps } from './treeLabs.model'
import { TreeLabsGlobalStyles } from './treeLabs.styles'

const TreeLabs = ({ nodes, checkSelection }: TreeLabsProps) => {
  const { fields, updateChecked } = checkSelection
  const [expand, setExpand] = useState<string[]>([])

  if (!nodes) return null

  return (
    <>
      <CheckboxTree
        nodes={nodes}
        checked={fields}
        expanded={expand}
        onCheck={(selected) => void updateChecked(selected)}
        onExpand={(expanded) => setExpand(expanded)}
        icons={icons}
      />
      <style jsx global>
        {TreeLabsGlobalStyles}
      </style>
    </>
  )
}
export default TreeLabs
