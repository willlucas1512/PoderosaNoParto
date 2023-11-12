import styled from 'styled-components';

const theme = {
   primary: "#010030",//azul escuro
   sencudary:"#fff",//branco
   tertiary:"#bbbacf",//zinza medio
   quaternary:"#162d34"// verde escuro
 }

export const Footer = styled.footer`
   background: ${theme.sencudary};
   width:100%;
   height: 90px;
   display:flex;
   align-items: center;
   justify-content:center;
   position: fixed;
   bottom: 0;
   border: 1px solid black;
`
export const Menu = styled.main`
  
   width:400px;
   height: 100%;
   display:flex;
   align-items: center;
   justify-content: space-around

`


