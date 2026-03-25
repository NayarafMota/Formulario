export default function DataUser({
  nome,
  cpf,
  nascimento,
  telefone,
  logradouro,
  numero,
  estado,
  cep,
}) {
  return (
    <div>
      {nome && <h3>Nome: {nome}</h3>}
      {cpf && <h3>CPF: {cpf}</h3>}
      {nascimento && <h3>Data de nascimento: {nascimento}</h3>}
      {telefone && <h3>Telefone: {telefone}</h3>}

      {logradouro && <h3>Logradouro: {logradouro}</h3>}
      {numero && <h3>Número: {numero}</h3>}
      {estado && <h3>Estado: {estado}</h3>}
      {cep && <h3>CEP: {cep}</h3>}
    </div>
  )
}