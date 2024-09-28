import styled from 'styled-components'

//5  tipagem da prop ATIVO
type Props = {
  ativo: boolean
}

//1) div principal
export const Card = styled.div<Props>`
  ///6)passar o tipagem aqui
  //4) uso da prop tipada ATIVO de index.tsx
  border: 1px solid ${(props) => (props.ativo ? '#1E90FF' : '#a1a1a1')};
  background-color: ${(props) => (props.ativo ? '#ffff' : 'fcfcfc')};
  color: ${(props) => (props.ativo ? '#1E90FF' : '#5E5E5E')};
  border-radius: 8px;
  width: 92px;
  height: 63px;
  top: 203px;
  left: 16px;
  gap: 0px;
  border-radius: 8px;
  opacity: 0px;
`

//2) numero de tarefas
export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
  margin: 3px;
`
//3)texto do estado da tarefa
export const Label = styled.span`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
  margin-right: 40px;
  margin-left: 3px;
`
