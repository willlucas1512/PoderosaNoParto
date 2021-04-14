import styled from 'styled-components';

export const Container = styled.div`
width:100%;
min-height:60px;
background:#A54786;
border-top: 5px solid #DAA520;
position:relative;
display:flex;
align-items:center;
justify-content: center;
a{
    color: white;
    font-weight: bold;
    text-decoration:none;
    margin: 0 10px;
    font-size:20px;
    
    &:hover{
        color: #DAA520;
    }
    
    };
    .dividir::after{
    content:"|";
    color: white;
    margin:0 5px;
    
    }
    
`




