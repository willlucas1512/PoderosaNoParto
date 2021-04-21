import styled from 'styled-components';

export const Container = styled.div`
    max-width:100%;
   height: 905px;
    
    position: relative;
    align-items:center;
    display:flex;
    //align-items:center;
    justify-content: space-around;
    display:flex;


`
export const LeftSide = styled.div`
 
    width:900px;
    height:700px;
    margin-left:50px;
    display:flex;
    
    
    border-radius:5%;
box-shadow:2px 2px 10px #707070;

h3{
      width: 95%;
      height:700px;
      margin-left:20px;
     
      font-size:30px;
     flex-direction:column;
    text-align:center;
      display:flex;
 
   

   }

`
export const RightSide = styled.div`

width:900px;
    height:700px;
      align-items:center;
    display:flex;
    border-radius:5%;
box-shadow:2px 2px 10px #707070;
padding:10px;

p{
    display:flex;
    flex-direction:inline;
    
}
span{

display:flex;
margin-top:-250px;
margin-left:30px;
position: relative;
height: 70px;
width:70px;
color: black;
font-weight: bold;
font-size: 30px;
margin-top:-20px;

}
a{
  
display:flex;
align-items:center;
margin-left:40px;
position: relative;
height: 70px;
width:460px;
color: black;
font-weight: bold;
font-size: 30px;
margin-top:-20px;

text-align:center;
}
  
`

export const Scroll = styled.div`
  width:900px;
    height:600px;
//background:green;
display:flex;
position: relative;
flex-direction:column;

overflow-y: scroll;
`
export const TopRightSide = styled.div`
  width:900px;
    height:80px;

display:flex;
position: relative;

a{
    width:900px;
    height:80px;
    color:#A54786;
    text-align:center;
    font-size: 40px
}


`

