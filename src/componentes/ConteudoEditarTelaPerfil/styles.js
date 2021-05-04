import styled from 'styled-components';

export const Container = styled.div`
   
   width: 100%;//1920px;
   height: 905px;
   display:flex;
   align-items:center;
   justify-content: center;

   

`
export const EditarPerfil = styled.div`
   
   width: 1400px;
   height: 85%;
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
   top:0px;

   display:flex;
   justify-content: center;

   a{
    

      width: 330px;
      height: 67px;
      font-size:60px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#A54786;
   }


`
export const Centro = styled.div`
   width: 100%;
   height: 459px;
   display:flex;

   justify-content: center;

`
export const Form1 = styled.div`
 width: 690px;
   height: 459px;
  
   justify-content: space-around;
   display:flex;
   flex-direction:column;
   
   .inputEditarPerfil{
   
      width: 650px;
  height: 50px;
  display:flex;
  align-items:center;
  margin-top: 20px;
  margin-left:20px;
  border:none;
  border-radius:10px;
  font-size:25px;
  padding-left:10px;
  box-shadow:10px 30px 90px rgba(112,112,112,0.2);
  color:rgb(112,112,112);
   };

  
   


`
export const Form2 = styled.div`
  
width: 690px;
   height: 459px;
  
   justify-content: space-around;
   display:flex;
   flex-direction:column;

.inputEditarPerfil{
  
   width: 650px;
  height: 50px;
  display:flex;
  align-items:center;
  margin-top: 20px;
  margin-left:20px;
  border:none;
  border-radius:10px;
  font-size:25px;
  padding-left:10px;
  box-shadow:10px 30px 90px rgba(112,112,112,0.2);
  color:rgb(112,112,112);

 };

`
export const BottomSide = styled.div`
   width: 100%;
   height:280px;
   flex-direction:column;
   align-items:center;
   justify-content: center;
   display:flex;
   h3{
      width: 100%;
      margin-top:50px;
      margin-bottom:50px;
      font-size:20px;
      align-items:center;
      justify-content: center;
      display:flex;
         a{
         margin-left:5px;
         margin-right:5px;
         }

   }
   .btnCadastrar{
      margin-bottom:50px;
      width: 50%;
      height: 68px;
      border:none;
      border-radius:40px;
      box-shadow:10px 30px 90px rgba(112,112,112,0.2);
      background:rgba(0, 0, 249, 0.5);//azul
      color: white;
      font-size:25px;
      cursor:pointer;
   };



`

