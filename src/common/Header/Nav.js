import React from 'react'
import cn from 'classnames'
import { Logo, Menu } from './index'
import { SplitPanel } from '../../components'


function Nav(props) {
  const {
    name,
    classNameLogo,
    classNameMenu
  } = props

  const menuItemLists = [
    {
      id: '1',
      label: 'Dashboard',
      exact: true,
      to: '/dashboard' && '/'
    },
    {
      id: '2',
      label: 'About',
      exact: true,
      to: '/about'
    },
    {
      id: '3',
      label: 'Shop',
      exact: true,
      to: '/shop'
    }
  ]

  return (
    <nav className={cn(`${name}`)}>
      <SplitPanel
        name='split'
        left={
          <Logo className={cn(classNameLogo)} logo='logo' />
        }
        right={
          <Menu className={cn(classNameMenu)} menu='menu' menuItemLists={menuItemLists} />
        }
      />
    </nav>
  )
}

export default Nav
