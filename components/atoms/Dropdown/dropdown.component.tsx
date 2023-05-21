import { useState } from 'react'

import { ChevronDown } from '@easy-eva-icons/react'

import { theme } from 'components/atoms/ThemeProvider'
import { Typography } from 'components/atoms/Typography'

import { DropdownProps } from './dropdown.model'
import { DropdownStyles } from './dropdown.styles'

const { colors } = theme

export const DropdownComponent = ({ title, children }: DropdownProps) => {
  const [openContent, setOpenContent] = useState(false)
  const handleOpenDropdown = () => {
    setOpenContent((prevState) => !prevState)
  }

  return (
    <>
      <div className="dropdown">
        <div className="dropdown__header" onClick={handleOpenDropdown} aria-hidden="true">
          <Typography variant="s2" color={colors.neutrals[500]}>
            {title}
          </Typography>
          <div style={{ flex: 1 }} />
          <div className={`dropdown__icon ${openContent ? 'dropdown__icon--rotate' : ''}`}>
            <ChevronDown fontSize={24} />
          </div>
        </div>
        {openContent && children && <div className="dropdown__content">{children}</div>}
      </div>
      <style jsx>{DropdownStyles}</style>
    </>
  )
}
