import { Provider } from "react-redux"
import Home from "./containers/Home"
import store from "./store"
import Button from "./components/Button/style"

const App = () => (
  <Provider store={store}>
  <h1>Meus Contatos</h1>
    <Home nome={"Carlos"} numero={"90876453"} email={"email@email.com"}/>
    <Home nome={"Vitor"} numero={"90876453"} email={"email@email.com"}/>
    <Home nome={"Rafa"} numero={"90876453"} email={"email@email.com"}/>
    <Home nome={"Vlamir"} numero={"90876453"} email={"email@email.com"}/>
    <Home nome={"Sander"} numero={"90876453"} email={"email@email.com"}/>
    <Button>Novo</Button>
  </Provider>
)
export default App
