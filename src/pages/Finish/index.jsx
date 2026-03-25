import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header/index.jsx'
import Title from '../../components/Title/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import BackButton from '../../components/NextButton/index.jsx'
import DataUser from '../../components/DataUser'
import { UserContext } from '../../contexts/UserContext.jsx'

function Finish() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Header title={user.name} />
      <Title text="FINALIZAÇÃO DO CADASTRO" backcolor="#f6bf4f" color="white" />

      <DataUser
        nome={user.name}
        cpf={user.cpf}
        nascimento={user.birth}
        telefone={user.phone}
        logradouro={user.street}
        numero={user.number}
        estado={user.state}
        cep={user.cep}
      />

      <BackButton to="/address" />

      <Footer text="Rodapé da Finalização" bgColor="#f6bf4f" textColor="white" />
    </Container>
  )
}

export default Finish