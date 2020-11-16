import React from 'react'
import Slide from '../../common/Slide/Slide'
import PageContent from '../../common/PageContent/PageContent'
import DummyData from '../DummyData'
import SlideTitle from '../../common/SlideTitle/SlideTitle'
import {Machine} from 'xstate';
import {useMachine} from '@xstate/react';
import stateMachine from '../../store/';
import styled from 'styled-components';


const Button = styled.button`
	color:red;
	font-weight:bold;

	&:hover{
		opacity:0.2;
	}
`;

const Contact = (props) => {

  const [state, send] = useMachine(stateMachine);

  return (
    <>
      <Slide page_title = "Contact"/>
      <SlideTitle page_title="Contact" />
      <PageContent content ={DummyData.contact_data}/>

      <div>
         <Button onClick={ (e) => send('TOGGLE')}>Click me</Button>
         <div>
          <h2>{state.value}</h2>
         </div>
      </div>

    </>
  )
}

export default Contact