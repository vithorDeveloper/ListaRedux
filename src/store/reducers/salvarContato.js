import { createSlice } from "@reduxjs/toolkit";

export const contatosSlice = createSlice ({
  name: 'contatos',
  initialState: [],
  reducers:{
    adicionar: (state, action) => {
      const contato = {
          id: new Date().toISOString(),
          nome: action.payload.nome,
          email: action.payload.email,
          telefone: action.payload.telefone
        }
      state.push(contato)
    },

    remover: (state, action) => {
      state = state.filter((contato) => contato.telefone !== action.payload)
    }
  }
})

export const {adicionar, remover} = contatosSlice.actions
export default contatosSlice.reducer