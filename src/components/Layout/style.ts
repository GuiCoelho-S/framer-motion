import styled from "styled-components";

export const Container = styled.div`
position: relative;

width:100%;
height:100%;
background: var(--bg-linear-gradient-01);

display:grid;
grid-template-columns: 1fr 300px;
grid-template-rows: 1fr;

grid-template-areas: 
  "main dropdown"
  "footer footer";


@media (max-width:1000px){
  grid-template-columns: 1fr;
  grid-template-areas: 
  "dropdown"
  "main"
  "footer"
  ;
}
`