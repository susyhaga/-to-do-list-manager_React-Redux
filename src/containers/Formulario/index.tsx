import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux' //para passar a action creator(cadastrar) do slices/tarefa
import { useNavigate } from 'react-router-dom' //Muda para outra rota dentro da aplicação.

import { Campo } from '../../styles' //estilo global
import { BotaoSalvar, MainContainer, Titulo } from '../../styles'
import { Form, Opcoes, Opcao } from './styles' //estilo do Formulario
import * as enums from '../../enums/Tarefas/enumsTarefas' //enums.Prioridade
import { cadastrar } from '../../store/slices/tarefa'

const Formulario = () => {
  //dispatch p/atualizar a store
  const dispatch = useDispatch()
  const navigate = useNavigate() //Muda para outra rota dentro da aplicação.

  //states e mofificadores de titulo e descricao
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  //state e modificadores p/ salvar os valores de enums.prioridade
  const [prioridade, setPrioridade] = useState(enums.Prioridade.NORMAL)

  //funcao para ADICIONAR uma nova tarefa na lista de tarefas
  // atraves da action creator cadastrar (no slices/tarefas)

  const cadastrarTarefa = (e: FormEvent) => {
    //FormEvent
    e.preventDefault()

    // usar o dispatch para passar a action creator(cadastrar do slices / tarefas) e suas props
    dispatch(
      cadastrar({
        titulo,
        prioridade,
        descricao,
        status: enums.Status.PENDENTE,
        concluida: false // Adicionando a propriedade concluida
      })
    )
    navigate('/') //para voltar a pag inicial (HOME) com a nova tarefa salva
  }
  return (
    <MainContainer>
      {' '}
      {/* conteudo do pages/Cadastro */}
      <Titulo> Nova Tarefa</Titulo>
      <Form onSubmit={cadastrarTarefa}>
        <Campo
          value={titulo} //Campo = componente estilizado no estilo global
          onChange={(e) => setTitulo(e.target.value)} //modificador do estado titulo
          type="text"
          placeholder="Título"
        />

        <Campo
          as={'textarea'}
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)} //modificador do estado descricao
          placeholder="Descrição da tarefa" // Removido o `type`
        />

        <Opcoes>
          {' '}
          {/*  estilo da label */}
          <p>Prioridade</p>
          {/* iteracao de enums de prioridade nos inputs */}
          {/* prioridade = state */}
          {Object.values(enums.Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              {' '}
              {/* componente estilizado em styles*/}
              <input
                value={prioridade} //state
                name="prioridade"
                type="radio"
                onChange={(e) =>
                  setPrioridade(e.target.value as enums.Prioridade)
                } //evento modificador
                id={prioridade}
                //Para dizer se o Campo esta selecionado, noc aso de um input radio, checkbox,
                // usamos  expressao do defaultChecked: se ela for = TRUE, o Campo sera checado por padrao
                defaultChecked={prioridade === enums.Prioridade.NORMAL}
              />
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
        {/* componente estilizado em styles*/}
      </Form>
    </MainContainer>
  )
}

export default Formulario
