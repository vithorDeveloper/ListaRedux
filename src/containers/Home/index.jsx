import { useSelector } from "react-redux";
import Container from "./style";
import Cadastro from "../Cadastro";

// eslint-disable-next-line react/prop-types
const Home = ({nome, numero, email}) => {
  const items = useSelector((state) => state.salvar)

  return(
    <Container>
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Cadastro item={item.nome}/>
        </li>
      ))}
    </ul>
    </Container>
  )
}

export default Home