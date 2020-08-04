import React from 'react';
import styled from 'styled-components'

const ContainerMenuCarrinho = styled.div`


.dropdown {
    position: relative;
    display: inline-block;
    background:white;
    width: 200px;
    float: right;
    background: pink;
    
}
.ConteudoCarrinho {
    display:flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 20px;
    top:88px;
    right:15px;
    width: 250px;
    background-color: #dfe6e9;
    color: black;
    font-weight:bold;
    position: absolute;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    opacity: 0.8;
    border-radius: 10px;
    
}

p{
    padding: 8px 16px;
    border-bottom: 1px solid #e5e5e5;
}

p:last-child{
    border-bottom: none;
}


.button{
    content:""; 
    position:absolute;
    right: 15%;
    top:15px;
    width: 59px;
    height: 59px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 5px #00000059;
    cursor: pointer;
    transition: 0.5s;
}
.button:hover{
    
    box-shadow: 0 0 20px darkorange;
 
}

`
const ImagemCarrinho = styled.img`
width: 35px;
height: 35px;
padding-left: 11.9px;
padding-top: 11.8px;
`

class DropDownMenu extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.mostrarDropdownMenu = this.mostrarDropdownMenu.bind(this);
  this.esconderDropdownMenu = this.esconderDropdownMenu.bind(this);

};

mostrarDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.esconderDropdownMenu);
    });
  }

  esconderDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.esconderDropdownMenu);
    });

  }

  render() {
    return (
            
        <ContainerMenuCarrinho>   
            <div  className="dropdown">
                <div className="button" 
                    onClick={this.mostrarDropdownMenu}>
                    <ImagemCarrinho src={require("../icones/shopping-cart.png")} alt={"carrinho"}/>  
                </div>

                { this.state.displayMenu ? (
                    
                    <div className="ConteudoCarrinho">
                        {this.props.children}
                    </div>
            

                ):
                (
                null
                )
                }

            </div>
        </ContainerMenuCarrinho> 
    );
  }
}

export default DropDownMenu;
