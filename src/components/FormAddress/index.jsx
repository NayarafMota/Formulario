import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function FormAddress() {
  const { user, setUser } = useContext(UserContext)

  function handleChange(event) {
    const { name, value } = event.target

    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <>
      <input
        type="text"
        name="street"
        placeholder="Digite o logradouro"
        value={user.street || ''}
        onChange={handleChange}
      />

      <input
        type="text"
        name="number"
        placeholder="Digite o número"
        value={user.number || ''}
        onChange={handleChange}
      />

      <input
        type="text"
        name="state"
        placeholder="Digite o estado"
        value={user.state || ''}
        onChange={handleChange}
      />

      <input
        type="text"
        name="cep"
        placeholder="Digite o CEP"
        value={user.cep || ''}
        onChange={handleChange}
      />
    </>
  )
}