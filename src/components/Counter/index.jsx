import {useState, useEffect} from "react";
import { Container, Button, Display } from './styled'

export default function Counter() {

    const [value, setValue] = useState(0)
    const [clicks, setClicks] = useState(0)

    function changeValue(val) {
        setValue(value + val)
        setClicks(clicks + 1)
    }

    useEffect(() => {
        document.title = `Clicou: ${clicks} vez(es)`;
    },[])

    return (
        <Container>
            <Button 
                backcolor="red"
                onClick={() => changeValue(-1)}
            >-</Button>
            <Display>{value}</Display>
            <Button 
                backcolor="green"
                onClick={() => changeValue(1)}
            >+</Button>
        </Container>
    )
}