import styled from "styled-components";



export const DropdwonContainer = styled.article`
grid-area: dropdown;
border-radius: 0 0 0 20px;
right: 0;
top:0;
background: #fff;

`

export const Header = styled.header`

width:100%;
display:flex;
justify-content: space-between;
align-items: center;

padding:20px 10px 10px 20px;

img {
  width:40px;
  aspect-ratio: 1/1;
}

h1 {
  flex:1;
  font-size: 1.4rem;
  padding-left:20px;
  font-family: var(--confortaa);
  font-weight: 700;
}

button {
  border-radius: 50%;
  border-color: transparent;
  width: 50px;
  height: 50px;

  display: grid;
  place-items: center;

  svg {
    width:30px;
    height:30px;
    fill:#3c3c3c;
  }
}
`

export const ListComponents = styled.ul`
height:100%;
max-height: 70vh;
display: block;
flex-direction: column;
gap:10px;
overflow: scroll;

display:flex;
flex-direction: column;

padding:30px 10px;


`
