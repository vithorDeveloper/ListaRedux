// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { remover, editar as edit } from "../../store/reducers/salvarContato";
// import Button from "../../components/Button/style";

// const Contato = ({ contato }) => {
//   const [editar, setEditar] = useState(false)
//   const [nome, setNome] = useState(contato.nome)
//   const [email, setEmail] = useState(contato.email)
//   const [telefone, setTelefone] = useState(contato.telefone)

//   const dispatch = useDispatch()

//   return (
//     <li key={contato.id}>
//       { editar ? (
//         <>
//           <textarea 
//             value={nome} 
//             onChange={e => setNome(e.target.value)}
//           />
//           <textarea 
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//           />
//           <textarea 
//             value={telefone}
//             onChange={e => setTelefone(e.target.value)}
//           />

//           <Button onClick={() => {
//             dispatch(edit({
//               id: contato.id,
//               nome,
//               email,
//               telefone
//             }))
//             setEditar(false)
//           }}> 
//             salvar 
//           </Button>

//           <Button onClick={() => setEditar(false)}> cancelar </Button>
//         </>
//       ) : (
//         <>  
//           <p>{contato.nome}</p>
//           <p>{contato.email}</p>
//           <p>{contato.telefone}</p>

//           <Button onClick={() => setEditar(true)}> editar </Button>
//           <Button onClick={() => dispatch(remover(contato.telefone))}> apagar </Button>
//         </>
//       )}
//     </li>
//   )
// }

// export default Contato
