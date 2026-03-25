import { useContext } from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import Footer from '../components/Footer'
import { AgeContext } from '../contexts/ageContext'
import { UserContext } from '../contexts/UserContext'
import styled from 'styled-components'

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(to bottom, #f6f9fc, #eef3f8);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  box-sizing: border-box;

  input {
    width: 220px;
    height: 40px;
    border: 1px solid #cfd8e3;
    border-radius: 10px;
    padding: 0 12px;
    font-size: 16px;
    margin-top: 15px;
    outline: none;
  }

  h3 {
    margin: 10px 0;
    color: #1f2d3d;
  }
`

export default function About() {
  const { user } = useContext(UserContext)
  const { age, setAge } = useContext(AgeContext)

  function onChangeAge(event) {
    setAge(Number(event.target.value))
  }

  return (
    <Container>
      <Header title="About" />
      <Title text="Página About" backcolor="#8fd3c7" color="white" />

      <h3>Nome: {user.name}</h3>
      <h3>Idade: {age}</h3>

      <input type="number" value={age} onChange={onChangeAge} />

      <Footer text="Rodapé da About" bgColor="#8fd3c7" textColor="white" />
    </Container>
  )
}