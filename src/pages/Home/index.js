import { useContext } from 'react'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from './../../components/Title'
import Counter from '../../components/Counter'
import Footer from '../../components/Footer'
import { UserContext } from '../../contexts/UserContext'
import { AgeContext } from '../../contexts/ageContext'

function Home() {
  const { user, setUser } = useContext(UserContext)
  const { age } = useContext(AgeContext)

  function onChangeName(event) {
    setUser({ name: event.target.value })
  }

  return (
    <Container>
      <Header title="Home" />
      <Title text="Página Inicial" backcolor="#a8e6a3" color="white" />
      <Counter />

      <input type="text" onChange={onChangeName} value={user.name} />
      <h3>Nome: {user.name}</h3>
      <h3>Idade: {age}</h3>

      <Footer text="Rodapé da Home" bgColor="#8ec5fc" textColor="white" />
    </Container>
  )
}

export default Home