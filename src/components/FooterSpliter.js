import React from 'react'
import cn from 'classnames'


function FooterSpliter(props) {
  const {
    name,
    left,
    right
  } = props

  console.log(props)

  return (
    <>
      <div className={cn(`${name}`)}>
        <div className={cn(`${name}__left`)}>
          {left}
        </div>
        <div className={cn(`${name}__right`)}>
          {right}
        </div>
      </div>
    </>
  )
}

export default FooterSpliter
