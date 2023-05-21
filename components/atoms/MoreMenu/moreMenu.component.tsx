import { MouseEvent, useState } from 'react'

import { MoreVertical } from '@easy-eva-icons/react'
import { IconButton, Menu } from '@mui/material'

import { theme } from 'components/atoms/ThemeProvider'

import { MoreMenuProps } from './moreMenu.model'
import { MoreMenuGlobalStyles } from './moreMenu.styles'

const MoreMenuComponent = ({ children }: MoreMenuProps) => {
  const { colors } = theme
  const [anchorElement, setAnchorEl] = useState<null | HTMLElement>(null)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertical color={colors.primary[500]} />
      </IconButton>
      <Menu
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorEl={anchorElement}
        open={!!anchorElement}
        onClose={handleClose}
        onBlur={handleClose}
        elevation={0}
        className="menu__buttons">
        {children}
      </Menu>
      <style jsx global>
        {MoreMenuGlobalStyles}
      </style>
    </>
  )
}

export default MoreMenuComponent
