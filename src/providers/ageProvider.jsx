import { useState } from 'react'
import { AgeContext } from '../contexts/ageContext'

export default function AgeProvider({ children }) {
  const [age, setAge] = useState(18)

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  )
}