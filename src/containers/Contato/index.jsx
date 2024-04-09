/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useState } from "react";
import { remover, editar as edit } from "../../store/reducers/salvarContato";
import Button from "../../components/Button/style";
import Input from "../../components/Input";
import CardContato from "../../components/CardContato"

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
          <Input 
            type={"text"} 
            value={nome} 
            onChange={e => setNome(e.target.value)}
          />
          <Input 
            type={"email"} 
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input 
            type={"number"} 
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
          <CardContato text={nome}/>
          <CardContato text={email}/>
          <CardContato text={telefone}/>

          <Button onClick={() => handleEditar()}> editar </Button>
          <Button onClick={() => dispatch(remover(contato.telefone))}> apagar </Button>
        </>
      )}
    </li>
  )
}

export default Contato
