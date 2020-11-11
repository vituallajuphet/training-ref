import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import BtnDropdown from '../../components/BtnDropdown'


function PageHeader(props) {
  const {
    name,
    title
  } = props

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768)

  const updateMedia = () => {
    setIsDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener('resize', updateMedia)
    return () => window.removeEventListener('resize', updateMedia)
  })

  return (
    <div className={cn(`${name}`)}>
      <h1 className={cn(`${name}__title`)}>{title}</h1>
      <div className={cn(`${name}__menu`)}>

        {isDesktop
          ? (
            <button className='btn btn-primary ml05rem'>
              Report
            </button>
          ) : null
        }

        <BtnDropdown name='btnDropdown'>
          {isDesktop
            ? ('Action')
            : (<span className='dot dots' />)
          }
        </BtnDropdown>

      </div>
    </div>
  )
}

export default PageHeader
