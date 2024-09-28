import { configureStore } from '@reduxjs/toolkit'
import tarefaReducer from '../store/slices/tarefa' // Reducer das tarefas
import filtroReducer from '../store/slices/filtros' // Reducer do filtro

const store = configureStore({
  reducer: {
    tarefas: tarefaReducer,
    filtro: filtroReducer,
  },
})

// Tipagem da store
export type RootReducer = ReturnType<typeof store.getState>

// Exportar a store para ser usada no Provider
export default store
