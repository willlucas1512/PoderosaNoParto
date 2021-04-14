import styled from 'styled-components';

export const Container = styled.div`

   max-width:100%;
   height: 840px;
    
    position: relative;
    align-items:center;
    display:flex;
    //align-items:center;
    justify-content: center;
    display:flex;
   

`
export const Progresso = styled.div`
position: relative;
  width: 80%;
  height: 650px;
  display:flex;
  flex-direction:column;
  padding:10px;
  border-radius:15px;
  box-shadow:10px 30px 90px rgba(112,112,112,0.7);
  color:rgb(112,112,112);
  zoom: 1.2;

  

`

export const TopSide = styled.div`
  position: relative;
  width: 97%;
  height: 67px;
  padding:20px;
  margin-bottom:0px;
  box-shadow: none;
  display:flex;
  align-items:center;
  justify-content: space-around;


  button{

    width: 20%;
    height: 80px;
    border: none;
    box-shadow: none;
    background:#DAA520;
  }


`
export const divisao = styled.div`

  width: 100%;
  margin-bottom:20px;
  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;

`
export const Centro = styled.div`
//background:green;
  width: 100%;
  height: 500px;
  display:flex;
  //flex-direction:in-line;
  align-items: center;
  justify-content: space-around;

position: relative;
`
export const LeftSideCentro = styled.div`

  width: 48%;
  height: 459px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;

  h1{

    display:flex;
    align-items: center;
    justify-content: center;
    color:#A54786;
    text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);

  }

`
export const Scroll = styled.div`




overflow-y: scroll;
`
export const RightSideCentro = styled.div`

  width: 48%;
  height: 459px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;

  h1{

  display:flex;
  align-items: center;
  justify-content: center;
  color:#A54786;
  text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);

  }

  img{

   width:620px;
   height:361px ;

  }




`

