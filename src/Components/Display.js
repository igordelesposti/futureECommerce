import React from "react";
import styled from 'styled-components';
import CarrinhoCompra from './CarrinhoCompra';


const ContainerDisplay = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr;
 
 
  main{
  display:grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  margin: 10px;
  width: 120vh;
  height: 81vh;
  grid-gap: 10vh;
}



main>.item{
  margin: 5px;
  border: 1px dashed #fd79a8;
  align-items: center;
  width: 16vw;
  height: 41vh;
}

main>.item>img{
  width: 15vw;
  height: 25vh;
  padding: 5px;
}

main>div>a{
  margin-left: 2px;
  text-decoration: none;
  color: #a29bfe;
}



button{
    margin-left: 7px;
    height: 6vh;
    width: 15vw;
    color: #dfe6e9;
    font-size: 13px;
    background-color: #2d3436;
    box-shadow: none;
    border-style: none;
    border-radius: 10px;
:hover {
background: darkorange;
  } 
}
`

class Display extends React.Component {


inicioCascataFiltros=()=>{
//filtroValor
  const produtosFiltrados = this.props.itensVenda.filter((elemento)=>{
    return ((Number(elemento.preco) >= this.props.filtroMenor) && 
    (Number(elemento.preco) <= this.props.filtroMaior))
  })
  return this.filtroBusca(produtosFiltrados)  
};

filtroBusca=(produtosFiltrados)=>{
  const filtrados = produtosFiltrados.filter((elemento)=>{
    const nomeMinusculo = elemento.nome.toLowerCase();
    const textoBusca = this.props.textoBusca
    
    return (nomeMinusculo.includes(textoBusca));
  })
    return this.filtroOrdenacao(filtrados);
};


filtroOrdenacao=(filtrados)=>{

  switch (this.props.valorOrdenacao){
    case "nenhum":
      return this.insereItemVenda(filtrados);

    case "crescente":
      const listaCrescente = filtrados.sort( (a , b) => a.preco - b.preco);
      return this.insereItemVenda(listaCrescente);

    case "decrescente":
      const listaDecrescente = filtrados.sort( (b , a) => a.preco - b.preco);
      return this.insereItemVenda(listaDecrescente);
  }
};

insereItemVenda=(produtosFiltrados)=>{
  const auxiliar = produtosFiltrados.map((elemento,index)=>{
    return (<div className="item" key={index}>
            <img src={elemento.imagem}/>
            <a>{elemento.nome}<br/>R$ {elemento.preco}</a>
            <br/><br/>
            <button onClick={()=>this.adicionarAoCarrinho(elemento.id)}>Adicionar ao carrinho</button>
            </div>);
  })
  return auxiliar;
};

adicionarAoCarrinho=(id)=>{
  this.props.adicionarAoCarrinho(id);
};

removeItemCarrinho=(id)=>{
  this.props.removeItemCarrinho(id);
};

  render() {
    return(
      <ContainerDisplay> 
        <main>
          {this.inicioCascataFiltros()}
        </main>

      <CarrinhoCompra 
      meuCarrinhoDisplay={this.props.meuCarrinho} 
      removeItemCarrinho={this.removeItemCarrinho}/>

      </ContainerDisplay>
      );
  };
}

export default Display;