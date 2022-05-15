import { motion } from "framer-motion";
import styled from "styled-components";

interface Ipages {
  bg: string;
}
export const Container = styled.div`

width:100%;
min-height: calc(100vh - var(--footer-height));

display:grid;
place-items:center;

li {
  height:80px;
  background:pink;
  width:200px;
  margin-top:20px;
}
`

export const Testing = styled(motion.div)`

border:1px solid #f33;
width:150px;
min-height:100vh;
aspect-ratio:1/1;
`

export const Example2 = styled(motion.div)`

background:#fff;
padding:20px;

li {
  border:1px solid red;
  margin-top:20px;
}`

export const Example03 = styled.div`

width:100vw;
height:100vh;
background:tomato;

display:grid;
place-items:center;
position:relative;

button {
  position:absolute;
  top:20px;
  right:10px;

  width:50px;
  height:50px;

  border-radius:50%;

  svg {
    width:60%;
    height:60%;
  }
}
`

export const Pages = styled(motion.div) <Ipages>`

background: ${({ bg }) => bg};
width:100vw;
height:100vh;

position:absolute;
top:0;
right:0;
`
