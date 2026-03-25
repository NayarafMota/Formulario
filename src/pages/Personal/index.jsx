import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from '../../components/Title'
import Footer from '../../components/Footer'
import FormPersonal from '../../components/FormPersonal'
import NextButton from '../../components/NextButton/index.jsx'
import DataUser from '../../components/DataUser'
import { UserContext } from '../../contexts/UserContext'

function Personal() {
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Header title={user.name} />
      <Title text="DADOS PESSOAIS" backcolor="#d79be5" color="white" />

      <FormPersonal />

      <DataUser
        nome={user.name}
        cpf={user.cpf}
        nascimento={user.birth}
        telefone={user.phone}
      />

      <NextButton to="/address" />

      <Footer text="Rodapé da Personal" bgColor="#d79be5" textColor="white" />
    </Container>
  )
  
}

export default Personal