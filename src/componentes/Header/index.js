import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import OpcoesIcones from '../OpcoesIcones/'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: aliceblue;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <OpcoesIcones/>
        </HeaderContainer>
    )
}
export default Header

