import styled from 'styled-components'
const textoOpcoes = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']

const ConjuntoDeOpcoes = styled.ul`
    display: flex;
`
const Opcao = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`


function OpcoesHeader(){
    return(
        <ConjuntoDeOpcoes>
            {textoOpcoes.map((texto)=>(
                <Opcao>
                    <p>{texto}</p>
                </Opcao>
            ))}
        </ConjuntoDeOpcoes>
    )
}

export default OpcoesHeader