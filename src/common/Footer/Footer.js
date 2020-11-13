import React from 'react'
import cn from 'classnames'
import { FooterSpliter } from '../../components'
import {ContactForm, FooterLeft, Copyright} from "./index"
import Container from '../../components/Container'


function Footer(props) {
  const {
    className
  } = props

  const currentDate  = new Date();
  const getYear = currentDate.getFullYear();

  return (
     <>
      <Container name='container' space='space'>
        <FooterSpliter
              name="footerSplit"
              left = {
                <FooterLeft class_name="left"/>
              }
              right = {
                <ContactForm class_name="right"/>
              }
          />
        </Container>

      <Copyright year={getYear}/>
     </>

  )
}

export default Footer
