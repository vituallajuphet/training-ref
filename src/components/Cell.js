import React from 'react'
import cn from 'classnames'


function Cell(props) {
  const {
    cell,
    size,
    children
  } = props

  return (
    <>
      <div className={cn(`${cell} ${cell}__${size}`)}>
        {children}
      </div>
    </>
  )
}

export default Cell
