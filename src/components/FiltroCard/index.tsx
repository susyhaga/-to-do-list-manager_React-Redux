import React from 'react'
//3) imporar estilo (fazer a ilha)
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { alterarFiltro } from '../../store/slices/filtros'
import * as enums from '../../enums/Tarefas/enumsTarefas'
import { RootReducer } from '../../store'

//4 criar e exportar prop tipada ATIVO
export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'normal' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

//3) inicio do FiltroCard +  Adicionar a prop Props
const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()

  //4) useSelector
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  //5) funcao que recebe criterio e valor de filtro
  const verificaValor = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  //7) criar const valor fazer IF com  os objetos criterio e valor
  //tarefas = tarefasSlice
  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }
  //6) const ativo que recebe a funcao verificaValoremover ativo das prop tipada do componente )
  //8) const cntador que recebe a funcao contarTarefas para receber o objeto contador q retorna tarefas(slice)
  const ativo = verificaValor()
  const contador = contarTarefas()

  return (
    //2 usar estilo da ilha S nas tags + passar o valor da prop ATIVO
    <S.Card ativo={ativo} onClick={filtrar}>
      <S.Contador>{contador}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroCard //  exportar para containers/BarraLateral
