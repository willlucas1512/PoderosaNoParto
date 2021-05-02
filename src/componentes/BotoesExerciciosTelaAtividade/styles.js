import styled from 'styled-components';

export const Container = styled.div`

  background: ${props => props.actived ? '#C79518' : '#6D3E5D'};
  width:600px;
  height: 100px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  margin-left:-10px;
  border:solid rgba(112,112,112,0.2);
  border-radius:30px;
  margin-bottom:20px;
  border: none;
  
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


