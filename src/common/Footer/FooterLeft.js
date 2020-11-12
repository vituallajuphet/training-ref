import React from 'react'
import cn from 'classnames'

function FooterLeft(props) {
  const {
    class_name
  } = props

  return (
      <div className={cn(`footer__${class_name}`)}>
        <h2>Test only</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente veniam excepturi atque. Perferendis cum, officiis necessitatibus reprehenderit possimus porro sunt debitis architecto enim magnam omnis laborum voluptatem repudiandae accusamus placeat!</p>
      </div>
  )
}

export default FooterLeft
