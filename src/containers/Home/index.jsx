import Container from "./style";

// eslint-disable-next-line react/prop-types
const Home = ({nome, numero, email}) => {

  return(
    <Container>
    <div>
      <span>nome: {nome}</span>
      <span>numero: {numero}</span>
      <span>email: {email}</span>
    </div>
    </Container>
  )
}

export default Home