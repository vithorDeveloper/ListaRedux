import { configureStore } from "@reduxjs/toolkit";
import salvarReducer from "./reducers/salvarContato";

export default configureStore({
  reducer:{
      salvar: salvarReducer
  }
})