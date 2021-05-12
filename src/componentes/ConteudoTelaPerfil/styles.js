import styled from 'styled-components';

export const Container = styled.div`
    max-width:100%;
  min-height:800px;
  
  padding:20px;
   display:flex;
   align-items:center;
    justify-content:center;
  
 

`
export const Perfil = styled.div`
 
   max-width:1600px;
   min-height: 80%;
  
   display:flex;
   flex-direction:column;
   border-radius:15px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.7);
   color:rgb(112,112,112);
  

`
export const TopSide = styled.div`
   width: 100%;
   height: 90px;
   display:flex;
   justify-content: center;
   align-items:center;

   span{
    
    
      width: 160px;
      height: 50px;
      font-size:60px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#A54786;
      display:flex;
   justify-content: center;
  align-items:center;
   }


`
export const Centro = styled.div`

   width: 100%;
  min-height: 459px;
   display:flex;
 margin:50px;
 align-items:center;
   justify-content: center;
   flex-wrap:wrap;

`
export const Form1 = styled.div`
   width: 690px;
   height: 439px;
  
   justify-content: space-around;
   display:flex;
   flex-direction:column;
  
   .labelPerfil{
  
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
   height: 439px;
  
   justify-content: space-around;
   display:flex;
   flex-direction:column;

.labelPerfil{
   
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
  min-height:180px;
   flex-direction:column;
   align-items:center;
   justify-content: center;
   display:flex;
  
  
   .btnEditarPerfil{
   
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

