import styled from 'styled-components'

// 1) Estilo para o ASIDE que será o container de filtros
export const Aside = styled.aside`
  padding: 16px;
  background-color: #eeee;
  height: 100vh; /* Altura total da viewport */
  border-radius: 8px;
  width: 224px;
  height: 1317px;
  gap: 0px;
  opacity: 0px;
`

// 2) Estilo para o GRID dos filtros com duas colunas
export const Filtros = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8px;
  margin-top: 16px;
`
