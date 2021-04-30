import styled from 'styled-components';

export const Container = styled.div`

width: 100%;//1920px;
   height: 864px;
    
    position: relative;
    align-items:center;
    display:flex;
    justify-content: center;
    display:flex;
   

`
export const Progresso = styled.div`
position: relative;
  width: 1700px;
  height: 710px;
  display:flex;

  flex-direction:column;
  padding:10px;
  border-radius:15px;
  box-shadow:10px 30px 90px rgba(112,112,112,0.7);
  color:rgb(112,112,112);
  //zoom: 1.2;

  

`

export const TopSide = styled.div`
 margin-left:40px;

  width: 1600px;
  height: 110px;
  padding:20px;
  margin-bottom:0px;
  box-shadow: none;
  display:flex;
  align-items:center;
  justify-content: space-around;


  button{
  
    width: 350px;;
    height: 110px;
    border: none;
    box-shadow: none;
    background:#DAA520;
  }


`
export const divisao = styled.div`

margin-left:40px;
  width: 1640px;

  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display:flex;
  flex-direction:column;

  #labels{
    width: 1640px;
    display:flex;
    flex-direction:inline;
    
justify-content: space-around;

  }
  h1{
    margin-top:20px;
    margin-left:-30px;
    display:flex;
    align-items: center;
    justify-content: center;
    color:#A54786;
    text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);
    font-size:40px;

  }


`
export const Centro = styled.div`

margin-left:40px;
  width: 1640px;
  height: 500px;
  display:flex;
  
  align-items: center;
  justify-content: space-around;

position: relative;
`
export const LeftSideCentro = styled.div`

  width: 800px;
  height: 420px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  
 

`
export const Scroll = styled.div`

   width: 800px;
  height: 420px;
  align-items: center;
 // justify-content: center;

display:flex;
position: relative;
flex-direction:column;

overflow-y: scroll;
`
export const RightSideCentro = styled.div`

width: 800px;
  height: 420px;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  




`

