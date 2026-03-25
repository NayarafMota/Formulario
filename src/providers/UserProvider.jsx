import { useState } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Usuário' })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  )
}