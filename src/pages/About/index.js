import React from 'react'
import Slide from '../../common/Slide/Slide'
import PageContent from '../../common/PageContent/PageContent'
import DummyData from '../DummyData'
import SlideTitle from '../../common/SlideTitle/SlideTitle'

const About = (props) => {
  return (
    <>
      <Slide page_title = "About Us"/>
      <SlideTitle page_title="About Us" />
      <PageContent content ={DummyData.about_data}/>
    </>
  )
}

export default About
