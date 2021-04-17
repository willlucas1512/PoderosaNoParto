import styled from 'styled-components';

export const Container = styled.div`

  background: ${props => props.actived ? '#C79518' : '#6D3E5D'};
  
  height: 100px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-left:-10px;
  border:solid rgba(112,112,112,0.2);
 

  width:600px;
 
  border-radius:30px;
  margin-bottom:20px;
  border: none;
 


  img {
    
    margin-left:20px;
    width: 31px;
    height: 62px;
  }

 
  span {
    width:460px;
    height: 70px;
    color: #FFF;
    font-weight: bold;
    font-size: 30px;
    margin-bottom:2px;
    display:flex;
    align-items:flex-end;
    justify-content:flex-end;
  }


  &:hover{
    background: #C79518;
    
  }



`


