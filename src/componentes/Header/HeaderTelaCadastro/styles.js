import styled from 'styled-components';

export const Container = styled.div`
width: 100%;//1920px;
height: 100px;
background:#6D3E5D;
border-bottom: 10px solid  #C79518; //dourado
display:flex;

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
content:">";
color: #DAA520;//dourados
margin:0 1px;
font-size:33px;
font-style:arial;
padding:1px;
}
h3{
width:120px;

   color: #C79518;
font-weight: bold;
text-decoration:none;
margin: 0 5px;
font-size:30px;
font-style:arial;

    

    
    };
a{
width:80px;

color: #A54786;
font-weight: bold;
text-decoration:none;
margin: 0px 5px;
font-size:30px;
font-style:arial;

&:hover{
    color:#C79518;
};

};




`


