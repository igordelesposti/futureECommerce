import React from 'react';
import styled from 'styled-components';
// import DropDownMenu from '../Components/DropDownMenu'

const Container = styled.div`
  background-color: pink;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const CaixaInput = styled.div`

`

class NavBar extends React.Component{


onChangeFiltroMenor = (event) => {
    return this.props.onChangeFiltroMenor(event.target.value)
}
onChangeFiltroMaior = (event) => {
    return this.props.onChangeFiltroMaior(event.target.value)
}
onChangeBusca = (event) =>{
    const texto = event.target.value;

    return this.props.onChangeSearch(texto.toLowerCase());
}
onChangeOrdenacao = (event)=>{
    const ordenacao = event.target.value;

    return this.props.onChangeOrdenacao(ordenacao);
}



render(){

return(
    <Container>
        <CaixaInput>
            <label>Valor Mínimo: </label>
            <input type="number" onChange={this.onChangeFiltroMenor} value={this.props.valorFiltroMenor}></input>
        </CaixaInput>
       
       <CaixaInput>
            <label>Valor Máximo: </label>
            <input type="number" onChange={this.onChangeFiltroMaior} value={this.props.valorFiltroMaior}></input>
       </CaixaInput>

        <CaixaInput>
            <label>Filtrar por: </label>
            <select onChange={this.onChangeOrdenacao}>
                <option value="nenhum">Nenhum</option>
                <option value="crescente">Preço: Crescente</option>
                <option value="decrescente">Preço: Decrescente</option>
            </select>
        </CaixaInput>

        <CaixaInput>
            <label>Buscar produto: </label>
            <input onChange={this.onChangeBusca} value={this.props.valorTextoBusca}></input>
        </CaixaInput>

        
    </Container>
    )

}

}
export default NavBar;