import {createSlice,PayloadAction} from '@reduxjs/toolkit'
import * as enums from '../../enums/Tarefas/enumsTarefas'


//1) tipagem das propriedades usadas para alterar o  state
type FiltroState = {
  termo?: string
  criterio:'prioridade'|'status'| 'normal' | 'todas'
  valor?: enums.Prioridade|enums.Status //enuns
}


//2) criar initialState para definir o estado INICIAL do slice
const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}


//3)criar slice de filtro que retorna um reducer com o objeto/action creator :alterarTermo
const filtroSlice = createSlice({
  name:'filtro',
  initialState,
  reducers:{
   //4) action creator:(state,action,Payload)
   // PayloadAction= tipo do retorno do estado atual que a action creator retorna (termo = string).
    alterarTermo:(state,action:PayloadAction<string>) =>{
      state.termo = action.payload
    },
    alterarFiltro:(state,action:PayloadAction<FiltroState>) =>{
      state.criterio = action.payload.criterio
      state.valor = action.payload.valor
    },
  }
})


//exportar slice e action creatro para STORE (no reducer) como filtroReducer
export const {alterarTermo, alterarFiltro} = filtroSlice.actions
export default filtroSlice.reducer




