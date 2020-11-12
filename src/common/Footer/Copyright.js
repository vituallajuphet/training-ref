import React from 'react'
import cn from 'classnames'
import { FooterSpliter } from '../../components'
import {ContactForm, FooterLeft} from "./index"

function Copyright(props) {
  const {
    year
  } = props

  return (
     <div className="copyright">
         <span className="copyright__span">Copyright {year}, DNA Micro Software Inc.</span>
     </div>
      
  )
}

export default Copyright
