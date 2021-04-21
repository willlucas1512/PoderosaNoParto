import styled from 'styled-components';

export const Container = styled.div`
   
   width: 100%;//1920px;
   height: 905px;
   display:flex;
   align-items:center;
   justify-content: center;

   

`
export const NovaSenha = styled.div`
   
   width: 60%;
   height: 80%;
   padding:10px;
   display:flex;
   align-items:space-around;
   flex-direction:column;
   border-radius:15px;
   box-shadow:10px 30px 90px rgba(112,112,112,0.7);
   color:rgb(112,112,112);
   margin-top:-60px;

   

`
export const TopSide = styled.div`

   width: 100%;
   height: 10%;
   margin-top: 70px;
   display:flex;
   justify-content: center;

   a{
     
      width: 100%;
      display:flex;
      justify-content: center;
      align-items:center;
      height: 67px;
      font-size:40px;
      font-weight: bold;
      text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);//#707070 cinza
      color:#6D3E5D;//rgba(246,142,134,1) rosa
   }


`


export const Centro = styled.div`

   width: 100%;
   height: 100%;
   align-items:center;
   //justify-content:center;
   display:flex;
   flex-direction:column;
   #senhas{
      display:flex;
      align-items:center;
      justify-content:center;
    //  background:yellow;
      width: 100%;
      height: 130px;

display:flex;
align-items:center;
input{
  
 margin-top: 30px;
  width: 60%;
  height: 70px;
  border-radius:30px;
  font-size:19px;
  padding-left:10px;
  color:rgb(112,112,112);


};
button{
   background:none;
  border:none;
   position:relative;
margin-top:20px;
margin-left:-65px;
   width: 50px;
      height: 40px;

}
   }
 

  




`

export const BottomSide = styled.div`
width: 100%;
height:20%;
margin-top:-350px;
flex-direction:column;
align-items:center;
justify-content: center;
display:flex;
//background:green;
.btnNovaSenha{
    background:green;
   width: 40%;
    height: 68px;
    border:none;
    border-radius:40px;
    box-shadow:10px 30px 90px rgba(112,112,112,0.2);
    background:#6D3E5D;
    color: white;
    font-size:25px;
    cursor:pointer;
 };
 .btnNovaSenha:hover{
    
   background:#C79518;
  };


`

