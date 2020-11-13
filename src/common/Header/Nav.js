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
      label: 'Home Page',
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
      label: 'Blog',
      exact: true,
      to: '/blog'
    },
    {
      id: '4',
      label: 'Contact Us',
      exact: true,
      to: '/contact'
    },
    {
      id: '5',
      label: 'Login',
      exact: true,
      to: '/login'
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
