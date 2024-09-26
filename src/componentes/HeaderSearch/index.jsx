import { styled } from "styled-components"
import search from './search-line.svg'


const ContainerEstilizado = styled.div `
    position: relative;
    display: inline-block;

`;

const HeaderSearchEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #0084ff;
    background: transparent;
    box-sizing: border-box;
    width: 566;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const HeaderSearch = (props) => {
    return(

        <ContainerEstilizado>
            <HeaderSearchEstilizado placeholder="O que voce Procura?" {...props} />
            <IconeLupa src={search} alt="Icone de Lupa"/>
        </ContainerEstilizado>
    )
    
}

export default HeaderSearch;