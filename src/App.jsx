import { Provider } from "react-redux"
import Home from "./containers/Home"
import store from "./store"
import Button from "./components/Button/style"

const App = () => (
  <Provider store={store}>
  <h1>Meus Contatos</h1>
    <Home />
    <Button>Novo</Button>
  </Provider>
)
export default App
