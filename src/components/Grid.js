import React from 'react'
import cn from 'classnames'


function Grid(props) {
  const {
    grid,
    children
  } = props

  return (
    <>
      <div className={cn(`${grid}`)}>
        <div className={cn(`${grid}__row`)}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Grid
