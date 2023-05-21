import { Search } from '@easy-eva-icons/react'

import Input from 'components/atoms/CustomInput'
import Select from 'components/atoms/Select'
import { theme } from 'components/atoms/ThemeProvider'
import { useMediaQuery } from 'hooks/use-media-query'

import { FilterProps } from './filter.model'
import { FilterGlobalStyles, FilterStyles } from './filter.style'

const { mediaQueries } = theme

const FilterComponent = (props: FilterProps) => {
  const isTablet = useMediaQuery(mediaQueries.tablet)
  const {
    input = {
      iconPosition: 'left',
      label: '',
      name: '',
      placeholder: '',
      size: 'small',
      isClearable: false,
      icon: <Search />,
      visible: false,
    },
    select = {
      label: '',
      name: '',
      placeholder: '',
      options: [],
      isClearable: false,
      visible: false,
    },
    showSelectInMobile = false,
    disabledSubscription = false,
  } = props

  return (
    <>
      <div className="card__filter">
        {input.visible && (
          <div className="input__filter">
            <Input
              name={input?.name}
              size={input.size}
              icon={input.icon}
              iconPosition={input.iconPosition}
              className="input__filter"
              isClearable={input.isClearable}
              placeholder={input.placeholder}
              label={input.label}
            />
          </div>
        )}
        {select.visible && select.options && (showSelectInMobile || isTablet) && (
          <div className="input__filter">
            <Select
              isClearable={select.isClearable}
              name={select.name}
              label={select.label}
              placeholder={select.placeholder}
              className="input__filter"
              options={select.options}
              disabled={disabledSubscription}
            />
          </div>
        )}
      </div>
      <style jsx>{FilterStyles}</style>
      <style jsx global>
        {FilterGlobalStyles}
      </style>
    </>
  )
}

export default FilterComponent
