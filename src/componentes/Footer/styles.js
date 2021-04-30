import styled from 'styled-components';

export const Container = styled.div`
width:100%;
min-height:60px;
background:#6D3E5D;
border-top: 5px solid #C79518;
position:relative;
display:flex;
align-items:center;
justify-content: center;
a{
    color: white;
    font-weight: bold;
    text-decoration:none;
    margin: 0 10px;
    font-size:23px;
    
    &:hover{
        color: #C79518;
    }
    
    };
    .dividir::after{
    content:"|";
    color: white;
    margin:0 5px;
    
    }
    
`




