
import styled from 'styled-components';

export const Container = styled.div`
 display:flex;
 margin-left:85%;
 //flex-direction:column;
//background:yellow;
#respiracaoSuperficial{
display:${props => props.respiracaoSuperficialDoDia ? 'none' : 'hide'}

}
#respiracaoProfunda{
display:${props => props.respiracaoProfundaDoDia ? 'none' : 'hide'}

}
#relaxamento{
display:${props => props.relaxamentoDoDia ? 'none' : 'hide'}

}

.navbar {
   
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;
   
}

.menu-bars {
    display: flex;
    justify-content: flex-end;
    font-size: 2rem;
    margin-right: 2rem;

    width: 100%;

}

.nav-menu {
    background-color: white;
    width: 364px;
    height: 350px;
    display: flex;
    //justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;
    
    box-shadow:2px 2px 10px #707070;
border-style: inset;
}

.nav-menu.active {
    right: 0;
    transition: 350ms;
    z-index: 1;
}

.nav-text {
    
    display: flex;
    justify-content: space-around;
    align-items: space-around;
    padding: 8px 0px 8px 8px;
    list-style: none;
width:100%;
    height: 200px;
flex-direction:column;
}


   

label{
  
    display:flex;
      align-items:center;
      justify-content:center;
   
      width: 100%;
      height: 100px;
      
      font-size:30px;

display:flex;
align-items:center;

  
};
   


.nav-text a {
    text-decoration: none;
      color: #6D3E5D;
    font-size: 25px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
    
}



.nav-menu-items {//conteiner com toda tab
margin-top:-10px;

width: 100%;
padding-bottom:30px;
//background:yellow;


}


.navbar-toggle {//regiao do X
 

width:100%;
    height: 80px;
    display: flex;
    justify-content: start;
    align-items: center;

}
a {//opçoes do menu
   
margin-left:-30px; 

}
span {//opçoes do menu
    width:400px;
margin-left:-130px;
   

}
span:hover{

  color:#C79518;

}



`

export const Label = styled.div`
display:flex;
margin-top:15px;
margin-left:0px;
position:absolute;
width:27px;
height:27px;
border-radius:12px;
background: white;
align-items:center;
justify-content:center;
font-size:25px;

z-index: 1;

`




