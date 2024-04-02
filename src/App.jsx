import { Provider } from "react-redux"
import ListaDeContatos from "./containers/ListaDeContatos"
import store from "./store"
import Button from "./components/Button/style"
import FormDeCadastro from "./containers/FormDeCadastro"

const App = () => (
  <Provider store={store}>
  <h1>Meus Contatos</h1>
    <FormDeCadastro/>
    <ListaDeContatos />
    <Button>Novo</Button>
  </Provider>
)
export default App
