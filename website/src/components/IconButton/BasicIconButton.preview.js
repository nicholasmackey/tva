import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function BasicIconButtonPreview() {
  return (
    <CodeBlock>{`const { button, iconOptions } = getIconButtonProps({
  ariaLabel: 'Toggle menu',
  //highlight-next-line
  sentiment: 'action'
})

<button {...button}>
  <MenuIcon {...getIconProps(iconOptions)} />
</button>`}</CodeBlock>
  )
}

export function BasicIconButtonFullPreview() {
  return (
    <CodeBlock>{`import { getIconButtonProps, getIconProps } from '@pluralsight/headless-styles'
import { MenuIcon } from '@pluralsight/icons'

export default function MenuButton(props) {
  const { onClick, ...btnOptions } = props
  const { button, iconOptions } = getIconButtonProps(btnOptions)

  return (
    <button {...button} onClick={onClick}>
      <MenuIcon {...getIconProps(iconOptions)} />
    </button>
  )
}`}</CodeBlock>
  )
}
