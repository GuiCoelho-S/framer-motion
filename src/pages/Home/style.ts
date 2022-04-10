import styled from "styled-components";

interface CubeProps {
  format?: string;
}
export const Container = styled.div`

grid-area: main;
margin:0 auto;

width:100%;
height:100%;
min-height: calc(100vh - var(--footer-height));

display: flex;
flex-direction: column;
align-items: center;

padding-top:40px;
gap:20px;
`

export const Content = styled.section`
width:calc(100% - 40px);
height: auto;

border:1px solid purple;

padding:20px;

display: flex;
align-items: center;
gap:30px;

h2 {
  color:white;
}

button {
  font-size:1rem;
  padding:10px 20px; 
  background:tomato;
  color:#fff;
  background:var(--bg-linear-gradient-02);
  border-radius: 8px;
}
`

export const Cube = styled.div<CubeProps>`

width:60px;
height:60px;
background: tomato;

border-radius: ${({ format }) => format ? "50%" : 0 };
`