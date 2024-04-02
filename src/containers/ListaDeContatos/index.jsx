import { useDispatch, useSelector } from "react-redux";
import Container from "./style";
import Button from "../../components/Button/style";
import { remover } from "../../store/reducers/salvarContato";

const ListaDeContatos = () => {
  const contatos = useSelector((state) => state.contatos)

  const dispatch= useDispatch()

  return(
    <Container>
    <ul>
      {contatos.map(item => (
        <li key={item.id}>
          <p>{item.nome}</p>
          <p>{item.email}</p>
          <p>{item.telefone}</p>
          <Button onClick={() => dispatch(remover(item.telefone))}>apagar</Button>
        </li>
      ))}
    </ul>
    </Container>
  )
}

export default ListaDeContatos