import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import FormAddress from '../../components/FormAddress'
import NextButton from '../../components/NextButton/index.jsx'
import DataUser from '../../components/DataUser'
import { UserContext } from '../../contexts/UserContext'

function Address() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Header title={user.name} />
      <Title text="ENDEREÇO" backcolor="#6fa8dc" color="white" />

      <FormAddress />

      <DataUser
    
        logradouro={user.street}
        numero={user.number}
        estado={user.state}
        cep={user.cep}
      />

      <NextButton to="/finish" />

      <Footer text="Rodapé da Address" bgColor="#6fa8dc" textColor="white" />
    </Container>
  )
}

export default Address