import styled from 'styled-components'
import {Link} from 'react-router-dom' //botaoAdicionar
import variaveis from '../../styles/varCoresBotoes'

export const Circulo =styled(Link)`
  height: 64px;
  width: 64px;
  background: ${variaveis.verde};
  color: #ffff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-family: Roboto;
  border-radius: 50%;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  text-decoration: none;
`
