import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import { UserContext } from '../../contexts/UserContext'
import { AgeContext } from '../../contexts/ageContext'

function Contact() {
  const { user } = useContext(UserContext)
  const { age } = useContext(AgeContext)

  return (
    <Container>
      <Header title="Contact" />
      <Title text="Página de Contato" backcolor="#f6bf4f" color="white" />

      <h3>Nome: {user.name}</h3>
      <h3>Idade: {age}</h3>

      <Footer text="Rodapé da Contact" bgColor="#f6bf4f" textColor="white" />
    </Container>
  )
}

export default Contact