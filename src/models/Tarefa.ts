import * as enums from '../enums/Tarefas/enumsTarefas'

//criacao de um objeto com tipagem das propriedades da classe Tarefa
class Tarefa {
  titulo: string
  prioridade: enums.Prioridade
  status: enums.Status
  descricao?: string
  id: number //essa prop foi criada aqui
  concluida: boolean

  // constructor é uma INSTANCIA =  cópia da classe Tarefa.
  // ou seja, um objeto criado a partir de uma classe.
  constructor(
    titulo: string,
    prioridade: enums.Prioridade,
    status: enums.Status,
    descricao: string,
    id: number,
    concluida = false
  ) {
    //fazemos a atribuicao desses valores. this = class Tarefa
    this.titulo = titulo
    this.prioridade = prioridade
    this.status = status
    this.descricao = descricao
    this.id = id
    this.concluida = concluida
  }
}

export default Tarefa //usar na pasta reducers  como objeto a orientacao da array de tarefas =  initialState:[]
