import styled from 'styled-components';

export const Container = styled.div`
  width: 360px;
  height: 120px;
  background: ${props => props.actived ? '#DAA520' : '#6D3E5D'};
  margin-left:-7px;
  

  border-radius: 5px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img {
margin-left:10px;
    width: 25px;
    height: 25px;
  }

  span {

    color: #FFF;
    font-weight: bold;

    align-self: flex-end;
margin-right:20px;
    font-size: 20px;
  }

  &:hover{
    //background: #1FE26D;
  }
`