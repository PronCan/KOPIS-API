import React from 'react'
import {Background, LoadingText} from './Styles';
import Spinner from './img/spinner_200px.gif'

const Loading = () => {
  return (
    <Background>
      <LoadingText>로딩중</LoadingText>
      <img src={Spinner} width='5%'></img>
    </Background>
  )
}

export default Loading