import React from 'react'
import cn from 'classnames'
import { FooterSpliter } from '../../components'
import {ContactForm, FooterLeft} from "./index"

function CopyRight(props) {
  const {
    className
  } = props

  return (
      <FooterSpliter
          name="footerSplit"
          left = {
            <FooterLeft class_name="left"/>
          }
          right = {
            <ContactForm class_name="right"/>
          }
      />
      
  )
}

export default CopyRight
