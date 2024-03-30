import { createSlice } from "@reduxjs/toolkit";

export const salvarSlice = createSlice ({
  name: 'salvar',
  initialState: [
    {id: 1, nome: 'vitor', email: 'vitor@emai.com', telefone: 19298374}
  ],
  reducers:{
    addContato: (state, action) => {
      const contato = {
        id: new Date(),
        nome: action.payload.nome,
        email: action.payload.email,
        telefone: action.payload.telefone
      }
      state.push(contato)
    }
  }
})

export const {addContato} = salvarSlice.actions
export default salvarSlice.reducer