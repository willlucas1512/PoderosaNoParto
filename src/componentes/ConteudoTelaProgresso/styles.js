import styled from 'styled-components';

export const Container = styled.div`

    max-width: 100%;
   min-height: 864px;
    
    position: relative;
    align-items:center;
    display:flex;
    justify-content: center;
    display:flex;
   

`
export const Progresso = styled.div`
   flex-direction:column;
   width: 80%;
   margin:30px;
   max-height: 100%;
   padding:10px;
   display:flex;
  flex-direction:column;
   border-radius:15px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.7);
   color:rgb(112,112,112);
   margin-bottom:30px;
   flex-wrap:wrap;


  

`

export const TopSide = styled.div`



  max-width: 100%;
  min-height: 110px;
  max-height: 510px;
  padding:20px;
  margin-bottom:0px;
  box-shadow: none;
  display:flex;
  align-items:center;
  justify-content: space-around;
  flex-wrap:wrap;


  button{
  margin:20px;
    width: 350px;;
    height: 110px;
    border: none;
    box-shadow: none;
    background:#DAA520;
  }


`
export const divisao = styled.div`


width: 100%;

  display:flex;
  align-items: center;
  justify-content: center;
  position: relative;
  display:flex;


 


`
export const Centro = styled.div`

width: 100%;
   display:flex;
   justify-content: center;
   flex-wrap:wrap;
   position: relative;
   max-height: 100%;
`
export const LeftSideCentro = styled.div`

  max-width: 800px;
  min-height: 420px;
  display:flex;
  align-items: center;
  flex-direction:column;
  #labels{
    width: 410px;
    margin:20px;
    display:flex;
 
 
justify-content: space-around;
h1{

color:black;
}


  }
 

`
export const Scroll = styled.div`

   max-width: 800px;
  max-height: 300px;
  align-items: center;
 
margin:40px;
display:flex;
position: relative;
flex-direction:column;

overflow-y: auto;
`
export const RightSideCentro = styled.div`

width: 800px;
  max-height: 420px;
  display:flex;
  align-items: center;
 
  flex-direction:column;
  
  #labels{
    width: 230px;
    margin:20px;
   // margin-left:50px;
    display:flex;
    //flex-direction:inline;

justify-content: center;
h1{

  color:black;
}

  }



`

