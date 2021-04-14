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
export const LeftSide = styled.div`
    width:960px;
    height:850px;
    margin-left:50px;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction:column;
  

  img{
    width: 831px;
    height: 602px;
    display:flex;
    align-items:center;
    justify-content: center;
  }

  label{
        
    width: 931px;
    height: 67px;
    display:flex;
    align-items:center;
    justify-content: center;
    margin-left:-40px;
    font-size:45px;
    margin-bottom:10px;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);
    color:#A54786;
        

  }


`
export const RigthSide = styled.div`

width:960px;
    height:850px;
  
    align-items:center;
    justify-content: center;
    display:flex;
    flex-direction:column;
  #respiracaoSuperficial{
  display:${props => props.respiracaoSuperficialDoDia ? "none" : "hide"};

  }
  #respiracaoProfunda{
  display:${props => props.respiracaoProfundaDoDia ? "none" : "hide"};

  }
  #relaxamentoDoDia{
  display:${props => props.relaxamentoDoDia ? "none" : "hide"};

  }

  label{

    width:80%;
    height: 67px;
    display:flex;
   
    justify-content: center;
    font-size:45px;
    margin-top:-90px;
    margin-bottom:90px;
    font-weight: bold;
    text-shadow: 0.1em 0.1em 0.2em rgba(112,112,112,0.5);
    color:#A54786;



  
    align-items:center;
   
  

  }
  button{

  width:600px;
  height: 100px;
  border-radius:30px;
  margin-bottom:20px;
  border: none;
  cursor:pointer;


  }

  .btnAdicionarAtividade{
      

  width:600px;
  height: 100px;
  border-radius:30px;
  margin-bottom:20px;
  border: none;
  cursor:pointer;
  background:#A54786;
  border:solid rgba(112,112,112,0.2);
  display:flex;

 



  }
  .btnAdicionarAtividade:hover{
    
    background:#DAA520;

  }


  img {
    
    margin-left:20px;
    width: 31px;
    height: 62px;
  }

  
  span {
 
  
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
    height: 70px;
    width:460px;
    color: #FFF;
    font-weight: bold;
    font-size: 30px;
    margin-bottom:2px;
  }


    




`
