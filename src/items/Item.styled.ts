import styled from 'styled-components';


export const Wrapper = styled.div`
font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
display:flex;
justify-content:space-between;
flex-direction: column;
width:100%;
height:100%;
border: 1px solid lightblue;
border-radius: 20px

button{
  border-radius: 0 0 20px 20px;
}
img {
  max-height: 250px;
  object-fit:cover;
  border-radius:  20px 20px 0 0 ;
}

section{
  
  padding:1rem;
  height:100%;
}

`;

