import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100px;
    margin-top: 10px;
    box-sizing: border-box;
`

export const Button = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    width: 90px;
    height: 70px;
    background-color: ${props => props.backcolor || 'grey'};
    color: ${props => props.color || 'white'};
    cursor: pointer;
    font-size: 36px;
    font-weight: bold;

    &:hover {
        opacity: 0.7;
    }
`

export const Display = styled.div`
    font-size: 36px;
    font-weight: bold;
    color: green;
    box-sizing: border-box;
`