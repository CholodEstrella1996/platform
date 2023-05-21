import { Search } from '@easy-eva-icons/react'
import { useFormContext } from 'react-hook-form'
import { useIntl } from 'react-intl'

import Dialog from 'components/atoms/Dialog'
import Spinner from 'components/atoms/Spinner'
import TreeLabs from 'components/atoms/TreeLabs'
import Filter from 'components/molecules/Filter'
import { InputProps } from 'components/molecules/Filter/filter.model'

import { globalStyles, localStyles } from './treeWithFilter.styles'
import messages from '../../newEditLearningRoute.messages'
import { TreeWithFilterProps } from '../../newEditLearningRoute.model'

const TreeWithFilter = ({ nodes, onSearch, isLoading }: TreeWithFilterProps) => {
  const intl = useIntl()
  const { setValue, watch } = useFormContext()
  const checkSelection = {
    fields: watch('fields'),
    updateChecked: (fields: string[]) => setValue('fields', fields),
  }

  const dataInput: InputProps = {
    name: 'search',
    label: '',
    placeholder: intl.formatMessage(messages.steps.stepTwo.formModal.placeholder),
    isClearable: true,
    iconPosition: 'left',
    size: 'small',
    icon: <Search />,
    visible: true,
  }
  return (
    <>
      {isLoading && <Spinner />}
      <div className="filters__container">
        <Filter onSearch={onSearch} input={dataInput} />
      </div>
      <div className="treeLabs__container">
        {!nodes.length ? (
          <Dialog message={intl.formatMessage(messages.steps.stepTwo.empty.searchResult)} />
        ) : (
          <TreeLabs nodes={nodes} checkSelection={checkSelection} />
        )}
      </div>

      <style jsx>{localStyles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}

export default TreeWithFilter
