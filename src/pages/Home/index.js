import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from './styled.jsx'
import Header from '../../components/Header'
import Title from './../../components/Title'
import Footer from '../../components/Footer'
import { UserContext } from '../../contexts/UserContext'

function Home() {
  const { user, setUser } = useContext(UserContext)
  const navigate = useNavigate()

  function onChangeName(event) {
    setUser({ name: event.target.value })
  }

  function handleNext() {
    if (!user.name || user.name.trim() === '') {
      alert('Digite seu nome antes de continuar')
      return
    }

    navigate('/personal')
  }

  return (
    <Container>
      <Header title="Home" />
      <Title text="FORMULÁRIO DE CADASTRO" backcolor="#a8e6a3" color="white" />

      <input
        type="text"
        placeholder="Digite seu nome"
        onChange={onChangeName}
        value={user.name}
      />

      <button onClick={handleNext}>
        Continuar
      </button>

      <Footer text="Rodapé da Home" bgColor="#8ec5fc" textColor="white" />
    </Container>
  )
}

export default Home