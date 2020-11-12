import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'


function Logo(props) {
  const {
    logo
  } = props

  return (
    <div className={cn(`nav__${logo}`)}>
      <h3>
        <Link to={'/dashboard' && '/'}>
          Logo Here
        </Link>
        &nbsp;
      </h3>
    </div>
  )
}

export default Logo
