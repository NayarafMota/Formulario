import { useState } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Usuário',
    cpf: '',
    birth: '',
    phone: '',
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}