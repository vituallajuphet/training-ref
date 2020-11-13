import React from 'react'
import Slide from '../../common/Slide/Slide'
import PageContent from '../../common/PageContent/PageContent'
import DummyData from '../DummyData'
import SlideTitle from '../../common/SlideTitle/SlideTitle'

const About = (props) => {
  return (
    <>
      <Slide page_title = "Blog"/>
      <SlideTitle page_title="Blog" />
      <PageContent content ={DummyData.blog_data}/>
    </>
  )
}

export default About
