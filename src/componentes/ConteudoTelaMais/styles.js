import styled from 'styled-components';

export const Container = styled.div`
     max-width:100%;
  min-height:850px;
    margin:10px;
    position: relative;
    align-items:center;
    justify-content: space-around;
    display:flex;
    flex-wrap:wrap;


`

export const LeftSide = styled.div`
   
    width:900px;
    height:700px;
    margin:50px;
    display:flex;
  
    align-items:center;
    justify-content:center;
    border-radius:5%;
box-shadow:2px 2px 10px #707070;

h3{
  align-items:center;
    justify-content:center;
      width: 95%;
      min-height:600px;
    

      font-size:30px;
     flex-direction:column;
    text-align:center;
      display:flex;
 
   

   }

`
export const RightSide = styled.div`
min-width:900px;
    min-height:700px;
    margin:50px;
    display:flex;
    align-items:center;
  justify-content:center;
   flex-direction:column;
   
    border-radius:5%;
box-shadow:2px 2px 10px #707070;

  
`
export const TopRightSide = styled.div`
  width:900px;
    height:80px;

display:flex;
position: relative;
align-items:center;

span{
 
    width:220px;
    height:60px;
    color:#B24C4E;
    text-align:center;
    font-size: 40px;
  
    font-weight: bold;
}


`

export const Scroll = styled.div`

 width: 880px;
 height: 560px;
 margin:20px;
 padding-top:20px;
 padding-left:20px;

display:flex;
position: relative;
flex-direction:column;

overflow-y: auto;

p{
    display:flex;
    flex-direction:inline;
    
}
span{

display:flex;
//margin-top:-250px;
//margin-left:30px;
position: relative;
height: 70px;
width:70px;
color: black;
font-weight: bold;
font-size: 30px;
//margin-top:-20px;

}
a{
  
display:flex;
align-items:center;
margin-left:40px;
position: relative;
height: 70px;
width:500px;
color: black;
font-weight: bold;
font-size: 30px;
//margin-top:-20px;

text-align:center;
}
`


