import React from 'react'
import { NavLink } from 'react-router-dom'


function Menu({ menuItemLists }) {

  const MenuItemsList = ({ menuItemLists }) => (
    <ul className='nav__menu'>
      {menuItemLists.map(menuItemList => (
        <li className='nav__menu--item' key={menuItemList.id}>
          <NavLink
            className='nav__menu--itemLink'
            activeClassName='active-itemLink'
            {...menuItemList}
          >
            {menuItemList.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <>
      <MenuItemsList menuItemLists={menuItemLists} />
    </>
  )
}

export default Menu
