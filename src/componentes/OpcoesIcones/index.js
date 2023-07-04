import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'

const iconesH = [sacola,perfil]


function OpcoesIcones(){
    return(
        <ul className='icones'>
          {iconesH.map((icone)=>(
            <li className='icone'><img src={icone}></img></li>
          ))}
        </ul>
    )
}

export default OpcoesIcones