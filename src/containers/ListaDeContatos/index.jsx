import { useDispatch, useSelector } from "react-redux";
import Container from "./style";
import Button from "../../components/Button/style";
import { remover } from "../../store/reducers/salvarContato";
import { useState } from "react";
import EstiloGlobal from "../../styles/globalStyle";

const ListaDeContatos = () => {

  const [editar, setEditar] = useState(false)

  const contatos = useSelector((state) => state.contatos)

  const dispatch= useDispatch()

  // const editando = () => {
    
  // }

  return(
    <>
      <EstiloGlobal />
      <Container>
      <ul>
        {contatos.map(item => (
          <li key={item.id}>

            <p>{item.nome}</p>
            <p>{item.email}</p>
            <p>{item.telefone}</p>

            <Button onClick={() => dispatch(remover(item.telefone))}>apagar</Button>

            { editar ? (
                <Button 
                  onClick={() => setEditar(false)}
                >
                  salvar
                </Button>
              ) : (
                <Button
                  onClick={() => setEditar(true)}
                >
                  editar
                </Button>
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