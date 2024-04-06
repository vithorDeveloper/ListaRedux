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



            { editar ? (
                <>
                <div className="sectionInputs">
                  <input type="text" placeholder={item.nome}/>
                  <input type="text" placeholder={item.email}/>
                  <input type="text" placeholder={item.telefone}/>
                </div>

                  <Button onClick={() => setEditar(false)}> salvar </Button>
                  <Button onClick={() => dispatch(remover(item.telefone))}> cancelar </Button>
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