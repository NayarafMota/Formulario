import { useNavigate } from 'react-router-dom'

export default function NextButton({ to = '/' }) {
  const navigate = useNavigate()

  return (
    <button onClick={() => navigate(to)}>
      Continuar
    </button>
  )
}