import React from "react";
import { Container } from './styled'

export default function Title(props) {

    return (
        <Container 
            backcolor={props.backcolor}
            color={props.color}
        >
            {props.text}
        </Container>
    )
}