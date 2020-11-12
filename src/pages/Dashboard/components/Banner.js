import React from 'react'
import Bsection from './Bsection'
import Bheader from "./Bheader"

const Banner = (props) => {
  
    const { data } = props
    const { bannerData } = data

  return (
    <>
        <div>
          <Bheader data={bannerData} />
        </div>
        <div className='banner'>
            
            <Bsection />
        </div>
    </>

  )
}   

export default Banner
