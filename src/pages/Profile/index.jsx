import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import { UserContext } from '../../contexts/UserContext'
import { AgeContext } from '../../contexts/ageContext'

function Profile() {
  const { user } = useContext(UserContext)
  const { age } = useContext(AgeContext)

  return (
    <Container>
      <Header title="Profile" />
      <Title text="Página de Perfil" backcolor="#d79be5" color="white" />

      <h3>Nome: {user.name}</h3>
      <h3>Idade: {age}</h3>

      <Footer text="Rodapé da Profile" bgColor="#d79be5" textColor="white" />
    </Container>
  )
}

export default Profile