import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`



* {
    @import url('http://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Space Mono', monospace;
    font-weight: 400;
}
.App {
    height: 100vh;
   background: hsl(185, 41%, 84%);
   display: flex;
   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   @media only screen and (min-width: 375px) and (max-width: 769px) {
    justify-content: space-between;
  }
}
`;

export default GlobalStyles;
