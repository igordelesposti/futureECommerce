import React from 'react';
import styled from 'styled-components';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Display from './Components/Display';
import Footer from './Components/Footer';


const Container = styled.div`
  display:grid;
  grid-template-rows: 20vh 8vh 100vh 10vh;
  font-family: 'Roboto', sans-serif;
`


class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      itensVenda:[
        {
        id: 234568,
        nome: "Viagem à Lua",
        imagem: require("./imagens/1.png"),
        preco: 20000
        },
        {
        id: 153497,
        nome: "BootCamp Astronauta",
        imagem: require("./imagens/2.jpg"),
        preco: 8999
        },
        {
        id: 158526,
        nome: "Bico da aeronave",
        imagem: require("./imagens/3.jpg"),
        preco: 1500
        },
        {
        id: 822935,
        nome: "Viagem pela órbita da Terra",
        imagem: require("./imagens/12.jpg"),
        preco: 30000
        },
        {
        id: 579147,
        nome: "Foguete com pet",
        imagem: require("./imagens/7.png"),
        preco: 18999.00
        },
        {
        id: 222222,
        nome: "Espace Bus Tripulado",
        imagem: require("./imagens/8.png"),
        preco: 35000.00
        },
        {
        id: 467893,
        nome: "Espaçonaves Conceito",
        imagem: require("./imagens/9.jpg"),
        preco: 25350.00
        },
        {
        id: 111970,
        nome: "Foguete infantil",
        imagem: require("./imagens/10.png"),
        preco: 5899.00
        }
      ],
        meuCarrinho: [],
        filtroMenor: null,
        filtroMaior: Infinity,
        ordenacao: "nenhum",
        busca: ""
      }
    }


onChangeFiltroMenor=(event)=>{
  if(event===""){
     this.setState({filtroMenor: null});
  }else{
    this.setState({filtroMenor: event});
    }
};

onChangeFiltroMaior=(event)=>{
  if(event===""){
    this.setState({filtroMaior: Infinity});
  }else{
    this.setState({filtroMaior: event});
  }
};

onChangeSearch=(event)=>{this.setState({busca: event});};

onChangeOrdenacao=(event)=>{this.setState({ordenacao: event});}


adicionarAoCarrinho=(id)=>{
  const novoProduto = this.state.itensVenda.filter((elemento)=>{
    return elemento.id === id;
  })

  const carrinho = [...this.state.meuCarrinho, novoProduto[0]];

  this.setState({meuCarrinho: carrinho});
};

removeItemCarrinho = (id) =>{
  const itemRemovido = this.state.meuCarrinho.filter((elemento) =>{
    return (elemento.id !== id);
  })

  this.setState({meuCarrinho: itemRemovido});
};


 render(){

  return (
    <Container>
          <Header />
          <NavBar 
            onChangeSearch = {this.onChangeSearch}
            onChangeFiltroMenor = {this.onChangeFiltroMenor}
            onChangeFiltroMaior = {this.onChangeFiltroMaior}
            onChangeOrdenacao = {this.onChangeOrdenacao}
            valorFiltroMenor = {this.state.filtroMenor}
            valorFiltroMaior = {this.state.filtroMaior}
            valorTextoBusca = {this.state.busca}
          />
          <Display 
            itensVenda={this.state.itensVenda}
            filtroMenor={this.state.filtroMenor}
            filtroMaior={this.state.filtroMaior}
            valorOrdenacao={this.state.ordenacao}
            textoBusca={this.state.busca}
            meuCarrinho={this.state.meuCarrinho}
            adicionarAoCarrinho={this.adicionarAoCarrinho}
            removeItemCarrinho={this.removeItemCarrinho}/>
          <Footer />
    </Container>
  );
 } 

}

export default App;


//hamilton-ninja.surge.sh