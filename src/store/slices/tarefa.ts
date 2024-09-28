import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import * as enums from '../../enums/Tarefas/enumsTarefas';
import Tarefa from '../../models/Tarefa';
import { salvarTarefasNoLocalStorage, obterTarefasDoLocalStorage } from '../../helpers/localStorage';

type TarefasState = {
  itens: Tarefa[];
};

// Definindo a interface TarefaLocalStorage
export interface TarefaLocalStorage {
  id: number;
  titulo: string;
  prioridade: enums.Prioridade;
  status: enums.Status;
  concluida: boolean; // Incluindo 'concluida'
  descricao?: string; // Adicionando a propriedade 'descricao'
}

const tarefasDoLocalStorage: TarefaLocalStorage[] = obterTarefasDoLocalStorage();

export const initialState: TarefasState = {
  itens: tarefasDoLocalStorage.length > 0 ? tarefasDoLocalStorage : [
    {
      id:1,
      titulo:'Estudar SASS', //nome da tarefa(título)
      prioridade :  enums.Prioridade.IMPORTANTE,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao: 'Estudar por 2 horas o conceito de sass',
      concluida: false,
    },
    {
      id:2,
      titulo:'Estudar TypeScript', //nome da tarefa(título)
      prioridade :  enums.Prioridade.URGENTE,//prioridade
      status:  enums.Status.CONCLUIDA,//prioridade
      descricao: 'Rever aula 2 da aula TypeScript do módulo 6',
      concluida: false,
    },
    {
      id:3,
      titulo:'Estudar React', //nome da tarefa(título)
      prioridade : enums.Prioridade.IMPORTANTE,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao:'Refazer o projeto E-GAMES e praticar o useEffect',
      concluida: false,
    },
    {
      id:4,
      titulo: 'Estudar Redux', //nome da tarefa(título)
      prioridade : enums.Prioridade.URGENTE,//prioridade
      status:   enums.Status.PENDENTE,//prioridade
      descricao: 'Assistir ao módulo 8 sobre o useSelector()',
      concluida: false,
    },
    {
      id:5,
      titulo:'Estudar JavaScript', //nome da tarefa(título)
      prioridade :enums.Prioridade.URGENTE,//prioridade
      status: enums.Status.CONCLUIDA,//prioridade
      descricao: 'Estudar por 6 horas Promises: async/await',
      concluida: true
    },
    {
      id:6,
      titulo:' Show de Descendents', //nome da tarefa(título)
      prioridade :  enums.Prioridade.NORMAL,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao: ' Ir ao show do Descendents Dezembro no Carioca Club - SP',
      concluida: false
    },
    {
      id:7,
      titulo:'Estudar HTML', //nome da tarefa(título)
      prioridade :  enums.Prioridade.NORMAL,//prioridade
      status: enums.Status.CONCLUIDA,//prioridade
      descricao: 'Rever conceitos de acessibilidade',
      concluida: false
    },
    {
      id:8,
      titulo:'Passear com a dog', //nome da tarefa(título)
      prioridade :  enums.Prioridade.NORMAL,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao: 'Organizar roupas por cores e tamanhos',
      concluida: true,
    },
    {
      id:9,
      titulo:'Lembrar do aniversário do Italo', //nome da tarefa(título)
      prioridade :  enums.Prioridade.NORMAL,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao: 'Lembrar de comprar presente para o aniversário do Italo (12/08/89)',
      concluida: false
    },
    {
      id:10,
      titulo:'Assistir filme do gato', //nome da tarefa(título)
      prioridade :  enums.Prioridade.NORMAL,//prioridade
      status: enums.Status.PENDENTE,//prioridade
      descricao: 'Assitir ao filme "O pior vizinho do mundo" com Tom Hanks',
      concluida: true,
    },
  ]
}

export const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload);
      salvarTarefasNoLocalStorage(state.itens); // Salvar após remoção
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex((t) => t.id === action.payload.id);
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = {
          ...state.itens[indexDaTarefa],
          ...action.payload,
        };
        salvarTarefasNoLocalStorage(state.itens); // Salvar após edição
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Tarefa, "id">>) => {
      const tarefaJaExiste = state.itens.find(
        (t) => t.titulo.toLowerCase() === action.payload.titulo.toLocaleLowerCase()
      );
      if (tarefaJaExiste) {
        alert('Essa tarefa já existe na sua lista');
      } else {
        const ultimaTarefa = state.itens[state.itens.length - 1];
        const tarefaNova = {
          ...action.payload,
          id: ultimaTarefa ? ultimaTarefa.id + 1 : 1,
        };
        state.itens.push(tarefaNova);
        salvarTarefasNoLocalStorage(state.itens); // Salvar no localStorage
      }
    },
    alteraStatus: (state, action: PayloadAction<{ id: number; finalizado: boolean }>) => {
      const indexDaTarefa = state.itens.findIndex(t => t.id === action.payload.id);
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa].status = action.payload.finalizado
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
        state.itens[indexDaTarefa].concluida = action.payload.finalizado; // Atualizando o campo 'concluida'
        salvarTarefasNoLocalStorage(state.itens); // Salvar após alteração de status
      }
    },
  },
});

export const { remover, editar, cadastrar, alteraStatus } = tarefasSlice.actions;
export default tarefasSlice.reducer;
