import { useEffect } from 'react'

import { useFormContext, useWatch } from 'react-hook-form'

import FilterComponent from './filter.component'
import { FilterProps } from './filter.model'

const Filter = (props: FilterProps) => {
  const { onSearch } = props
  const {
    control,
    formState: { isDirty },
  } = useFormContext()
  const searchQuery = useWatch({ control, name: 'search' })
  const statusQuery = useWatch({ control, name: 'state' })
  const subscriptionQuery = useWatch({ control, name: 'subscription' })

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      if (isDirty) void onSearch()
    }, 1000)
    return () => clearTimeout(delaySearch)
  }, [searchQuery, statusQuery, subscriptionQuery])
  return <FilterComponent {...props} />
}

export default Filter
