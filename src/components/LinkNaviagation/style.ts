import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled(Link)`

width:100%;
padding:10px 30px 10px 30px;

display: flex;
align-items: center;

text-decoration: none;

p {
  padding-left: 20px;
  font-size: 1.2rem;
  color:var(--black-300);
}

svg {
  width:20px;
  height:20px;
  fill: var(--black-300);
}

transition: color 1.4s, fill 1.4s;

&:hover {
  p {
    color:var(--blue-300);
  }

  svg {
    fill:var(--blue-300);
  }
}

&:focus {
  outline:2px solid var(--blue-300);
  border-radius: 12px;
}
`