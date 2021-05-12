import styled from 'styled-components';

export const Container = styled.div`
   
   max-width:100%;
  min-height:860px;
  
  padding:20px;
   display:flex;
   align-items:center;
    justify-content:center;

   

`
export const NovaSenha = styled.div`
   
   max-width:1600px;
   min-height: 80%;
  padding:50px;
   display:flex;
   flex-direction:column;
   border-radius:15px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.7);
   color:rgb(112,112,112);

   

`
export const TopSide = styled.div`

   width: 100%;
   height: 10%;
   top:0px;
   top:90px;
   display:flex;
   justify-content: center;
   margin-bottom:20px;
   span{
   
     text-align: center;
      width: 600px;
      height: 100px;
      display:flex;
      justify-content: center;
      align-items:center;
      
      font-size:60px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#B24C4E;//rgba(246,142,134,1) rosa
      margin-top:15px;
   }


`


export const Centro = styled.div`

width: 100%;
  min-height: 459px;
   display:flex;
 
 align-items:center;
   justify-content: center;
   flex-wrap:wrap;

   flex-direction:column;

   

   .inputNovaSenha{
      
      width: 95%;
      height: 80px;
      margin-top: 60px;
     
      padding-left:10px;
      border:none;
      border-radius:10px;
      font-size:25px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      color:rgb(112,112,112);
   };
  


`

export const BottomSide = styled.div`
width: 100%;
min-height:100px;
flex-direction:column;
align-items:center;
justify-content: center;
display:flex;

.btnNovaSenha{
    
   width: 40%;
    height: 80px;
    
    border:none;
    border-radius:30px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.2);
    background:#B24C4E;
    color: white;
    font-size:30px;
    cursor:pointer;
 };
 .btnNovaSenha:hover{
    
   background:#C79518;
  };


`

