import { useState } from "react";
import Botao from "../../components/Button";
import Form from "./style";
import { useDispatch, useSelector } from "react-redux";
import { addContato } from "../../store/reducers/salvarContato";

const Cadastro = () => {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const dispatch = useDispatch()

  const items = useSelector((state) => state.salvar)

  const addContact = (event) => {
    event.preventDefault()

    if(nome && email && telefone) {
      dispatch(
        addContato({
          nome: nome,
          email: email,
          telefone: telefone
        }))
    }
  }

  return(
    <>
    <Botao text={"voltar"}/>
      <Form onSubmit={addContact}>
        <div>
          <input 
            type="text" 
            placeholder="Digite seu nome"
            onChange={e => setNome(e.target.value)}
          />
          {nome}

          <input 
            type="email" 
            placeholder="Digite seu email"
            onChange={e => setEmail(e.target.value)}
          />
          {email}

          <input
            type="telefone" 
            placeholder="Digite seu telefone"
            onChange={e => setTelefone(e.target.value)}
          />
          {telefone}
        </div>

          <Botao text={"cadastrar"} />

          <ul>
            {items.map(item => (
              <li key={item.id}>
                <Cadastro item={item.nome}/>
              </li>
            ))}
          </ul>

      </Form>
    </>
  )
}

export default Cadastro