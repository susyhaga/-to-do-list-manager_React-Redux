import Tarefa from '../models/Tarefa'
import { TarefaLocalStorage } from '../store/slices/tarefa'


export const inicializarTarefas = (tarefasIniciais: TarefaLocalStorage[]) => {
  const tarefasSalvas = obterTarefasDoLocalStorage();
  if (tarefasSalvas.length === 0) {
    salvarTarefasNoLocalStorage(tarefasIniciais);
  }
};

export const tarefaParaLocalStorage = (tarefa: Tarefa): TarefaLocalStorage => ({
  id: tarefa.id,
  titulo: tarefa.titulo,
  prioridade: tarefa.prioridade,
  status: tarefa.status,
  concluida: tarefa.concluida,
  descricao: tarefa.descricao,

});


export function localStorageToTarefa(tarefaLocalStorage: TarefaLocalStorage): Tarefa {
  return new Tarefa(
    tarefaLocalStorage.titulo,
    tarefaLocalStorage.prioridade,
    tarefaLocalStorage.status,
    '', // Descrição pode ser inicializada como vazia
    tarefaLocalStorage.id,
    tarefaLocalStorage.concluida // Incluindo 'concluida'
  );
}
export function obterTarefasDoLocalStorage(): TarefaLocalStorage[] {
  try {
    const tarefas = localStorage.getItem('tarefas');
    return tarefas ? JSON.parse(tarefas) : [];
  } catch (e) {
    console.error('Erro ao obter tarefas do localStorage', e);
    return [];
  }
}


export function salvarTarefasNoLocalStorage(tarefas: TarefaLocalStorage[]): void {
  try {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  } catch (e) {
    console.error('Erro ao salvar tarefas no localStorage', e);
  }
}
