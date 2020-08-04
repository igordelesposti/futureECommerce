import React, { PureComponent } from "react";
import styled from 'styled-components';
import DropDownMenu from '../Components/DropDownMenu'

const ContainerCarrinho = styled.div`
    background-color:white;
`
const IconeDelete = styled.img `
    width: 20px;
    margin-left: 15px;
`

const ItemCarrinho = styled.div`
    
    display: flex;
    justify-content: space-between;
`
const AlinhamentoCarrinhoDeCompras = styled.h4`
    margin: 0 auto;
    padding: 30px;
`

const Total = styled.div`
    width:fit-content;
    color: #0984e3;
    background-color: black;
    font-style: bold;
    margin: 0 auto;
    padding: 5px;
    border-radius: 5px;
`

class CarrinhoCompra extends React.Component{


renderizarItensCarrinho=()=>{
    const auxiliar = this.props.meuCarrinhoDisplay.map((produto)=>{
        return (<ItemCarrinho>{produto.nome}
                <buttton onClick={()=>this.props.removeItemCarrinho(produto.id)}>
                    <IconeDelete src={require("../icones/delete.png")}/>
                </buttton>    
                </ItemCarrinho>);
    })
    return auxiliar;
}


totalCarrinho=()=>{
    let sum=0;

    const soma = this.props.meuCarrinhoDisplay.forEach((produto)=>{
        sum = sum + produto.preco;
        return sum;
    })

    return (<Total>Total R$ {sum}</Total> )
}


render(){
    return(
        
        <ContainerCarrinho>
            <DropDownMenu>
                <AlinhamentoCarrinhoDeCompras>
                    Carrinho de compras
                </AlinhamentoCarrinhoDeCompras>
                {this.renderizarItensCarrinho()}
                <br/><br/>
                {this.totalCarrinho()}
           </DropDownMenu>            
            
            
        </ContainerCarrinho>
        
    )
}

}
export default CarrinhoCompra;