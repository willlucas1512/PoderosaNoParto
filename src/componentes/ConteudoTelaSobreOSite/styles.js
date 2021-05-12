import styled from 'styled-components';

export const Container = styled.div`
   
   width: 100%;//1920px;
   min-height:850px;
   position: relative;
    align-items:center;
    justify-content: space-around;
    display:flex;

   

`
export const Conteudo = styled.div`
   flex-direction:column;
   width: 80%;
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

   width: 100%;
   margin-top:20px;
   margin-bottom:20px;
   height: 97px;

   display:flex;
   align-items:center;
   justify-content: center;

   .a2{
     
      width: 350px;
      height: 67px;
      font-size:60px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#B24C4E;
     // background:yellow;
   }


`
export const Centro = styled.div`

width: 100%;
   display:flex;
   justify-content: center;
   flex-wrap:wrap;
   position: relative;
   max-height: 100%;
   h3{
      width: 100%;
     
      margin-bottom:10px;
      font-size:30px;
      text-align:start;
     
      display:flex;
  
         a{
          
            font-size:35px;
            color:#B24C4E;
            text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
            font-weight: bold;
         margin-left:5px;
         margin-right:5px;
         
         }
         

   }
`

export const BottomSide = styled.div`
   width: 95%;
   height:180px;
margin:40px;
   align-items:center;
   justify-content: center;
   display:flex;
  
   h3{
     
      width: 100%;
      margin-top:50px;
      margin-bottom:50px;
      font-size:25px;
      align-items:center;
      justify-content: center;
      display:flex;
      text-align:center;
 
      a{
         text-decoration: none;
          font-size:25px;
          color:#3D80F3;
          font-weight: bold;
       margin-left:5px;
       margin-right:5px;
       }
       a:hover{
         text-decoration: underline;
        
       }
   }
   .btnCadastrar{
      margin-bottom:50px;
      width: 50%;
      height: 68px;
      border:none;
      border-radius:40px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      background:#6D3E5D;
      color: white;
      font-size:25px;
      cursor:pointer;
   };

   .btnCadastrar:hover{
      background:#C79518;
   };

`

