import React from 'react'
import cn from 'classnames'


function Container(props) {
  const {
    name,
    space,
    children
  } = props

  return (
    <>
      <div className={cn(`${name}`)}>
        <div className={cn(`${name}__body`)}>
          <div className={cn(`${name}__body--${space}`)}>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default Container
