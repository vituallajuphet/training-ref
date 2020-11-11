import React from 'react'
import cn from 'classnames'
import { Nav } from './index'


function Header(props) {
  const {
    className
  } = props

  return (
    <Nav className={cn(className)} name='nav' />
  )
}

export default Header
