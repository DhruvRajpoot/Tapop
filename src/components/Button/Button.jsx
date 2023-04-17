import React from 'react'
import { ButtonWrapper } from './ButtonStyle'

const Button = (props) => {
  return (
    <ButtonWrapper onClick={props.onClickFunc}>{props.icon?props.icon:null} {props.title}</ButtonWrapper>
  )
}

export default Button;