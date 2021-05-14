import styled from 'styled-components';

export const Container = styled.div`
   
   max-width:100%;
  min-height:840px;
    
    position: relative;
    align-items:center;
    justify-content: space-around;
    display:flex;
padding:45px;
   

`
export const Cadastro = styled.div`
   
   width:1600px;
   max-height: 100%;
   padding:10px;
   display:flex;
   flex-direction:column;
   border-radius:15px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.7);
   color:rgb(112,112,112);
   margin-top:-60px;
   

`
export const TopSide = styled.div`
   width: 100%;
   margin-top:20px;
   margin-bottom:20px;
   height: 67px;
   display:flex;
   justify-content: center;

   span{
      text-decoration:none;
      width: 260px;
      height: 67px;
      font-size:60px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#B24C4E;
   }


`
export const Centro = styled.div`

   width: 100%;
   display:flex;
   justify-content: center;
   flex-wrap:wrap;
   position: relative;
   max-height: 100%;
   #senhas{
      width: 100%;
      height: 80px;

display:flex;
align-items:center;
button{
   background:none;
   border:none;
   position:relative;
margin-top:16px;
margin-left:-55px;
   width: 50px;
      height: 40px;

}
   }

`
export const Form1 = styled.div`
   width: 700px;
   display:flex;
   flex-direction:column;
   
   .inputCadastro{
   
      width: 90%;
      height: 70px;
      margin-top: 20px;
      padding-left:10px;
      border:none;
      border-radius:10px;
      
      font-size:25px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      color:rgb(112,112,112);
    
   };
   .DatePicker :popper{
      width: 400px;
      
   }
   .inputDataCadastro{
   
     
      width: 90%;
      height: 50px;
      border:none;
      border-radius:10px;
     
      font-size:25px;
      padding-left:10px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      color:rgb(112,112,112);
   };
   .labelCadastro{
   
      margin-top: 20px;
      width: 90%;
      height: 30px;
      border:none;
      
      
      font-size:19px;
      padding-left:10px;
      
      color:rgb(112,112,112);
   
   
   };
   


`
export const Form2 = styled.div`
   width: 700px;
   flex-direction:column;
   display:flex;
  

.inputCadastro{
  
   width: 90%;
   height: 70px;
   margin-top: 20px;
   border:none;
   border-radius:10px;
   font-size:25px;
   padding-left:10px;
  
   box-shadow:10px 30px 90px rgba(112,112,112,0.2);
   color:rgb(112,112,112);

 };
 .inputDataCadastro{
  
    width: 90%;
    height: 50px;
    border:none;
    border-radius:10px;
    font-size:25px;
    padding-left:10px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.2);
    color:rgb(112,112,112);
 };
 .labelCadastro{
  
      width: 90%;
      height: 30px;
      margin-top: 20px;
      border:none;
      font-size:19px;
      padding-left:10px;
      color:rgb(112,112,112);
 };
`
export const BottomSide = styled.div`
   width: 100%;
   height:220px;
   
   flex-direction:column;
   align-items:center;
   justify-content: center;
   display:flex;
   h3{
      width: 100%;
      margin-top:20px;
      margin-bottom:50px;
      font-size:20px;
      align-items:center;
      justify-content: center;
      display:flex;
      flex-wrap: wrap;
         a{
           
         margin-left:5px;
         margin-right:5px;
         color:#3D80F3;
         }
      

   }
   .btnCadastrar{
      margin-bottom:15px;
      width: 50%;
      height: 78px;
      border:none;
      border-radius:40px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      background:#6D3E5D;
      color: white;
      font-size:30px;
      cursor:pointer;
   };

   .btnCadastrar:hover{
      background:#C79518;
   };

`

