import styled from "styled-components";

export const Form = styled.form` //export estilo para Formulario/index
  max-width: 547px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea{
    resize: none; //evita comportamento de expansao do textarea
    margin:16px 0;
  }
`
//estilo da DIV +  estilo  dos LABELS
export const Opcoes =styled.div`
  margin-bottom: 16px;
  p{
    margin-bottom: 6px;
  }
  label{
    font-size: 14px;
    margin-left: 2px;
    margin-right: 6px;
    width: 12px;
    top: 371px;
    left: 264px;
  }
`
//estilo da DIV que tem a iteracao de enums.Prioridade nos inputs c/ valor prioriedade (prop tipada de Tarefas*/}
export const Opcao =styled.div`
  margin-bottom: 16px;
  display: inline;
 text-transform: capitalize //as 1.ª  letras começa como MAIÚSCULAS
`
