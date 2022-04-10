import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

* {
  padding:0;
  margin:0;
  box-sizing: border-box;
  font-family: var(--confortaa);
}

li {
  list-style: none;
}

button {
  background-color: white;
  border:1px solid #000;
  cursor:pointer;

  :focus {
    outline:3px solid var(--blue-300);
  }  
}

:root {
  // fonts

  --confortaa: 'Comfortaa';

  // colors

  --purple-300: #5131D1;

  --blue-300: #0DA2E2;

  --black-600: #1C1C1C;
  --black-300: #353535;

  --white:#FFFFFF;


  // variables

  --dropdown-height-closed: 90px;
  --dropdwon-height-open: 100vh;
  --dropdown-width: 300px;

  --footer-height:60px;
  // background gradients

  --bg-radial-gradient-01: radial-gradient(circle, rgba(25,198,254,1) 0%, rgba(133,55,255,1) 100%);
  --bg-linear-gradient-01: linear-gradient(146deg, rgba(25,198,254,1) 0%, rgba(133,55,255,1) 100%); 

  --bg-linear-gradient-02: linear-gradient(146deg, rgba(8,103,250,1) 0%, rgba(177,55,255,1) 74%); 
}


::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background: #47acd2;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #357d99;
  }
  
  body {
    scrollbar-color: #47acd2 #f1f1f1;
    scrollbar-width: thin;
  }
`
export default GlobalStyle;