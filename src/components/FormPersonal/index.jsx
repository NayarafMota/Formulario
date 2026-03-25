import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'

export default function FormPersonal() {
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
        name="cpf"
        placeholder="Digite seu CPF"
        value={user.cpf || ''}
        onChange={handleChange}
      />

      <input
        type="date"
        name="birth"
        value={user.birth || ''}
        onChange={handleChange}
      />

      <input
        type="text"
        name="phone"
        placeholder="Digite seu telefone"
        value={user.phone || ''}
        onChange={handleChange}
      />
    </>
  )
}