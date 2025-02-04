import React from 'react'
import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'
import Container from '../Container/Container'

function BasicIconButton(props) {
  const { onClick, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps(btnOptions)

  return (
    <button {...button} onClick={onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

function BasicButton() {
  return (
    <Container>
      <BasicIconButton arialLabel="Action icon button" />
      <BasicIconButton ariaLabel="Default icon button" sentiment="default" />
    </Container>
  )
}

export default BasicButton
