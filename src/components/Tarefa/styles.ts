import styled from 'styled-components'
import varCores from '../../styles/varCoresBotoes'
import * as enums from '../../enums/Tarefas/enumsTarefas'
import { Botao } from '../../styles'

//10) Criar e fazer ajuste de tipagem das props PRIORIDADE E STATUS
//11) usar tipagem  no obj const TAG (abaixo) export const Tag = styled.span<TagProps>`
//14) usar ENUMS nas propriedades da prop tipada TagPropss
type TagProps = {
  prioridade?: enums.Prioridade
  status?: enums.Status
  parametros: 'prioridade' | 'status'
}

//12) Criar funcao para para verificar se o objeto (const Tags) tem uma propriedade chamada
//props que recebe cada cor de fundo de acordo com seu conteudo (pendente...concluido).
function retornaCorDeFundo(props: TagProps): string {
  //15) Substituir o conteudo das propriedades tipadas pelos ENUMS
  //16) usar esses ENUMS nas props tipadas TYPE Props da ListaDeTarefas(container)
  if (props.parametros === 'prioridade') {
    if (props.prioridade === enums.Prioridade.URGENTE) return varCores.vermelho
    if (props.prioridade === enums.Prioridade.IMPORTANTE)
      return varCores.amarelo2
  } else {
    if (props.status === enums.Status.PENDENTE) return varCores.amarelo
    if (props.status === enums.Status.CONCLUIDA) return varCores.verde
  }
  return '#CCC' // Valor padrão
}

//1) div principal
export const Card = styled.div`
  background-color: #fcfcfc;
  top: 10px;
  left: 264px;
  gap: 0px;
  border: 1px 0px 0px 0px;
  border-radius: 16px;
  opacity: 0px;
  margin-bottom: 16px;
  //sombra da div card
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;

  // label contem titulo da tarefa + input checkbox
  label {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
`

//2) Titulo
export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-left: 8px;
`

//3) estilo das 2 tags (legenda = importante e categoria = pendente)
//10) Criar e fazer ajuste de tipagem das props PRIORIDADE E STATUS
export const Tag = styled.span<TagProps>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  // 13) usar funcao retornaCorDeFundo no background-color
  background-color: ${(props) => retornaCorDeFundo(props)};
  border-radius: 8px;
  margin-right: 16px;
  margin-top: 16px;
  display: inline-block;
`

//4) Textarea (descricao da tarefa TEXTAREA)
export const Descricao = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  margin-top: 16px;
  resize: none; //desabilita o resize do texto area pro user
  border: none;
  background-color: transparent;
`

//5) Action bars (div dos 2 botoes)
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`

// 8) - criar  objetos para botoes: BotaoSalvar | BotaoCancelarRemover
// para usar as varCoresBotoes (dentro do estilo global)

export const BotaoCancelarRemover = styled(Botao)`
  //Botao ---> estilo global
  background-color: ${varCores.vermelho};
`

//9) usar cores parametrizadas no lugar das tags(<S.Botao>) de Tarefa
//7) exportar estilo para o index da Tarefa (card da tarefa)
