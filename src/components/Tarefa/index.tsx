import { useState, useEffect, ChangeEvent, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import * as enums from '../../enums/Tarefas/enumsTarefas'
import TarefaClasse from '../../models/Tarefa'
import { remover, editar, alteraStatus } from '../../store/slices/tarefa'
import { Botao, BotaoSalvar } from '../../styles'

type Props = TarefaClasse & { // Assegure-se de que 'TarefaClasse' tem todas as propriedades necessárias
  descricaoOriginal?: string; // Adicionando ? para indicar que pode ser opcional
};

const Tarefa = ({
  titulo,
  prioridade,
  descricao: descricaoOriginal,
  status,
  concluida,
  id
}: Props) => {
  const dispatch = useDispatch();
  const [estaEditando, setEstaEditando] = useState(false);
  const [descricao, setDescricao] = useState(descricaoOriginal);


  useEffect(() => {
    setDescricao(descricaoOriginal);
  }, [descricaoOriginal]);

  const cancelarEdicao = useCallback(() => {
    setEstaEditando(false);
    setDescricao(descricaoOriginal);
  }, [descricaoOriginal]);


  const alterarStatusTarefa = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(alteraStatus({
      id,
      finalizado: e.target.checked,
    }));
  }, [dispatch, id]);

  return (
    <S.Card>
      <label htmlFor={titulo}>
        <input
          type='checkbox'
          id={titulo}
          checked={status === enums.Status.CONCLUIDA}
          onChange={alterarStatusTarefa}
        />
        <S.Titulo>
          {estaEditando && <em>Editando</em>}
          {titulo}
        </S.Titulo>
      </label>
      <S.Tag parametros="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametros="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={() => {
              dispatch(editar({ descricao, concluida, prioridade, status, titulo, id }));
              setEstaEditando(false);
            }}>
              Salvar
            </BotaoSalvar>
            <S.BotaoCancelarRemover onClick={cancelarEdicao}>Cancelar</S.BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <S.BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </S.BotaoCancelarRemover>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  );
}

export default Tarefa;
