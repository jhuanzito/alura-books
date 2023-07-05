import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'
const iconesHeader = [sacola,perfil]

const ConjuntoDeIcones = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

function OpcoesIcones(){
    return(
        <ConjuntoDeIcones>
          {iconesHeader.map((icone)=>(
            <Icone>
              <img src={icone} alt='icone'></img>
            </Icone>
          ))}
        </ConjuntoDeIcones>
    )
}

export default OpcoesIcones