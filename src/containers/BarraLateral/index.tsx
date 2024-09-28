import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import * as S from './styles'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/slices/filtros'
import * as enums from '../../enums/Tarefas/enumsTarefas'
import { Botao, Campo } from '../../styles'

//5) tipar prop para adicionar o botao(voltar a lista de tarefas)
// e passar o obj mostrarFiltros como argumento da barra lateral para fazer a condicao
type Props = {
  mostrarFiltros: boolean,
}
const BarraLateral = ({ mostrarFiltros }: Props) => {  // aqui uso 'mostrarFiltros'
  //useNavigate : passar como  retorno da funcao do evento onCLick
  const navigate = useNavigate()
  // Apenas essas fontes:  dispatch(valor:termo) +
  // useSelector(termo) serão capazes de retornar e  atribuir o valor
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    < S.Aside >
      <div>
        {/*5) passar o obj tipado  mostrarFiltros para fazer a condicao */}
        {mostrarFiltros ? (
          <>
            {/* Campo de busca */}
            <Campo
              type="text"
              placeholder="buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              {/* FiltroCards */}
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
              />
              <FiltroCard criterio="todas" legenda="todas" />
            </S.Filtros>
          </>
        ) : (
          //Botao = estilo global
          <Botao onClick={() => navigate('/')}>
            Voltar à lista de Tarefas
          </Botao>
        )}
      </div>
    </S.Aside >
  )
}
export default BarraLateral
