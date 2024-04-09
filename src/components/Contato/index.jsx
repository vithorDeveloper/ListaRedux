/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { remover, editar as edit } from "../../store/reducers/salvarContato";
import Button from "../../components/Button/style";

const Contato = ({ contato }) => {
  const [editar, setEditar] = useState(false)
  const [nome, setNome] = useState(contato.nome)
  const [email, setEmail] = useState(contato.email)
  const [telefone, setTelefone] = useState(contato.telefone)

  const [nomeInicial, setNomeInicial] = useState(contato.nome)
  const [emailInicial, setEmailInicial] = useState(contato.email)
  const [telefoneInicial, setTelefoneInicial] = useState(contato.telefone)

  const dispatch = useDispatch()
  
  const handleEditar = () => {
    setEditar(true);
    setNomeInicial(nome);
    setEmailInicial(email);
    setTelefoneInicial(telefone);
  }


  const handleContactInitial = () => {
    setEditar(false)
    setNome(nomeInicial)
    setEmail(emailInicial)
    setTelefone(telefoneInicial)
  }

  return (
    <li key={contato.id}>
      { editar ? (
        <>
          <input 
            type="text" 
            value={nome} 
            onChange={e => setNome(e.target.value)}
          />
          <input 
            type="text" 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            type="text" 
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
          />

          <Button onClick={() => {
            dispatch(edit({
              id: contato.id,
              nome,
              email,
              telefone
            }))
            setEditar(false)
          }}> 
            salvar 
          </Button>

          <Button onClick={() => handleContactInitial()}> cancelar </Button>
        </>
      ) : (
        <>  
          <p>{nome}</p>
          <p>{email}</p>
          <p>{telefone}</p>

          <Button onClick={() => handleEditar()}> editar </Button>
          <Button onClick={() => dispatch(remover(contato.telefone))}> apagar </Button>
        </>
      )}
    </li>
  )
}

export default Contato
