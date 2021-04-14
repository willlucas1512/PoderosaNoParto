import styled from 'styled-components';

export const Container = styled.div`
width: 100%;//1920px;
height: 100px;
background:#A54786;
border-bottom: 10px solid #DAA520;
display:flex;
position:relative;

img{
margin-top:20px;
margin-left:10px;
width:486px;
height:80px;

};



`

export const Menu = styled.div`

width:1920px;
height: 56px;
display:flex;
align-items: center;


.dividir::after{
    content:"|"; 
 color: #DAA520;//dourados
margin:0 1px;
font-size:30px;
font-style:arial;
padding:1px;
};
a{
 color:#A54786;// roxo

font-weight: bold;
text-decoration:none;
margin: 0px 5px;
font-size:30px;
font-style:arial;

&:hover{
   color: #DAA520;// dourado
}

};





`


