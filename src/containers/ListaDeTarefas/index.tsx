import { useSelector } from "react-redux";
import Tarefa from "../../components/Tarefa"; // prop tipada prioridade
import { MainContainer, Titulo } from '../../styles'; // componentes estilizados
import { RootReducer } from '../../store';

// 1) conteudo principal do container Lista De Tarefas
const ListaDeTarefas = () => {
  // 2) useSelector: É usado para pegar a propriedade tipada (itens, termo) dos estados tarefas…filtro (criados no slice e passados para o store
  const { itens } = useSelector((state: RootReducer) => state.tarefas);
  const { termo, criterio, valor } = useSelector((state: RootReducer) => state.filtro);

  // 1) Para fazer a filtragem com base no que o usuário digitou no input(buscar)
  const filtrarTarefas = () => {
    return itens.filter(item => {
      const termoMatch = termo ? item.titulo.toLowerCase().includes(termo.toLowerCase()) : true;
      const criterioMatch = criterio === 'todas' ||
        (criterio === 'prioridade' && item.prioridade === valor) ||
        (criterio === 'status' && item.status === valor);
      return termoMatch && criterioMatch;
    });
  };

  // 3) função para exibir o resultado da filtragem
  const exibeResultadoFiltragem = (quantidade: number) => {
    let mensagem = '';
    const complementacao = termo !== undefined && termo.length > 0 ? `e "${termo}"` : '';

    if (criterio === 'todas') {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: todas ${complementacao}`;
    } else {
      mensagem = `${quantidade} tarefa(s) encontrada(s) como: "${criterio} = ${valor}" ${complementacao}`;
    }

    return mensagem;
  }

  // 1)
  const tarefas = filtrarTarefas();
  // 3)
  const mensagem = exibeResultadoFiltragem(tarefas.length);

  return (
    <MainContainer>
      <Titulo as={"p"}>{mensagem}</Titulo>
      <ul>
        {tarefas.map((t) => (
          <li key={t.id}> {/* Alterado de t.titulo para t.id */}
            <Tarefa
              id={t.id}
              descricao={t.descricao}
              titulo={t.titulo}
              prioridade={t.prioridade}
              status={t.status}
              concluida={t.concluida}
            />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ListaDeTarefas; // Para App.tsx (Provider)
