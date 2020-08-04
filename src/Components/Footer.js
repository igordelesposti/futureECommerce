import React from "react";
import styled from 'styled-components';

        const FooterDiv = styled.div `
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #a29bfe;
            padding: 15px;
            background-color: #2d3436;
            font-weight: bolder;
            font-size: 100%;
            grid-row: 4;
            min-height: 140px;
        `
        
        const Title = styled.p `
            color: #a29bfe;
            margin: 0px;
            padding: 0px;
        `
        const ListaDevs = styled.ul `
        	list-style: none;
	        padding-left: 0px;
        `
        const ItensDevs = styled.li `
        	display: inline;
	        padding: 0px 30px;
        `
        const DivForOrganize = styled.div `
        display: flex;
        flex-direction: column;
        align-items: center;
        `
        const LinksSocialWebs = styled.a `
            color: #a29bfe;
            text-decoration: none;
            font-size: 30px;
        :hover {
            color: #FFC0CB;
        }
        `

class Footer extends React.Component {
  

    render() {


          
    return (
        <FooterDiv>
            <DivForOrganize>
                <ListaDevs>
                    <ItensDevs><LinksSocialWebs href="#"><i className="fab fa-facebook"></i></LinksSocialWebs></ItensDevs>
                    <ItensDevs><LinksSocialWebs href="#"><i className="fab fa-instagram"></i></LinksSocialWebs></ItensDevs>
                    <ItensDevs><LinksSocialWebs href="#"><i className="fab fa-bitcoin"></i></LinksSocialWebs></ItensDevs>
                    <ItensDevs><LinksSocialWebs href="#"><i className="fab fa-amazon-pay"></i></LinksSocialWebs></ItensDevs>
                    <ItensDevs><LinksSocialWebs href="#"><i className="fab fa-apple-pay"></i></LinksSocialWebs></ItensDevs>
                </ListaDevs>
            </DivForOrganize>
            
            <DivForOrganize>
                <ListaDevs>
                    <ItensDevs>Go and travel to the Future.</ItensDevs>
                </ListaDevs>
            </DivForOrganize>


        </FooterDiv>

    )

    }
}

export default Footer;
{/* <ImgSocialIcons src={require("../imagens/logo.png")} alt={require}/>
<ImgSocialIcons src={require("../imagens/logo.png")} alt={require}/>
<ImgSocialIcons src={require("../imagens/logo.png")} alt={require}/>
<ImgSocialIcons src={require("../imagens/logo.png")} alt={require}/> */}