import React from 'react'
import { Container } from './styled'

export default function Footer(props) {
  return (
    <Container style={{ backgroundColor: props.bgColor, color: props.textColor }}>
      {props.text}
    </Container>
  )
}