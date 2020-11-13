import React from 'react'
import Slide from '../../common/Slide/Slide'
import PageContent from '../../common/PageContent/PageContent'
import DummyData from '../DummyData'
import SlideTitle from '../../common/SlideTitle/SlideTitle'

const Contact = (props) => {
  return (
    <>
      <Slide page_title = "Contact"/>
      <SlideTitle page_title="Contact" />
      <PageContent content ={DummyData.contact_data}/>
    </>
  )
}

export default Contact