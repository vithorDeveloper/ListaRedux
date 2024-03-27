import Botao from "../../components/Button";
import Form from "./style";

const Cadastro = () => (
  <>
  <Botao text={"voltar"}/>
    <Form>
      <div>
        <input type="text" placeholder="Digite seu nome"/>
        <input type="email" placeholder="Digite seu email"/>
        <input type="telefone" placeholder="Digite seu telefone"/>
      </div>

        <Botao text={"cadastrar"} />

    </Form>
  </>
)

export default Cadastro