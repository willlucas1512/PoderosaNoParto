
import styled from 'styled-components';

export const Container = styled.div`
 display:flex;
align-items: center;
margin-left:3%;

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
    justify-content: center;
    position: fixed;
    top: 0;
    right: -100%;
    transition: 850ms;

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
    padding: 8px 0px 8px 16px;
    list-style: none;
width:100%;
    height: 200px;
flex-direction:column;
 //background:green;
}

.nav-text a {
    text-decoration: none;
    color: #A54786;
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

box-shadow:2px 2px 10px #707070;
}


.navbar-toggle {//regiao do X
 
  //background-color:#F68E86;//rgba(246,142,134,1) rosa
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

  color:#DAA520;//rgba(246,142,134,1) rosa

}


`






