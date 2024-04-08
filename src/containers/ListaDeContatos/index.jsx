import { useDispatch, useSelector } from "react-redux";
import Container from "./style";
import Button from "../../components/Button/style";
import { remover, editar as edit } from "../../store/reducers/salvarContato";
import { useState, useEffect } from "react";
import EstiloGlobal from "../../styles/globalStyle";

const ListaDeContatos = () => {

  const [editar, setEditar] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const contatos = useSelector((state) => state.contatos)

  const dispatch= useDispatch()

  useEffect(() => {
    if(nome.length > 0){
      setNome(nome)
    }
  }, [nome])

  return(
    <>
      <EstiloGlobal />
      <Container>
      <ul>
        {contatos.map(item => (
          <li key={item.id}>



            { editar ? (
                <>
                <div className="sectionInputs">
                  <input 
                  type="text" 
                  value={nome}
                  placeholder={item.nome}
                  onChange={e => setNome(e.target.value)}
                  />
                  <input 
                  type="text" 
                  value={email}
                  placeholder={item.email}
                  onChange={e => setEmail(e.target.value)}
                  />
                  <input 
                  type="text" 
                  value={telefone}
                  placeholder={item.telefone}
                  onChange={e => setTelefone(e.target.value)}
                  />
                </div>

                  <Button onClick={() => {
                    dispatch(edit({
                      nome,
                      email,
                      telefone
                    }))
                      setEditar(false)
                    }}
                  > 
                  salvar 
                  </Button>

                  <Button onClick={() => setEditar(false)}> cancelar </Button>
                </>
              ) : (
                <>  
                    <p>{item.nome}</p>
                    <p>{item.email}</p>
                    <p>{item.telefone}</p>

                    <Button onClick={() => setEditar(true)}> editar </Button>

                    <Button onClick={() => dispatch(remover(item.telefone))}> apagar </Button>
                </>
              )
            }

          </li>
        ))}
      </ul>
      </Container>
    </>
  )
}

export default ListaDeContatos