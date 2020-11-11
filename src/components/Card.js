import React from 'react'
import cn from 'classnames'


function Card(props) {
  const {
    card,
    children
  } = props

  return (
    <>
      <div className={cn(`${card}`)}>
        {children}
      </div>
    </>
  )
}

export default Card
