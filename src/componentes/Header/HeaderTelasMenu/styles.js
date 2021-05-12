import styled from 'styled-components';

export const Container = styled.div`

background:#6D3E5D;
border-bottom: 10px solid #C79518;
height:130px;



`
export const LeftSide = styled.div`
width: 100%;//1920px;
height: 100px;
//zoom: 1.2;

display:flex;
align-items:center;

img{

margin-top:30px;
margin-left:10px;
width:430px;
height:80px;
    
    }
    .navegacoes{
        display:flex;
        width:82%;
    
        align-items:center;
        justify-content: center;
    }

`


export const Menu = styled.div`



.dividir::after{
    content:"|"; 
 color: #C79518;
margin:0 1px;
font-size:30px;
font-style:arial;
padding:1px;

};
a{
color:#6D3E5D;
font-weight: bold;
text-decoration:none;
margin: 0px 5px;
font-size:30px;
font-style:arial;

&:hover{
    
color: #C79518;
}

};





`


